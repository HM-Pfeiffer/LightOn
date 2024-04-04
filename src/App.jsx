import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Library from './components/Library'; 

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <ul>
          <li>
            <Link to='/'>Home</ Link>
          </li>
          <li>
            <Link to='/library'>Library</Link>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' />
          <Route path='/library' element={<Library />} />
        </Routes>
      </main>
      </Router>
    </div>
  );
}

export default App;







// Default BP code
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

