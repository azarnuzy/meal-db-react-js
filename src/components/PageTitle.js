import React from 'react';

export default function PageTitle({ title }) {
  return (
    <div className="flex mb-3 justify-center  mx-2">
      <h3 className="font-semibold text-lg text-center mt-4 min-w-[100px]">
        {title}
      </h3>
      <div></div>
    </div>
  );
}
