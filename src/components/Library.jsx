import { useState, useEffect } from 'react'; 

export default function Library() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4005/api/books/');
            const json = await response.json();
            setBooks(json); 
        }
        fetchData(); 
    },[]); 

    return (
        <div>
            <h1>Home Library</h1>
            <ul>
                { books.map((book, index) => (
                    <content>
                    <li key={index} style={{margin: '5px', paddingBottom: '25px', fontFamily: '-moz-initial', fontSize: 30}}>
                        <div> <strong  style={{fontFamily: 'monospace', color: 'purple'}}>{book.name}</strong></div>
                        <div>{book.author}</div>
                        <div>{book.year_published}</div>
                    </li>
                    </content>
                ))}
            </ul>
            <footer>
                <input style={{margin: '30px'}}></input>
                <button>Check Library Updates</button>
                </footer>
        </div>
    )
}