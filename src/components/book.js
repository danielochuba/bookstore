/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import '../css/book.css';

function BookCard({
  title, author, id, category,
}) {
  const dispatch = useDispatch();
  return (
    <div className="card" id={id}>
      <div className="bookDescription">
        <span className="bookType">{category }</span>
        <h2 className="bookTitle">{title}</h2>
        <span className="bookAuthor">{author}</span>
        <div className="ctaButtons">
          <button type="button" className="btn comments">Coments</button>
          |
          <button type="button" onClick={() => { dispatch(deleteBook(id)); }} className=" btn remove">Remove</button>
          |
          <button type="button" className=" btn edit">Edit</button>
        </div>
      </div>
      <div className="bookCompletion">
        <span className="progressMeter">spinner</span>
        <span className="progressCount">
          64%
          {' '}
          <small className="complete">Completed</small>
        </span>
      </div>
      <div className="userProgress">
        <span className="chapterText">CURRENT CHAPTER</span>
        <span className="currentChapter">Chapter 17</span>
        <button type="button" className="updtProgBtn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default BookCard;
