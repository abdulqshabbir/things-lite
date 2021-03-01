import dbConnect from "../../../database/dbConnect";
import Todo from "../../../models/Todo";

dbConnect();

export default async (req, res) => {
  const method = req.method;

  switch (method) {
    case "GET":
      try {
        const todos = await Todo.find({});
        res.status(200).json({ success: true, data: todos });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const newTodo = await Todo.create(req.body);
        res.status(200).json({ success: true, data: newTodo });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
