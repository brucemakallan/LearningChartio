import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import articlesReducer from './articlesReducer';

export interface reduxState {
  loaderReducer: {
    showLoader: boolean
  };
  articlesReducer: {
    articles: []
  };
}

export default combineReducers({
  loaderReducer,
  articlesReducer,
});
