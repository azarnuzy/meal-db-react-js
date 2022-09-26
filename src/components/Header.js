import React from 'react';
import restaurant from '../restaurant2.png';
export default function Header({ meal, setMeal }) {
  return (
    <header className="mx-2 rounded-lg bg-primary pt-5 px-7 flex flex-col items-start mt-5 h-[65vh] -z-[100] relative">
      <h1 className="font-semibold text-3xl mt-5">Meal</h1>
      <h2 className="font-semibold text-3xl my-2">Database</h2>
      <p className="font-semibold"> Find Recipe on this DBMeal App!</p>
      <img
        src={restaurant}
        alt=""
        className="absolute bottom-0 left-0 transform -z-10"
      />
    </header>
  );
}
