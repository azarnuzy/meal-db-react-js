import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Category() {
  const [categories, setCategories] = useState();
  const [searchCategory, setSearchCategory] = useState();
  const [resCategory, setResCategory] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      );

      setCategories(res.data.meals);
    };

    const getCategory = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchCategory}`
      );
      setResCategory(res.data.meals);
    };

    getCategories();
    getCategory();
  }, [searchCategory, setCategories]);

  useEffect(() => {
    if (searchCategory !== undefined && resCategory !== null) {
      navigate('/search', {
        state: { mealSearch: resCategory, meal: searchCategory },
      });
    }
  }, [searchCategory, resCategory, navigate]);

  return (
    <div className="mx-2">
      <h2 className="font-bold text-lg text-center my-3">
        Search by Categories
      </h2>
      <div className="grid grid-cols-3 gap-2 justify-between">
        {categories !== undefined &&
          categories.map((item) => (
            <span
              key={item.strCategory}
              onClick={(e) => {
                setSearchCategory(e.target.innerText);
              }}
              className="cursor-pointer px-4 py-3 rounded-md hover:opacity-90 bg-primary text-[#5e3a32]"
            >
              {item.strCategory}
            </span>
          ))}
      </div>
    </div>
  );
}
