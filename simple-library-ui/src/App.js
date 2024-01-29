import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Library from './Library';
import AddBook from './AddBook';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook';

function App() {
  return (
    <div className="App">
      <nav className="Navbar">
        <ul className='NavList'>
          <li>
            <Link className='NavLink' to="/ViewLibrary">View Library</Link>
          </li>
          <li>
            <Link className='NavLink' to="/AddBook">Add a book</Link>
          </li>
          <li>
            <Link className='NavLink' to="/DeleteBook">Delete a book</Link>
          </li>
          <li>
            <Link className='NavLink' to="/UpdateBook">Update a book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/ViewLibrary" element={<Library />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/DeleteBook" element={<DeleteBook />} />
        <Route path="/UpdateBook" element={<UpdateBook />} />
      </Routes>
    </div>
  );
}

export default App;
