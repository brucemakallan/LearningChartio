import types from '../actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface LoaderState {
  showLoader: boolean;
};

interface ReduxAction {
  payload: boolean;
  type: string;
}

export const initialState = {
  showLoader: false,
};

const loaderReducer = (state = initialState, action: ReduxAction): LoaderState => {
  const { payload } = action;

  switch (action.type) {
  case types.SHOW_PAGE_LOADER:
    return { ...state, showLoader: payload };
  case types.ERROR:
    toast.error(payload);
    return state;
  default: return state;
  }
};

export default loaderReducer;
