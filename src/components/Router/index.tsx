import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../Login';
import App from '../App/App';

const Router: React.SFC = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard/" component={App} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
