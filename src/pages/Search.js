import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';

export default function Search() {
  const location = useLocation();
  return (
    <div>
      {location.state.mealSearch !== null && (
        <PageTitle title={`Search Result "${location.state.meal}"`} />
      )}
      <div className="grid grid-cols-1 gap-3 mt-3">
        {location.state.mealSearch !== null &&
          location.state.mealSearch.length > 0 &&
          location.state.mealSearch.map((meal) => {
            return <Card key={meal.idMeal} meal={meal} />;
          })}
        {location.state.mealSearch === null && (
          <i className="text-xl font-semibold text-center">Meal Not Found</i>
        )}
      </div>
    </div>
  );
}
