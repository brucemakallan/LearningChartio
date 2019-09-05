import * as React from 'react';
import GoogleAuth from '../GoogleAuth';

const Login: React.SFC = () => {
  return (
    <div className="login-page">
      <GoogleAuth />
    </div>
  );
};

export default Login;
