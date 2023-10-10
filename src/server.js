require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

async function connection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected");
  } catch (error) {
    console.log(error);
  }
}

connection();

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("book", bookSchema);

app.get("/books", async (request, response) => {
  const books = await Book.find();

  const successResponse = {
    message: "success",
    books: books,
  };

  response.send(successResponse);
});

app.post("/books", async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });
  console.log(typeof newBook, newBook);

  const successResponse = {
    message: "success",
    newBook: newBook,
  };

  response.send(successResponse);
});

app.put("/books", async (request, response) => {
  const update = await Book.updateOne(
    { title: request.body.title },
    { author: request.body.newAuthor }
  );

  const successResponse = {
    message: "success",
    update: update,
  };

  response.send(successResponse);
});

app.delete("/books", async (request, response) => {
  const deletion = await Book.deleteOne({ title: request.body.title });

  const successResponse = {
    message: "success",
    deletion: deletion,
  };

  response.send(successResponse);
});

app.listen(5001, () => {
  console.log("Server is listening");
});
