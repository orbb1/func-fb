import React, { Component } from 'react';
import { List, Pagination } from './components';

const numbersArray = [...Array(100)].map((_, i) => i);
const withFizzBuzz = arr =>
  arr.map(val => (val % 3 === 0 && val % 5 === 0 ? 'FizzBuzz' : val));
const withFizz = arr => arr.map(val => (val % 3 === 0 ? 'Fizz' : val));
const withBuzz = arr => arr.map(val => (val % 5 === 0 ? 'Buzz' : val));
const pipe = (...funcs) => arr =>
  [...funcs].reduce((acc, func) => func(acc), arr);

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: pipe(
        withFizzBuzz,
        withFizz,
        withBuzz
      )(numbersArray),
      amountPerPage: 20,
      pageNumber: 1,
    };
  }

  render() {
    const { items, amountPerPage, pageNumber } = this.state;

    return (
      <div className="App">
        <Pagination
          items={items}
          amountPerPage={amountPerPage}
          pageNumber={pageNumber}
        >
          <List />
        </Pagination>
      </div>
    );
  }
}

export default App;
