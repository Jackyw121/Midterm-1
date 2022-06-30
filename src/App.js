import './App.css';
import { Component } from 'react';
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Student from './component/Student';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
    <Router>
<div className="App">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to = "/">Student</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/student' element={< Student />}></Route>
    <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route>
</Routes>
</div>


    </Router>
  );
  }
  }
  
export default App;

