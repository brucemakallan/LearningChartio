import * as React from 'react';
import GoogleAuth from '../GoogleAuth';
import './Login.scss';

interface LoginProps {
  history: {
    push: Function;
  };
}

const Login: React.SFC<LoginProps> = ({ history }: LoginProps) => {
  return (
    <div className="login-page">
      <GoogleAuth history={history} />
    </div>
  );
};

export default Login;
