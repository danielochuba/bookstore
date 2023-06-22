import { useState } from 'react';

function BookForm() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

  }

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        <input
          placeholder='Book title'
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          placeholder='Book Author'
          type="text" 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </label>
    </form>
  )
}

export default BookForm;