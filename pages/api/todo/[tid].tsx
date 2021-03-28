import Todo, { ITodo } from "../../../models/Todo";
import { NextApiResponse, NextApiRequest } from 'next'

export interface GetTodoResponse {
  success: boolean,
  message: string,
  data: null | ITodo
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const todoId = req.query.tid;
  const method = req.method;

  switch (method) {
    case "GET":
      try {
        const todo = await Todo.findById(todoId).exec();
        if (!todo) {
          res.status(400).json({
            success: false,
            message: "The todo with that id does not exist.",
            data: null
          });
        } else {
          res.status(400).json({
            success: true,
            data: todo,
            message: ''
          });
        }
      } catch (e) {
        console.log(e);
        res
          .status(400)
          .json({ 
            success: false,
            data: null,
            message: "Could not get a todo with this id."
          });
      }
      break;
      case "DELETE":
        try {
          await Todo.findByIdAndDelete(todoId)
          res.status(200).json({
            success: true,
            data: null,
            message: null
          })
          
        } catch(e) {
          console.log(e);
          res.status(400).json({
            success: false,
            data: null,
            message: "Could not delete todo."
          })
        }
  }
}
