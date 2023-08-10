// Function to fetch comments from the server
const getBooksDetails = async (bookId) => {
  let data = {};
  try {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/I11ph9MsLdYF8zFhvLLF/comments?item_id=${bookId}`
    );
    data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return data;
};

const displayCommentPopup = async (bookData) => {
  // comments
  const comments = await getBooksDetails(bookData.id);
  console.log("Comments:", comments);

  const curtain = document.createElement("div");
  curtain.id = "curtain";
  const commentCtr = document.createElement("div");
  commentCtr.classList.add("popup-content");
  commentCtr.innerHTML = `
        <img src="${bookData.formats["image/jpeg"]}" alt="${bookData.title}">
        <h2>${bookData.title}</h2>
        <p class="author">${bookData.authors[0].name}</p>
        <div class="comments-container">
            <h3>Comments (0)</h3>
            <ul class="comments-list"></ul>
        </div>
        <h3>Leave your comment</h3>
        <form class="form">
            <div>
                <input type="text" class="name" placeholder="Your name" />
            </div>
            <div>
                <textarea type="text" class="comment" placeholder="Your comment"></textarea>
            </div>
            <button type="submit" id="commit-btn">Comment</button>
        </form>
    `;
  curtain.appendChild(commentCtr);
  const closeBtn = document.createElement("button");
  closeBtn.setAttribute("type", "button");
  closeBtn.id = "close-btn";
  closeBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  curtain.appendChild(closeBtn);
  document.body.appendChild(curtain);
  document.querySelector("html").style.overflowY = "hidden";

  closeBtn.addEventListener("click", () => {
    curtain.remove();
    document.querySelector("html").style.overflowY = "auto";
  });

  const form = document.querySelector(".form");
  const submitBtn = form.querySelector("#commit-btn");
  submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const name = form.querySelector(".name").value;
    const comment = form.querySelector(".comment").value;

    if (name.length > 0 && comment.length > 0) {
      const response = await fetch(
        "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/I11ph9MsLdYF8zFhvLLF/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            item_id: bookData.id,
            username: name,
            comment: comment,
          }),
        }
      );

      if (response.ok) {
        const bookData = await getBooksDetails(bookData.id);
        console.log(bookData);
      }
    }
  });
};

export default displayCommentPopup;
