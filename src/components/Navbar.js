import React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar({ meal, setMeal, handleKeyPressed }) {
  return (
    <nav>
      <div className="w-20 h-20 m-auto absolute top-0 right-1/2 transform rotate-45 translate-x-1/2 -z-10 -translate-y-[45%] rounded-md bg-primary"></div>
      <h1 className="font-bold text-2xl mt-5 text-center">DBMeal</h1>
      <ul className="flex justify-center gap-8 my-4">
        <NavLink
          end
          to=""
          className={({ isActive }) => {
            return isActive ? 'active' : undefined;
          }}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/meals"
          className={({ isActive }) => {
            return isActive ? 'active' : undefined;
          }}
        >
          <li>Meals</li>
        </NavLink>
        <NavLink
          to="/category"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          <li>Category</li>
        </NavLink>
        <NavLink
          to="/area"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          <li>Area</li>
        </NavLink>
      </ul>
      <div className=" flex m-auto w-[90%] ">
        <div className="w-10 h-10 flex justify-center items-center  rounded-y-2xl rounded-l-2xl bg-gray-100 ">
          <label htmlFor="search-input">
            <AiOutlineSearch />
          </label>
        </div>
        <input
          id="search-input"
          type="text"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
          onKeyDown={(e) => handleKeyPressed(e)}
          className="w-full rounded-y-2xl rounded-r-2xl bg-gray-100 "
          placeholder="Search Meal and more"
        />
      </div>
    </nav>
  );
}
