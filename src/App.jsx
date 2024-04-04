import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Library from './components/Library'; 

function App() {
  return (
    <div className="App">
      <Router>
      <header>
            <div> <Link className={"App-link"} style={{margin: '40%', paddingBottom: '25px'}} to='/'>Home</ Link>  </div>
            <div> <Link className={"App-link"} style={{margin: '40%'}} to='/library'>Library</Link>  </div>
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

