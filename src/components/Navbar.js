import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
export default function Navbar() {
  return (
    <nav>
      <div className="w-20 h-20 m-auto absolute top-0 right-1/2 transform rotate-45 translate-x-1/2 -z-10 -translate-y-[45%] rounded-md bg-primary"></div>
      <h1 className="font-bold text-2xl mt-5 text-center">DBMeal</h1>
      <ul className="flex justify-center gap-8 my-4">
        <li className="active">Home</li>
        <li className="">Category</li>
        <li className="">Popular</li>
      </ul>
      <div className=" flex justify-center mx-8">
        <div className="w-10 h-10 flex justify-center items-center  rounded-y-2xl rounded-l-2xl bg-gray-100 ">
          <label htmlFor="search-input">
            <AiOutlineSearch />
          </label>
        </div>
        <input
          id="search-input"
          type="text"
          className="w-full rounded-y-2xl rounded-r-2xl bg-gray-100 "
          placeholder="Search Meal and more"
        />
      </div>
    </nav>
  );
}
