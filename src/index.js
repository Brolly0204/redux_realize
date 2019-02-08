import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Root from './Root.js'
import Demo4 from './Demo4.js'
import ParentCom from './Context1.js'
import * as serviceWorker from './serviceWorker';
import {
  Provider
} from './react-redux'
import store from './redux2.js'

ReactDOM.render(<Provider store={store}><Demo4/></Provider>, document.getElementById('root'));

{ /*ReactDOM.render(<Provider store={store}><Root/></Provider>, document.getElementById('root'));*/ }
// ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();