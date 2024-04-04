import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react'; 

export default function Library() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/books/');
            const json = await response.json();
            setBooks(json); 
            console.log(books)
        }
        fetchData(); 
    },[]); 

    return (
        <div style={{color: 'blueviolet'}}>
            <h1 style={{margin: '30px'}}>Home Library</h1>
            <ul>
                { books.map((book, index) => (
                    <li key={index} style={{margin: '35px', paddingBottom: '25px', fontFamily: '-moz-initial', fontSize: 30}}>
                        <div> <strong  style={{fontFamily: 'monospace', color: 'purple'}}>{book.name}</strong></div>
                        <div>{book.author}</div>
                        <div>{book.year_published}</div>
                    </li>
                ))}
            </ul>
            <footer>
                <div style={{margin: '20px', color: 'black', fontSize: '25px', fontFamily: 'monospace'}}>Would you like to add a book?</div>
                <input id='book-input' style={{margin: '30px', borderColor:'purple', height: '25px', width: '900px'}}></input>
                <button><strong style={{color: "maroon", padding: '35px'}}>Book Name</strong></button>
            </footer>
        </div>
    )
}