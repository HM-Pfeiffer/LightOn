import { useState, useEffect } from 'react'; 

export default function Library() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/api/books/');
            const json = await response.json();
            setBooks(json); 
            console.log(books)
        }
        fetchData(); 
    },[]); 

    const textbox = document.getElementById('textbox').value; 
    const bookName = document.getElementById('book-name').value; 
    const author = document.getElementById('author').value; 
    const yearPublished = document.getElementById('year-published').value; 
    const bookDescription = document.getElementById('book-description').value; 
    const button = document.getElementById('button1').value; 

    // const dispatch = useDispatch(); 

    const handleFunction = () => {
      bookName.innerHTML = textbox.value; 
    };

    button.addEventListener('click', handleFunction)

    return (
        <div style={{color: 'blueviolet'}}>
            <textbox id='textbox' style={{width:'4px'}}> </textbox> 
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
        </div>
    )
}