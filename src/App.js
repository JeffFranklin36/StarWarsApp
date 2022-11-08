//react features
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import './App.css';

//styling
import './App.css';
import Container from 'react-bootstrap/Container';

//components
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';

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
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
