import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import '../css/bookInput.css';

function BookForm() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const bookCategories = [
    'Fiction',
    'Nonfiction',
    'Mystery',
    'Thriller',
    'Romance',
    'Science Fiction',
    'Fantasy',
    'Biography',
    'Self-Help',
    'Historical',
    'Horror',
    'Poetry',
    'Business',
    'Cooking',
    'Travel',
    'Art',
    'Health',
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const randomCategory = () => bookCategories[Math.floor(Math.random() * bookCategories.length)];
    if (name.trim() && author.trim()) {
      dispatch(addBook({
        title: name, author, item_id: uuidv4(), category: randomCategory(),
      }));
      setName('');
      setAuthor('');
    }
  };

  return (
    <section className="formSection robotoFont">

      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>

        <input
          placeholder="Book title"
          type="text"
          className="robotoFont"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Book Author"
          type="text"
          className="robotoFont"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <button type="submit" className="robotoFont" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </section>
  );
}

export default BookForm;
