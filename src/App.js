import React, { Component } from 'react';
import './App.css';

const hundred = [...Array(100)].map((_, i) => i);
const withFizzBuzz = arr => arr.map(val => val % 3 === 0 && val % 5 === 0 ? 'FizzBuzz' : val);
const withFizz = arr => arr.map(val => val % 3 === 0 ? 'Fizz' : val);
const withBuzz = arr => arr.map(val => val % 5 === 0 ? 'Buzz' : val);
const pipe = (...funcs) => arr => [...funcs].reduce((acc, func) => func(acc), arr);

class App extends Component {
  state = {
    hundred: pipe(
      withFizzBuzz,
      withFizz,
      withBuzz,
    )(hundred),
  }

  render() {
    const generateKey = (i) => `${Math.random()}-${i}`;

    return (
      <div className="App">
        <ul>
          {this.state.hundred.map(v => <li key={generateKey(v)}>{v}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
