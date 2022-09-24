import React, { useEffect, useState } from 'react';
import Card from './Card';
import PageTitle from './PageTitle';
import axios from 'axios';

export default function Meals() {
  const client = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1',
  });

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      let response = await client.get('/search.php?f=b');
      setMeals(response.data.meals);
    };

    fetchPost();
  }, []);

  return (
    <>
      <PageTitle />
      {meals.map((meal) => {
        return <Card key={meal.idMeal} meal={meal} />;
      })}
    </>
  );
}
