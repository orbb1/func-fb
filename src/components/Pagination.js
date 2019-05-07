import React from 'react';

export const Pagination = ({ items, amountPerPage, pageNumber, children }) => {
  const newArr = items.slice(pageNumber, amountPerPage * pageNumber);
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { items: newArr })
  );
  return <div>{childrenWithProps}</div>;
};
