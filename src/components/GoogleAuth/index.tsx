import * as React from 'react';
import { GoogleLogin } from 'react-google-login';

interface GoogleAuthProps {
  history: {
    push: Function;
  };
};

const GoogleAuth: React.SFC<GoogleAuthProps> = ({ history }: GoogleAuthProps) => {
  const responseGoogle = (response: any): void => {
    if (response && response.tokenObj && response.tokenObj.access_token) {
      localStorage.setItem('token', response.tokenObj.access_token);
      history.push('/dashboard/');
    }
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
      buttonText="Google Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      scope={'https://www.googleapis.com/auth/spreadsheets.readonly'}
    />
  );
};

export default GoogleAuth;

