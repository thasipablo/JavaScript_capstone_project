import { fetchBooks, getBook, books } from "./modules/api.js";
import displayBooks from "./modules/books.js";
import "./style.css";
import Logo from "../assets/logoW.svg";
import "font-awesome/css/font-awesome.min.css";

const logo = document.getElementById("logo");
logo.src = Logo;

displayBooks(books);

const commentBtnTags = document.querySelectorAll(".comment-btn");
commentBtnTags.forEach((btn) => {
  btn.addEventListener("click", () => {
    const book = getBook(btn.id);
    console.log(btn.id, book);
  });
});
