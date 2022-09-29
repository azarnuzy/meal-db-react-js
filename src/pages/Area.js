import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Area() {
  const [areas, setAreas] = useState();
  const [searchArea, setSearchArea] = useState();
  const [resArea, setResArea] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getAreas = async () => {
      const res = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
      );

      setAreas(res.data.meals);
    };

    const getArea = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchArea}`
      );
      setResArea(res.data.meals);
    };

    getArea();
    getAreas();
  }, [searchArea, setAreas]);

  useEffect(() => {
    if (searchArea !== undefined && resArea !== null) {
      navigate('/search', {
        state: { mealSearch: resArea, meal: searchArea },
      });
    }
  }, [searchArea, resArea, navigate]);

  return (
    <div className="mx-5">
      <h2 className="font-bold text-lg text-center my-3">Search by Areas</h2>
      <div className="grid grid-cols-2  sm:grid-cols-3  gap-2 justify-between">
        {areas !== undefined &&
          areas.map((item) => (
            <span
              key={item.strArea}
              onClick={(e) => {
                setSearchArea(e.target.innerText);
              }}
              className="px-4 py-3 cursor-pointer rounded-md hover:opacity-90 bg-primary text-[#5e3a32]"
            >
              {item.strArea}
            </span>
          ))}
      </div>
    </div>
  );
}
