// library imports
import fetch from "isomorphic-fetch";
import React, { ChangeEvent, SyntheticEvent } from 'react'
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
import Title from '../../components/Title'
import TodosWrapper from '../../components/TodosWrapper'
import Todo from '../../components/Todo'
import Input from '../../components/Input'
import { Button, InlineButton } from '../../components/Button'
import Container from '../../components/Container'

// typescript imports
import { ITodo } from '../../models/Todo'
import dbConnect from "../../database/dbConnect";
import createTodo from "../../services/createTodo";

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
  const [isCreateTodoFormVisible, setIsCreateTodoFormVisible] = useState(false);
  const router = useRouter();

  async function createNewTodo(e: SyntheticEvent) {
    e.preventDefault();
    setNewTodo("");
    setIsSubmitting(true);
    await createTodo(newTodo) 
    setIsSubmitting(false);
    router.push("/todos");
  }

  function viewTodoPage(tid: string) {
    router.push(`/todo/${tid}`)
  }

  const CreateTodoForm = 
  <Container>
    <Input
      placeholder="Type New Todo Here..."
      value={newTodo}
      onChange={ e => setNewTodo(e.target.value)}
    >
    </Input>
    <InlineButton
      onClick={e => createNewTodo(e)} 
    >
      Create New Todo
    </InlineButton>
    <InlineButton
      onClick={e => setIsCreateTodoFormVisible(!isCreateTodoFormVisible)
      } 
    >
      Cancel
    </InlineButton>
  </Container>

  const AddTodoButton = 
  <Container>
    <Button onClick={() => setIsCreateTodoFormVisible(!isCreateTodoFormVisible)}>
      Add New Todo
    </Button>
  </Container>

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
              <Link href="/todos" passHref>
                <NavigationLink>
                  Inbox
                </NavigationLink>
              </Link>
              <Link href="/today" passHref>
                <NavigationLink>
                  Today
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
          </NavigationContextProvider>
          <Title>
            Your Things Inbox
          </Title>
          
          {isCreateTodoFormVisible ? CreateTodoForm : AddTodoButton}
          
          <TodosWrapper>
            {todosResponse.data.map((todo: ITodo) => (
              <Todo
                key={todo._id}
                _id={todo._id}
                title={todo.title}
              />
            ))}
 
          </TodosWrapper>
      </>
    );
  }
}

export async function getServerSideProps() {
  await dbConnect()
  const res = await fetch(`http://localhost:3000/api/todos`);
  const todos = await res.json();
  return {
    props: {
      todosResponse: todos,
    },
  };
}
