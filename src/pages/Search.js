import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';

export default function Search() {
  const location = useLocation();
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 mt-3">
        {location.state.length > 0 &&
          location.state.map((meal) => {
            return <Card key={meal.idMeal} meal={meal} />;
          })}
        {!location.state && (
          <i className="text-xl font-semibold text-center">Meal Not Found</i>
        )}
      </div>
    </div>
  );
}
