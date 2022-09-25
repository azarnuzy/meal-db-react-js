import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ingredients, setIngredients] = useState([]);
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
        <span className="font-bold text-xl block mb-2">{meal[0].strMeal}</span>
        <img
          src={meal[0].strMealThumb}
          className="max-h-[300px] w-screen object-cover rounded-xl shadow-md"
          alt=""
        />
        <div className="mt-3 mx-3">
          <table className="text-left text-lg mb-3 mr-0">
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
          </table>
          <span className="text-justify inline-block">
            {meal[0].strInstructions}
          </span>
        </div>
        <div className="mt-3 mx-3 border border-solid border-slate-200 shadow-md">
          <ul></ul>
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
