import types from '../actions';
import { action } from '../../utils/interfaces';

export const initialState = {
  articles: [],
};

const articlesReducer = (state = initialState, action: action) => {
  const { payload } = action;

  switch (action.type) {
  case types.FETCH_GOOGLE_SHEET: {
    return { ...state, articles: payload };
  }
  default: return state;
  }
};

export default articlesReducer;
