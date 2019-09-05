import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './components/Router';

ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));
