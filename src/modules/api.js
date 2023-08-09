const API_URL = "https://gutendex.com/books";

export const fetchBooks = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return Object.values(data.results);
};

export let books = (await fetchBooks()) || [];

export const getBook = (id) => {
  const book = books.find((book) => book.id === id);
  console.log("Book: ", book);
  return book;
};
