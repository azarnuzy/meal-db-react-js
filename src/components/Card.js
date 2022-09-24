import React from 'react';

export default function Card({ meal }) {
  return (
    <div className="rounded-xl w-screen mx-2">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
}
