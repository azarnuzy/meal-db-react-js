import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Meals from './pages/Meals';
import Search from './pages/Search';

function App() {
  const [mealSearch, setMealSearch] = useState([]);
  const [meal, setMeal] = useState('');
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  const handleKeyPressed = (e) => {
    if (e.key === 'Enter') {
      navigate('/search', { state: { mealSearch: mealSearch, meal: meal } });
      setMeal('');
    }
  };

  useEffect(() => {
    const getMealSearch = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
      );
      setMealSearch(res.data.meals);
    };

    const fetchPost = async () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      const randomCharacter =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      const client = axios.create({
        baseURL: 'https://www.themealdb.com/api/json/v1/1',
      });
      let response = await client.get(`/search.php?s=${randomCharacter}`);
      setMeals(response.data.meals);
    };

    fetchPost();
    getMealSearch();
  }, [meal, setMeals]);

  return (
    <div className="App font-inter ">
      <Navbar
        meal={meal}
        setMeal={setMeal}
        handleKeyPressed={handleKeyPressed}
      />
      <Routes>
        <Route path="/" element={<Home />} meals={meals} />
        <Route path="/:id" element={<Detail />} />
        <Route path="meals" element={<Meals />} meals={mealSearch} />
        <Route path="meals/:id" element={<Detail />} />
        <Route path="search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
