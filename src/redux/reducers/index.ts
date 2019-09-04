import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import articlesReducer from './articlesReducer';
import { Articles } from '../../utils/interfaces';

export interface ReduxState {
  loaderReducer: {
    showLoader: boolean;
  };
  articlesReducer: {
    articles: Articles;
  };
}

export default combineReducers({
  loaderReducer,
  articlesReducer,
});
