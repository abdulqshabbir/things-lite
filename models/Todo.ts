import mongoose, { Document } from "mongoose";

export interface ITodo extends Document {
  title: string,
  text?: string,
  dueDate?: string,
  priority?: string,
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    maxLength: [40, "Todo length cannot be more than 40 characters"],
  },
  dueDate: {
    type: Date,
  },
  priority: {
    type: String,
  },
});

// if Todo model already exists, do not overwrite it and just return
export default mongoose.models.Todo || mongoose.model<ITodo>("Todo", todoSchema);
