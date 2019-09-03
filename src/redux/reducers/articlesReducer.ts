import types from '../actions';

export interface ArticleState {
  articles: Array<object>;
};

interface ReduxAction {
  payload: Array<object>;
  type: string;
}

export const initialState: ArticleState = {
  articles: [],
};

const articlesReducer = (state = initialState, action: ReduxAction): ArticleState => {
  const { payload } = action;

  switch (action.type) {
  case types.FETCH_GOOGLE_SHEET: {
    return { ...state, articles: payload };
  }
  default: return state;
  }
};

export default articlesReducer;
