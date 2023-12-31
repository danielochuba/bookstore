import React from 'react';
import PropTypes from 'prop-types';
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
        <span className="bookType">{ category }</span>
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
        <span className="progressMeter">
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill" />
              </div>
              <div className="mask half">
                <div className="fill" />
              </div>
              <div className="inside-circle"> </div>
            </div>
          </div>
        </span>
        <span className="progressCount">
          64%
          {' '}
          <small className="complete">Completed</small>
        </span>
      </div>
      <div className="userProgress">
        <span className="chapterText robotoFont">CURRENT CHAPTER</span>
        <span className="currentChapter robotoFont">Chapter 17</span>
        <button type="button" className="updtProgBtn robotoFont">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookCard;
