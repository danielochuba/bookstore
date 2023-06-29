import { useSelector } from 'react-redux';
import React from 'react';
import BookForm from './bookInput';
import BookCard from './book';

const Home = () => {
  const books = useSelector((state) => state.book.books);
  const allBooks = books.map((book) => (
    <BookCard
      title={book.title}
      author={book.author}
      category={book.category}
      key={book.item_id}
      id={book.item_id}
    />
  ));

  return (
    <>
      {allBooks}
      <BookForm />
    </>

  );
};
export default Home;
