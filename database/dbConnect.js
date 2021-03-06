import mongoose from "mongoose";

async function dbConnect() {
  // check if we have a connection to the database or if it's already connected, currently
  // connecting or disconnecting (readyState 1, 2 and 3)
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    return mongoose.connect(process.env.NEXT_MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (e) {
    console.log(e.messsage);
  }
}

export default dbConnect;
