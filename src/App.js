//react features
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import './App.css';

//styling
import Container from 'react-bootstrap/Container';
import './App.css';

//components
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar />
        </Container>
        <div className='display'>
        <Routes>
            <Route path ='/' element={<HomePage/>} />
            <Route path ='/about' element={<AboutPage/>} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
