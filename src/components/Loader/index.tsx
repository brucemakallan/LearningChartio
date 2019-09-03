import * as React from 'react';
import { connect } from 'react-redux';
import { reduxState } from '../../redux/reducers';
import './Loader.scss';

export interface LoaderProps {
  showLoader: boolean;
}
 
export interface LoaderState {
  
}
 
class Loader extends React.Component<LoaderProps, LoaderState> {
  render() {
    const { showLoader } = this.props;

    return (
      showLoader && <div className="lds-ring"><div /><div /><div /><div /></div>
    );
  }
}
 
const mapStateToProps = ({ loaderReducer }: reduxState) => ({
  showLoader: loaderReducer.showLoader,
});
export default connect(mapStateToProps)(Loader);