const displayBooks = (data) => {
  const container = document.createElement('div');
  container.id = 'books-container';

  data.forEach((book) => {
    const bookCard = `
            <div class="book-card">
            <img src="${book.formats['image/jpeg']}" alt="${book.title}">
                <h2>${book.title}</h2>
                <p>${book.authors[0].name}</p>
                <button class="like-btn">Like</button>
                <button class="comment-btn">Comment</button>
            </div>
        `;
    container.innerHTML += bookCard;
  });

  document.body.insertBefore(container, document.querySelector('footer'));
};

export default displayBooks;