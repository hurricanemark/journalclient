import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {User} from './User';
import {Employment} from './Employment';
/* modules needed for routing*/
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center text-warning fs-3 fst-italic m-3 shadow-sm p-3 mb-5 rounded">
        Personel Career Chronicle
      </h3>  

      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item- m-1'>
            <NavLink className='btn btn-light btn-outline-primary' alt="Home" to='/home'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg>
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className='btn btn-light btn-outline-primary' to='/user'>Account</NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className='btn btn-light btn-outline-primary' to='/employee'>Employment Profile</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/user' element={<User/>}/>
        <Route exact path='/employee' element={<Employment/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
