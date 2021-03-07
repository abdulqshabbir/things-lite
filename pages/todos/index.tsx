import fetch from "isomorphic-fetch";
import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

import { SyntheticEvent } from 'react'
import { ITodo } from '../../models/Todo'
import NavbarBrand from "../../components/NavbarBrand";
import HamburgerWrapper from '../../components/HamburgerWrapper'
import HamburgerMenu from '../../components/HamburgerMenu';

interface IProps {
  todosResponse: {
    data: ITodo[] | null,
    message: string | null,
    success: boolean
  }
}

export default function Home({ todosResponse }: IProps) {
  const [newTodo, setNewTodo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function createNewTodo(e: SyntheticEvent) {
    e.preventDefault();
    setNewTodo("");
    setIsSubmitting(true);
    await fetch(`/api/todos`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTodo,
      }),
    }).catch((e) => console.log(e));
    setIsSubmitting(false);
    router.push("/todos");
  }

  if (!todosResponse.success || !todosResponse.data) {
    return (
      <div>
        <p>Something went wrong with fetching the todos...</p>
        <input
          type="text"
          placeholder="Type new todo here..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={(e) => createNewTodo(e)}>Create New Todo</button>
      </div>
    );
  } else {
    return (
      <>
        <Navbar>
          <NavbarBrand>Things Lite</NavbarBrand>
          <HamburgerWrapper>
            <HamburgerMenu></HamburgerMenu>
          </HamburgerWrapper>
        </Navbar>
        <div>
          {todosResponse.data.map((todo: ITodo) => (
            <li key={todo._id}>{todo.title}</li>
          ))}
        </div>
        <div>
          {isSubmitting ? "Loading" : null}
          <input
            type="text"
            placeholder="Type new todo here..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={(e) => createNewTodo(e)}>Create New Todo</button>
        </div>
      </>
    );
  }
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/todos`);
  const todos = await res.json();
  return {
    props: {
      todosResponse: todos,
    },
  };
}
