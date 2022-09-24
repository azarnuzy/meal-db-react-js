import React from 'react';
import restaurant from '../restaurant.png';
export default function Header() {
  return (
    <header className="mx-2 rounded-lg bg-primary pt-5 px-7 flex flex-col items-start mt-5 h-[65vh] min-h-[500px]  relative">
      <h1 className="font-semibold text-3xl ">Meal</h1>
      <h2 className="font-semibold text-3xl my-2">Database</h2>
      <p className="font-semibold">Find Recipe on this DBMeal App!</p>
      <img
        src={restaurant}
        alt=""
        className="absolute bottom-0 transform scale-90"
      />
    </header>
  );
}
