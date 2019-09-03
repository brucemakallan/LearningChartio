import * as React from 'react';
import { connect } from 'react-redux';
import { reduxState } from '../../redux/reducers';
import './Loader.scss';
import { LoaderState } from '../../redux/reducers/loaderReducer';

export interface LoaderProps {
  showLoader: boolean;
}

class Loader extends React.Component<LoaderProps> {
  render(): JSX.Element {
    const { showLoader } = this.props;

    return (
      showLoader
        ? <div className="lds-ring"><div /><div /><div /><div /></div>
        : <span></span>
    );
  }
}

const mapStateToProps = ({ loaderReducer }: reduxState): LoaderState => ({
  showLoader: loaderReducer.showLoader,
});
export default connect(mapStateToProps)(Loader);
