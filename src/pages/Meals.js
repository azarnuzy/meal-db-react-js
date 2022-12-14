import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    try {
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
    } catch (error) {}
  }, []);

  return (
    <>
      <PageTitle title="All Meals" />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 justify-center">
        {meals.map((meal) => {
          return <Card key={meal.idMeal} meal={meal} />;
        })}
      </div>
    </>
  );
}
