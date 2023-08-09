const API_URL = 'https://gutendex.com/books';

const fetchBooks = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data.results);
  return Object.values(data.results);
};

export default fetchBooks;