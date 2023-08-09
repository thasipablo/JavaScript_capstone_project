const API_URL = 'https://gutendex.com/books';

const fetchBooks = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return Object.values(data.results);
};

export default fetchBooks;
