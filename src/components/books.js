import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import BookCard from './book';
import { fetchBooks } from '../redux/books/booksSlice';
import BookForm from './bookInput';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const status = useSelector((state) => state.book.state);
  const error = useSelector((state) => state.book.error);
  const loading = useSelector((state) => state.book.loading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <>
        <div>{error}</div>
        <BookForm />
      </>
    );
  }

  if (status === 'succeeded' && books.length === 0) {
    return (
      <>
        <div>No books to display</div>
        <BookForm />
      </>
    );
  }
  if (status && status !== 'succeeded') {
    return (
      <>
        <div>{status}</div>
        <BookForm />
      </>
    );
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
