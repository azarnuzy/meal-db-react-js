import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const getMeal = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      setMeal(res.data.meals);
      setLoading(false);
    };

    getMeal();
  }, [params, setMeal, setLoading]);

  if (meal.length > 0) {
    return (
      <div className="max-w-[100vw] mx-2 mt-5">
        <div className="flex justify-between mb-3">
          <div className="ml-3 flex items-center">
            <Link to="/Meals" className="text-slate-500 text-sm">
              Meals
            </Link>
            <span className="text-sm text-slate-400"> &nbsp;/&nbsp; </span>
            <span className="text-sm to-slate-800"> {meal[0].strMeal}</span>
          </div>
          <Link
            to="/Meals"
            className="flex items-center font-bold px-3 py-1 rounded-2xl text-[#f3c0b5] border border-solid border-[#f3c0b5] hover:opacity-50"
          >
            <AiOutlineArrowLeft className="mr-1" /> Back
          </Link>
        </div>
        <img
          src={meal[0].strMealThumb}
          className="max-h-[300px] w-screen object-cover rounded-xl shadow-md"
          alt=""
        />
        <span className="mt-3 ml-2 font-bold text-lg block ">
          {meal[0].strMeal}
        </span>
        <div className="mt-1 mx-3 border-b-2 border-solid border-slate-200 pb-3">
          <table className="text-left text-md mb-3 mr-0">
            <tbody>
              <tr>
                <th className="w-[30vw]">Category</th>
                <td>{meal[0].strCategory}</td>
              </tr>
              <tr>
                <th className="w-[30vw]">Area</th>
                <td>{meal[0].strArea}</td>
              </tr>
              <tr>
                <th className="w-[30vw]">Tags</th>
                <td>{meal[0].strTags}</td>
              </tr>
            </tbody>
          </table>
          <span className="text-justify text-sm inline-block">
            {meal[0].strInstructions}
          </span>
        </div>
        <h3 className="text-lg font-semibold mt-2 mx-3">Ingredients</h3>
        <div className="mt-2 mx-3 border border-solid border-slate-200 shadow-md">
          <ul className="list-ingredients text-sm p-3 list-none">
            <li>
              {meal[0].strMeasure1} {meal[0].strIngredient1}
            </li>
            <li>
              {meal[0].strMeasure2} {meal[0].strIngredient2}
            </li>
            <li>
              {meal[0].strMeasure3} {meal[0].strIngredient3}
            </li>
            <li>
              {meal[0].strMeasure4} {meal[0].strIngredient4}
            </li>
            <li>
              {meal[0].strMeasure5} {meal[0].strIngredient5}
            </li>
            <li>
              {meal[0].strMeasure6} {meal[0].strIngredient6}
            </li>
            <li>
              {meal[0].strMeasure7} {meal[0].strIngredient7}
            </li>
            <li>
              {meal[0].strMeasure8} {meal[0].strIngredient8}
            </li>
            <li>
              {meal[0].strMeasure9} {meal[0].strIngredient9}
            </li>
            <li>
              {meal[0].strMeasure10} {meal[0].strIngredient10}
            </li>
            <li>
              {meal[0].strMeasure11} {meal[0].strIngredient11}
            </li>
            <li>
              {meal[0].strMeasure12} {meal[0].strIngredient12}
            </li>
            <li>
              {meal[0].strMeasure13} {meal[0].strIngredient13}
            </li>
            <li>
              {meal[0].strMeasure14} {meal[0].strIngredient14}
            </li>
            <li>
              {meal[0].strMeasure15} {meal[0].strIngredient15}
            </li>
            <li>
              {meal[0].strMeasure16} {meal[0].strIngredient16}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {loading && (
          <i className="text center font-bold text-lg">Loading Meal</i>
        )}
      </>
    );
  }
}
