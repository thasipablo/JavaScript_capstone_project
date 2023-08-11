import { populateComments } from "./populateComments.js";

test("Comment counter", () => {
  const reservationData = [
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
  const commentCounter = document.createElement("h2");
  commentCounter.id = "reservation-counter";
  const commentsList = document.createElement("ul");
  commentCtr.append(commentCounter, commentsList);
  populateComments(reservationData, commentsList);

  const reservationCount = commentsList.querySelectorAll("li").length;

  expect(reservationCount).toBe(3);
});
