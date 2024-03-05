import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Welcome from './pages/welcome';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Welcome}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
