import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Meals from './pages/Meals';

function App() {
  return (
    <div className="App font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="meals" element={<Meals />} />
        <Route path="about" element={<About />} />
        <Route path="meals/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
