import fetchBooks from './modules/api.js';
import displayBooks from './modules/books.js';
import './style.css';
import Logo from '../assets/logoW.svg';

const logo = document.getElementById('logo');
logo.src = Logo;

fetchBooks().then((data) => {
  displayBooks(data);
});