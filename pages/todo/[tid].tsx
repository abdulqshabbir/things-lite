import  React, { useState, useEffect, MouseEvent } from 'react'
import {GetServerSidePropsContext} from 'next'
import { GetTodoResponse } from '../api/todo/[tid]'
import { useRouter } from 'next/router'

// Navigation Imports
import Navbar from "../../components/Navbar";
import NavbarBrand from "../../components/NavbarBrand";
import HamburgerWrapper from '../../components/HamburgerWrapper'
import HamburgerMenu from '../../components/HamburgerMenu';
import NavigationWrapper from "../../components/NavigationWrapper";
import NavigationLink from "../../components/NavigationLink";
import NavigationContextProvider from '../../context/navigationContext';
import Link from 'next/link'

// Component Imports
import Label from '../../components/Label'
import Input from '../../components/Input'
import Container from '../../components/Container'
import Title from '../../components/Title';
import { Button, DangerButton } from '../../components/Button'

// Services
import deleteTodo from '../../services/deleteTodo'
import updateTodo from '../../services/updateTodo'
import { ITodo } from '../../models/Todo';

interface IProps {
  todoResponse: GetTodoResponse
}

export default function Todo({ todoResponse }: IProps) {
  const router = useRouter()
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  useEffect(() => {
    if (todoResponse.data !== null) {
      setTitle(todoResponse.data.title)
      setId(todoResponse.data._id)
      if (todoResponse.data.text) {
        setText(todoResponse.data.text)
      }
    }
  }, [])

  async function handleTodoEdit(e: MouseEvent) {
    debugger;
    e.preventDefault()
    setIsUpdating(true)
    const updatedTodo: ITodo = createUpdatedTodo()
    await updateTodo(updatedTodo)
    router.push('/todos')
  }

  function createUpdatedTodo() {
    return {
      _id: id,
      title,
      text
    }
  }

  async function handleTodoDelete(e: MouseEvent) {
    e.preventDefault()
    setIsDeleting(true)
    await deleteTodo(id)
    router.push('/todos')
  }

  if (!todoResponse.success) {
    return <p>Sorry we could not find the todo you were looking for.</p>;
  }
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
      <Container>
        <Title>
          Edit your Todo
        </Title>
        <form>
          <Label>
            Title:
          </Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label>
            Description:
          </Label>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button onClick={e => handleTodoEdit(e)}>Save Changes</Button>
          <DangerButton onClick={e => handleTodoDelete(e)}>Delete Todo</DangerButton>
        </form>
      </Container>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const todoId = context.query.tid;
  const res = await fetch(`http://localhost:3000/api/todo/${todoId}`);
  const todoResponse = await res.json();
  return {
    props: {
      todoResponse,
    },
  };
}
