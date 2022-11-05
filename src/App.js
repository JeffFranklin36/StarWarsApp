//react-features
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

//styling
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
