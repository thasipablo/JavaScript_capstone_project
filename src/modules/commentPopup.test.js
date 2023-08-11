import { populateComments } from "./commentPopup.js";

test("Comment counter", () => {
  const comments = [
    {
      comment: "Good book",
      creation_date: "2023-08-10",
      username: "Paolo",
    },
    {
      comment: "comment",
      creation_date: "2023-08-10",
      username: "Ga",
    },
    {
      comment: "Like it",
      creation_date: "2023-08-10",
      username: "Jo",
    },
  ];
  const commentCtr = document.createElement("div");
  const commentCounter = document.createElement("h3");
  commentCounter.id = "comments-count";
  const commentsList = document.createElement("ul");
  commentCtr.append(commentCounter, commentsList);
  populateComments(comments, commentsList);

  

  const reservationCount = commentsList.querySelectorAll("li").length;

  expect(reservationCount).toBe(3);
});