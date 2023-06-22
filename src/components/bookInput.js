import { useState } from 'react';

function BookForm() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
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
