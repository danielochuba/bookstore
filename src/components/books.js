import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import BookForm from './bookInput';
import BookCard from './book';
import { fetchBooks } from '../redux/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  // const status = useSelector((state) => state.book.status);
  const error = useSelector((state) => state.book.error);
  const loading = useSelector((state) => state.book.loading);

  // const handleRemoveBook = (id) => {
  //   dispatch(deleteBook(id));
  // };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  const mappedBooks = books.map((book) => (
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
      {mappedBooks}
      <BookForm />
    </>

  );
};
export default Home;
