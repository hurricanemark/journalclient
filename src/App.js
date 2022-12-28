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
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>  

      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item- m-1'>
            <NavLink className='btn btn-light btn-outline-primary' to='/home'>Home</NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className='btn btn-light btn-outline-primary' to='/user'>User</NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className='btn btn-light btn-outline-primary' to='/employee'>Employment</NavLink>
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
