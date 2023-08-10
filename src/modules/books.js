const displayBooks = (data) => {
  const container = document.querySelector("#books-container");

  data.forEach((book) => {
    const bookCard = `
    <div class="book-card">
        <img src="${book.formats["image/jpeg"]}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>${book.authors[0].name}</p>
        <div class="button-container">
        <button class="like-btn"><i class="fa fa-thumbs-up"></i></button>
        <button class="comment-btn" id="${book.id}"><i class="fa fa-comment"></i></button>
        <button class="reservation-btn"><i class="fa fa-clipboard"></i></button>
        </div>
    </div>
`;
    container.innerHTML += bookCard;
  });
};

export default displayBooks;
