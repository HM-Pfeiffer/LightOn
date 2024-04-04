import { useState, useEffect, useDispatch } from 'react'; 

const BookCreator = (props) => {
  
    const dispatch = useDispatch(); 

    const handleFunction = () => {
      const text = document.getElementById('book-input').value; 
      dispatch(addBook(text)); 
    };

    return (
      <div className="displayBox">
        <h3>Create New Market</h3>
        <label htmlFor='location'>Location</label>
        <input type = "text" id="location" name="location"></input>
        <button onClick={handleFunction}>Add Market</button>
      </div>
    );
  };
  
  export default MarketCreator;
  