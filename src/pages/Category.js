import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Category() {
  const [categories, setCategories] = useState();
  const [searchCategory, setSearchCategory] = useState();
  const [resCategory, setResCategory] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getCategories = async () => {
        const res = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        );

        setCategories(res.data.categories);
      };

      const getCategory = async () => {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchCategory}`
        );
        setResCategory(res.data.meals);
      };

      getCategories();
      getCategory();
    } catch (error) {}
  }, [searchCategory, setCategories]);

  useEffect(() => {
    try {
      if (searchCategory !== undefined && resCategory !== null) {
        navigate('/search', {
          state: { mealSearch: resCategory, meal: searchCategory },
        });
      }
    } catch (error) {}
  }, [searchCategory, resCategory, navigate]);

  return (
    <div className="mx-5">
      <h2 className="font-bold text-lg text-center my-3">
        Search by Categories
      </h2>
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-2 justify-center">
        {categories !== undefined &&
          categories.map((item) => (
            <Link
              key={item.strCategory}
              onClick={(e) => {
                setSearchCategory(
                  e.target.innerText || e.target.getAttribute('alt')
                );
              }}
              className="cursor-pointer px-4 py-3 rounded-md hover:opacity-90 bg-primary text-center text-[#5e3a32]"
            >
              <div>
                <img
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                  className="p-2 rounded-full"
                />
                <span>{item.strCategory}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
