// library imports
import fetch from "isomorphic-fetch";
import { SyntheticEvent } from 'react'
import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
// component imports
import Navbar from "../../components/Navbar";
import NavbarBrand from "../../components/NavbarBrand";
import HamburgerWrapper from '../../components/HamburgerWrapper'
import HamburgerMenu from '../../components/HamburgerMenu';
import NavigationWrapper from "../../components/NavigationWrapper";
import NavigationLink from "../../components/NavigationLink";
import NavigationContextProvider from '../../context/navigationContext';
// typescript imports
import { ITodo } from '../../models/Todo'

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
        <NavigationContextProvider>
          <Navbar>
            <NavbarBrand>Things Lite</NavbarBrand>
            <HamburgerWrapper>
              <HamburgerMenu></HamburgerMenu>
            </HamburgerWrapper>
          </Navbar>
          <NavigationWrapper>
              <Link href="/" passHref>
                <NavigationLink>
                  Hello
                </NavigationLink>
              </Link>
              <Link href="/inbox" passHref>
                <NavigationLink>
                  Inbox
                </NavigationLink>
              </Link>
              <Link href="/upcoming" passHref>
                <NavigationLink>
                  Upcoming
                </NavigationLink>
              </Link>
              <Link href="/anytime" passHref>
                <NavigationLink>
                  Anytime
                </NavigationLink>
              </Link>
              <Link href="/trash" passHref>
                <NavigationLink>
                  Trash
                </NavigationLink>
              </Link>
          </NavigationWrapper>
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
          </NavigationContextProvider>
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
