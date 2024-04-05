import { useState, useEffect, useDispatch } from 'react';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils'; 
const { Model } = require('sequelize');

const BookCreator = (props) => {
  
    // const dispatch = useDispatch(); 

    // const handleFunction = () => {
    //   const text = document.getElementById('book-input').value; 
    //   dispatch(Model.book(text)); 
    // };

    return (
      <div>
             {/* <div className="displayBox"> */}
        {/* <input type = "text" id="location" name="location"></input> */}
        <footer>
                <div style={{margin: '20px', color: 'black', fontSize: '25px', fontFamily: 'monospace'}}>Would you like to add a book?</div>
                {/* <input id='book-input' style={{margin: '30px', borderColor:'purple', height: '25px', width: '900px'}}></input>
                <button><strong style={{color: "maroon", padding: '35px'}}>Book Name</strong></button> */}
                <form style={{padding:'10px'}}>

                    <legend>Book Title</legend>
                    <input id= 'book-name' style={{padding:'1em', width: '1000px', height: '5px'}}></input>

                    <legend>Author</legend>
                    <input id='author' style={{padding:'1em', width: '1000px', height: '5px', placeholder:'Optional...'}} ></input>

                    <legend>Year Published</legend>
                    <input id='year-published' style={{padding:'1em', width: '1000px', height: '5px', placeholder:'Optional...'}} ></input>

                    <legend>Description</legend>
                    <input id='book-description' style={{padding:'1em', width: '1000px', height: '5px', placeholder:'Optional...'}} ></input>
                    
                    <div></div>
                    <button id='button1' type="submit" value="Submit" onClick={handleFunction}><strong style={{marginRight: '5px', color: "maroon", padding: '35px'}}>Submit</strong></button> 
                </form>
            </footer>
      </div>
    );
  };
  
  export default MarketCreator;
  