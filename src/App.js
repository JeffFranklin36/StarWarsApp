import { Route, Router, Routes } from 'react-router-dom';
import './App.css';

//styling
import './App.css';

//components
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>

      </Router>
      <div className="display">
        <Navbar/>
        <Routes>
          <Route path ='/' element={<HomePage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
