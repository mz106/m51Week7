const express = require("express");

const app = express();

// http://localhost:5001/
// app.use("/", express.static("blank"));

// http://localhost:5001/example
app.use("/", express.static("example"));

app.use("/beansontoast", express.static("beansontoast"));

app.listen(5001, () => {
  console.log("Server is listening");
});
