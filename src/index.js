import React from 'react'; //react robot is in here
import ReactDOM from 'react-dom'; //minipulate react
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';

// import CardList from './CardList.js';
// import { robots } from './robot.js';
import './index.css';
// import Hello from './Hello.js';
// import Card from './Card.js';

ReactDOM.render(
  <>
    <App />
    {/* <CardList robots={robots}/> */}
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
