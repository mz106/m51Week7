// // {
// //   "message": "Welcome to Thunder Client",
// //   "about": "Lightweight Rest API Client for VSCode",
// //   "createdBy": "Ranga Vadhineni",
// //   "launched": 2021,
// //   "features": {
// //     "git": "Save data to Git Workspace",
// //     "themes": "Supports VSCode Themes",
// //     "data": "Collections & Environment Variables",
// //     "testing": "Scriptless Testing",
// //     "local": "Local Storage & Works Offline"
// //   },
// //   "supports": {
// //     "graphql": true,
// //     "codeSnippet": true,
// //     "requestChaining": true,
// //     "scripting": true
// //   }
// // }

// const response = await fetch("http://localhost:5001/books");
// const data = await response.json();

// setAuthor(data.title);
// setGenre(data.genre);

// const [author, setAutorh] = useState("");

// const response = await fetch("http://localhost:5001/books", {
//   method: "POST",
//   mode: "CORS",
//   body: {
//     title: title,
//     author: author,
//     genre: genre,
//   },
// });

// require("dotenv").config();

// console.log(process.env.MY_NAME);
// console.log(process.env.I_LIKE_CHEESE);

// const var1 = true;
// const var2 = ["hello"];
// const var3 = "hello world";

// console.log(typeof var1, var1);
// console.log(typeof var2, var2);
// console.log(typeof var3, var3);

// const myArr = ["hello", "world"];

const key = "car";
const value = "ford";

const myObj = {
  [key]: value,
};

console.log(myObj);
