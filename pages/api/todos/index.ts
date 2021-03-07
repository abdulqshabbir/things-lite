import dbConnect from "../../../database/dbConnect";
import Todo from "../../../models/Todo";
import { NextApiRequest, NextApiResponse } from 'next'

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const method = req.method;
  switch (method) {
    case "GET":
      try {
        const todos = await Todo.find({});
        res.status(200).json({ success: true, data: todos, message: null });
      } catch (e) {
        res
          .status(400)
          .json({ success: false, data: null, message: "Could not find todos..." });
      }
      break;
    case "POST":
      try {
        const newTodo = await Todo.create(req.body);
        res.status(200).json({ success: true, data: newTodo, message: null });
      } catch (e) {
        res
          .status(400)
          .json({ success: false, data: null, message: "Could not create todo..." });
      }
      break;
  }
};
