//react-features
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

//styling
import Container from 'react-bootstrap/Container';
import './App.css';

//components
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;
