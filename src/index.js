import { logDOM } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Beers from './components/Beers'
import data from './data'



// console.log(data.logo);
// console.log(data.cards);
// console.log(<Beers list={data.cards} />);

ReactDOM.render(
  <React.StrictMode>
    <Beers list={data.cards} />
  </React.StrictMode>,
  document.getElementById('root')
);

