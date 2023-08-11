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
  const reservationCtr = document.createElement("div");
  const reservationCounter = document.createElement("h2");
  reservationCounter.id = "reservation-counter";
  const reservationList = document.createElement("ul");
  reservationCtr.append(reservationCounter, reservationList);
  populateComments(reservationData, reservationList);

  const reservationCount = reservationList.querySelectorAll("li").length;

  expect(reservationCount).toBe(3);
});
