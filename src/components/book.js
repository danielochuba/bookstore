function BookCard() {
  return (
    <div className="card">
      <div className="bookDescription">
        <span className="bookType">Action</span>
        <h2 className="bookTitle">The Hunger Games</h2>
        <span className="bookAuthor">Suzzane Collins</span>
        <div className="ctaButtons">
          <button type="button" className="btn comments">Coments</button>
          <button type="button" className=" btn remove">Remove</button>
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
