import * as React from 'react';
import './Loader.scss';

export interface LoaderProps {
  showLoader: boolean;
}

const Loader: React.SFC<LoaderProps> = ({ showLoader }: LoaderProps) => (
  showLoader
    ? <div className="lds-ring"><div /><div /><div /><div /></div>
    : <span></span>
);

export default Loader;
