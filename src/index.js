import fetchBooks from './modules/api.js';
import displayBooks from './modules/books.js';
import itemsCounter from './modules/counter.js';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

import Logo from '../assets/logoW.svg';

const logo = document.getElementById('logo');
logo.src = Logo;

fetchBooks().then((data) => {
  displayBooks(data);
  // Get the count of items
  const count = itemsCounter(data);

  // Update the DOM with the count
  document.getElementById('itemsCounter').textContent = `Items(${count})`;
});
