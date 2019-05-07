import React from 'react';
import { ListItem } from './ListItem';

export const List = ({ items }) => (
  <ul>
    {items.map(item => (
      <ListItem text={item} />
    ))}
  </ul>
);
