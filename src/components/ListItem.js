import React from 'react';

const ListItem = ({ text }) => {
  const generateKey = i => `${Math.random()}-${i}`;

  return <li key={generateKey(text)}>{text}</li>;
};

export { ListItem };
