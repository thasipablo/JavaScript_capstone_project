import displayCommentPopup from "./commentPopup.js";
import fetchLikes from "./likes.js";
import displayReservations from "./reservationsPopup.js";

const LIKES_API_URL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/I11ph9MsLdYF8zFhvLLF/likes/";
const RESERVATION_API_URL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/I11ph9MsLdYF8zFhvLLF/reservations";

const displayBooks = async (data) => {
  const container = document.createElement("div");
  container.id = "books-container";

  const likesData = await fetchLikes();

  data.forEach((book) => {
    const bookLikes = likesData.find((like) => like.item_id === book.id) || {
      likes: 0,
    };
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.innerHTML = `
      <img src="${book.formats["image/jpeg"]}" alt="${book.title}">
      <h2>${book.title}</h2>
      <p class="author">${book.authors[0].name}</p>
      <div class="button-container">
        <button class="like-btn">
          <i class="fa fa-thumbs-up"></i>
          <span class="likes-counter">${bookLikes.likes}</span>
        </button>
        <button class="comment-btn"><i class="fa fa-comment"></i></button>
        <button class="reservation-btn"><i class="fa fa-clipboard"></i></button>
      </div>
      `;
    container.appendChild(bookCard);

    bookCard.querySelector(".reservation-btn").addEventListener("click", () => {
      displayReservations(RESERVATION_API_URL, book);
    });
    //
    bookCard.querySelector(".comment-btn").addEventListener("click", () => {
      displayCommentPopup(RESERVATION_API_URL, book);
    });
  });

  document.body.insertBefore(container, document.querySelector("footer"));
  document.querySelectorAll(".like-btn").forEach((btn, index) => {
    btn.addEventListener("click", async () => {
      const book = data[index];
      const response = await fetch(LIKES_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_id: book.id,
        }),
      });

      if (response.ok) {
        const likeCountElement = btn.querySelector(".likes-counter");
        const currentLikes = parseInt(likeCountElement.textContent, 10);
        likeCountElement.textContent = `${currentLikes + 1}`;
      }
    });
  });
};

export default displayBooks;
