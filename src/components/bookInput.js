import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/booksSlice';

function BookForm() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBooks({ title: name, author, item_id: uuidv4() }));
    setName('');
    setAuthor('');
  };

  return (
    <>

      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>

        <input
          placeholder="Book title"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Book Author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </>
  );
}

export default BookForm;
