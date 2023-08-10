import { fetchBooks, getBook, books } from "./modules/api.js";
import displayBooks from "./modules/books.js";
import "./style.css";
import Logo from "../assets/logoW.svg";
import "font-awesome/css/font-awesome.min.css";

const logo = document.getElementById("logo");
logo.src = Logo;

displayBooks(books);

const commentBtnTags = document.querySelectorAll(".comment-btn");
const commentPopupWindow = document.querySelector(".comment-popup");
const popupContent = document.querySelector(".comment-popup__content-body");

const closeBtn = document.querySelector(".popup-close-btn");
closeBtn.addEventListener("click", () => {
  commentPopupWindow.classList.toggle("hidden");
  console.log("Click", commentPopupWindow.classList);
});

commentBtnTags.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const book = await getBook(btn.id);
    commentPopupWindow.classList.toggle("hidden");
    popupContent.innerHTML = `
      <div>
      <img src="${book.formats["image/jpeg"]}" alt="${book.title}">
      </div>
      <h1>${book.title}</h1>
      <p>${book.id}</p>
      <form>
        <div><input type="text" placeholder="Your name" /></div>
        <div><input type="text" placeholder="Your insights" /></div>
        <button type="submit">Comment</button>
      </form>
    `;
  });
});
