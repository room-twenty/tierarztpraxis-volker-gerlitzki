'use client';
import React, { useState } from 'react';

const ReadMore = ({
  amountShown,
  children,
}: {
  amountShown: number;
  children: React.ReactNode;
}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const childrenArray = React.Children.toArray(children);
  const childrenToShow = isReadMore
    ? childrenArray.slice(0, amountShown)
    : childrenArray;

  return (
    <>
      {childrenToShow}
      {childrenArray.length > amountShown && (
        <span
          onClick={toggleReadMore}
          className="cursor-pointer text-steel-blue-500">
          <strong>{isReadMore ? '...mehr lesen' : '...weniger lesen'}</strong>
        </span>
      )}
    </>
  );
};

export default ReadMore;
