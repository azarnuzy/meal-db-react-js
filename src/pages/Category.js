import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Category() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      );

      setCategories(res.data.meals);
    };
    getCategories();
  }, [setCategories]);

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
              className="px-4 py-3 rounded-md hover:opacity-90 bg-primary text-[#97655a]"
            >
              {item.strCategory}
            </span>
          ))}
      </div>
    </div>
  );
}
