import * as React from 'react';
import jwt from 'jwt-simple';
import './Chartio.scss';

const Chartio: React.SFC = () => {
  const ORGANIZATION_SECRET = process.env.REACT_APP_CHARTIO_SECRET || '';
  const DASHBOARD = 363628;
  const ORGANIZATION = 45546;
  const BASE_URL = `https://embed.chartio.com/d/${DASHBOARD}`;
  const now = new Date().getTime() / 1000;
  const payload = {
    iat: now,
    nbf: now,
    exp: now + 86400,
    dashboard: DASHBOARD,
    organization: ORGANIZATION,
  };
  const token = jwt.encode(payload, ORGANIZATION_SECRET, 'HS256');

  return (
    <iframe
      title="chartio"
      seamless={true}
      scrolling={window.innerWidth <= 800 ? 'yes' : 'no'}
      className="chartio-frame bottom-margin"
      src={`${BASE_URL}/${token}`}
    />
  );
};

export default Chartio;
