import {GetServerSidePropsContext} from 'next'
import { GetTodoResponse } from '../api/todo/[tid]'

interface IProps {
  todoResponse: GetTodoResponse
}

export default function Todo({ todoResponse }: IProps) {
  if (!todoResponse.success) {
    return <p>Sorry we could not find the todo you were looking for.</p>;
  }
  return (
    <div>
      <p>Todo id: {todoResponse.data?.title}</p>
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
