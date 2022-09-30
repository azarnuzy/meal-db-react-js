import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function Detail() {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const location = useLocation();

  const isHomeDetail = location.pathname.indexOf('meals') === -1;

  useEffect(() => {
    try {
      const getMeal = async () => {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
        );
        setMeal(res.data.meals);
        setLoading(false);
      };

      getMeal();
    } catch (error) {}
  }, [params, setMeal, setLoading]);

  if (meal.length > 0) {
    // get Ingredients and Measures
    const ingredients = [];
    const measures = [];
    let i = 0;
    for (const ingredient in meal[0]) {
      if (ingredient.indexOf(`Ingredient`) > 0) {
        ingredients.push(meal[0][ingredient]);
      }

      if (ingredient.indexOf(`Measure`) > 0) {
        measures.push(meal[0][ingredient]);
      }
    }

    return (
      <div className="max-w-[100vw] mx-2 mt-5">
        <div className="flex justify-between mb-3">
          <div className="ml-3 flex items-center">
            <Link to="/meals" className="text-slate-500 text-sm">
              Meals
            </Link>
            <span className="text-sm text-slate-400"> &nbsp;/&nbsp; </span>
            <span className="text-sm to-slate-800"> {meal[0].strMeal}</span>
          </div>
          <Link
            to={isHomeDetail ? '/' : '/meals'}
            className="flex items-center font-bold px-3 py-1 rounded-2xl text-[#f3c0b5] border border-solid border-[#f3c0b5] hover:opacity-50"
          >
            <AiOutlineArrowLeft className="mr-1" /> Back
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5">
          <img
            src={meal[0].strMealThumb}
            className="max-h-[300px] mx-2 w-screen object-cover rounded-xl shadow-md"
            alt=""
          />
          <div>
            <span className="mt-3 mx-3 font-bold text-lg block ">
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
          </div>
        </div>
        <h3 className="text-lg font-semibold mt-2 mx-3">Ingredients</h3>
        <div className="mt-2 mx-3 border border-solid border-slate-200 shadow-md">
          <ul className="list-ingredients text-sm p-3 list-none">
            {ingredients.map((item) => {
              return (
                <li key={`${item}${i}`}>
                  {measures[i++]} {item}
                </li>
              );
            })}
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
