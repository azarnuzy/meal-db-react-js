import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ meal }) {
  return (
    <Link to={`/meals/${meal.idMeal}`}>
      <div className="drop-shadow-md rounded-3xl border border-solid border-slate-300 max-w-[100vw] mx-2 mb-2 pb-4 hover:transform hover:opacity-80 transition duration-100 ease-in-out">
        <img
          className="w-screen h-[200px] object-cover rounded-t-3xl"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <h3 className="px-3 pt-2 font-semibold text-lg">{meal.strMeal}</h3>
        <h4 className="px-3 font-medium text-md">{meal.strCategory}</h4>
      </div>
    </Link>
  );
}
