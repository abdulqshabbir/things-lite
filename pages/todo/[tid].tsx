import  React, { useState, useEffect } from 'react'
import {GetServerSidePropsContext} from 'next'
import { GetTodoResponse } from '../api/todo/[tid]'

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

interface IProps {
  todoResponse: GetTodoResponse
}

export default function Todo({ todoResponse }: IProps) {
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (todoResponse.data !== null) {
      setTitle(todoResponse.data.title)
      if (todoResponse.data.text) {
        setText(todoResponse.data.text)
      }
    }
  }, [])

  function handleTodoEdit() {
  }

  function handleTodoDelete() {

  }

  if (!todoResponse.success) {
    return <p>Sorry we could not find the todo you were looking for.</p>;
  }
  return (
    <div>
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
      <form>
        <Label>
          Title
        </Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label>
          Description
        </Label>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleTodoEdit}>Save Changes</button>
        <button onClick={handleTodoDelete}>Delete Todo</button>
      </form>
    </div>
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
