import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Packages from './pages/packages';
import Trips from './pages/trips';
import Souvenirs from './pages/souvenirs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/souvenirs" element={<Souvenirs />} />
      </Routes>
    </Router>
  );
}

export default App;