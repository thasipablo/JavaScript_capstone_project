import fetchLikes from './likes.js';

const LIKES_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/I11ph9MsLdYF8zFhvLLF/likes/';

const displayBooks = async (data) => {
  const container = document.createElement('div');
  container.id = 'books-container';

  const likesData = await fetchLikes();

  data.forEach((book) => {
    const bookLikes = likesData.find((like) => like.item_id === book.id) || { likes: 0 };
    const bookCard = `
      <div class="book-card">
        <img src="${book.formats['image/jpeg']}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>${book.authors[0].name}</p>
        <p>Likes: ${bookLikes.likes}</p>
        <div class="button-container">
          <button class="like-btn"><i class="fa fa-thumbs-up"></i></button>
          <button class="comment-btn"><i class="fa fa-comment"></i></button>
          <button class="reservation-btn"><i class="fa fa-clipboard"></i></button>
        </div>
      </div>
    `;
    container.innerHTML += bookCard;
  });

  document.body.insertBefore(container, document.querySelector('footer'));
  document.querySelectorAll('.like-btn').forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      const book = data[index];
      const response = await fetch(LIKES_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: book.id,
        }),
      });

      if (response.ok) {
        const likeCountElement = btn.parentElement.previousElementSibling;
        const currentLikes = parseInt(likeCountElement.textContent.split(": ")[1], 10);
        likeCountElement.textContent = `Likes: ${currentLikes + 1}`;
      }
    });
  });  
};

export default displayBooks;
