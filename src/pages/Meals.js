import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const client = axios.create({
        baseURL: 'https://www.themealdb.com/api/json/v1/1',
      });
      let response = await client.get('/search.php?s=');
      setMeals(response.data.meals);
    };

    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <PageTitle />
      <div className="grid grid-cols-1 gap-3">
        {meals.map((meal) => {
          return <Card key={meal.idMeal} meal={meal} />;
        })}
      </div>
    </>
  );
}
