import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Area() {
  const [areas, setAreas] = useState();

  useEffect(() => {
    const getAreas = async () => {
      const res = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
      );

      setAreas(res.data.meals);
    };
    getAreas();
  }, [setAreas]);

  return (
    <div className="mx-2">
      <h2 className="font-bold text-lg text-center my-3">Search by Areas</h2>
      <div className="grid grid-cols-3 gap-2 justify-between">
        {areas !== undefined &&
          areas.map((item) => (
            <span
              key={item.strArea}
              className="px-4 py-3 rounded-md hover:opacity-90 bg-primary text-[#97655a]"
            >
              {item.strArea}
            </span>
          ))}
      </div>
    </div>
  );
}
