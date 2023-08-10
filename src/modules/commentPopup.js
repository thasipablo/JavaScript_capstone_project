const displayCommentPopup = (apiURL, bookData) => {
  const curtain = document.createElement('div');
  curtain.id = 'curtain';
  const reservationCtr = document.createElement('div');
  reservationCtr.classList.add('popup-content');
  reservationCtr.innerHTML = `
        <img src="${bookData.formats['image/jpeg']}" alt="${bookData.title}">
        <h2>${bookData.title}</h2>
        <p class="author">${bookData.authors[0].name}</p>
        <div class="comments-container">
            <h3>Comments</h3>
        </div>
        <h3>Leave your comment</h3>
        <form class="form">
            <div>
                <input type="text" class="name" placeholder="Your name" />
            </div>
            <div>
                <textarea type="text" class="comment" placeholder="Your comment"></textarea>
            </div>
            <button type="submit">Comment</button>
        </form>
    `;
  curtain.appendChild(reservationCtr);
  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('type', 'button');
  closeBtn.id = 'close-btn';
  closeBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  curtain.appendChild(closeBtn);
  document.body.appendChild(curtain);
  document.querySelector('html').style.overflowY = 'hidden';

  closeBtn.addEventListener('click', () => {
    curtain.remove();
    document.querySelector('html').style.overflowY = 'auto';
  });
};

export default displayCommentPopup;
