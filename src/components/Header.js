import React from 'react';
import restaurant from '../restaurant2.png';
export default function Header({ meal, setMeal }) {
  return (
    <header className="mx-2 rounded-lg bg-primary pt-5 px-7 flex flex-col items-start mt-5 h-[65vh] md:h-[60vh] lg:h-[45vh] -z-[100] relative">
      <h1 className="font-semibold text-3xl mt-5">Meal</h1>
      <h2 className="font-semibold text-3xl my-2">Database</h2>
      <h3 className="font-semibold text-xl my-2">
        It's All About Good Food & Good Taste
      </h3>
      <p className="font-semibold"> Find Recipe on this DBMeal App!</p>
      <img
        src={restaurant}
        alt=""
        className="absolute bottom-0  -z-10 top-1/2 left-1/2 transform -translate-x-1/2  md:-translate-y-32 md:left-1/2 md:right-1/2 lg:-translate-x-10 lg:-translate-y-1/2 lg:scale-90"
      />
    </header>
  );
}
