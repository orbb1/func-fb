import React, { Component } from 'react';
import { ListItem } from './ListItem';
import './App.css';

const hundred = [...Array(100)].map((_, i) => i);
const withFizzBuzz = arr => arr.map(val => val % 3 === 0 && val % 5 === 0 ? 'FizzBuzz' : val);
const withFizz = arr => arr.map(val => val % 3 === 0 ? 'Fizz' : val);
const withBuzz = arr => arr.map(val => val % 5 === 0 ? 'Buzz' : val);
const pipe = (...funcs) => arr => [...funcs].reduce((acc, func) => func(acc), arr);

const WithPagination = ({items, amountPerPage, pageNumber, children}) => {
  const newArr = items.slice(pageNumber, amountPerPage*(pageNumber));
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { items: newArr })
  );
  return (<div>{childrenWithProps}</div>);
}

const List = ({items}) => (
  <ul>
    {items.map(item => <ListItem text={item} />)}
  </ul>
)

class App extends Component {
  state = {
    hundred: pipe(
      withFizzBuzz,
      withFizz,
      withBuzz,
    )(hundred),
  }
  render() {
    return (
      <div className="App">
        <WithPagination items={this.state.hundred} amountPerPage={20} pageNumber={1}>
          <List/>
        </WithPagination>
      </div>
    );
  }
}

export default App;
