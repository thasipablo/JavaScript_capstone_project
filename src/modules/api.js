const API_URL = "https://gutendex.com/books";

export const fetchBooks = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return Object.values(data.results);
};

export let books = (await fetchBooks()) || [];

export const getBook = async (id) => {
  const book = await books.find((book) => book.id === Number(id));
  console.log("Books: ", books);
  return book;
};
