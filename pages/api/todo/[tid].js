import Todo from "../../../models/Todo";

export default async function handler(req, res) {
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
          });
        } else {
          res.status(400).json({
            success: true,
            data: todo,
          });
        }
      } catch (e) {
        console.log(e);
        res
          .status(400)
          .json({ success: false, message: "Something went wrong..." });
      }
      break;
  }
}
