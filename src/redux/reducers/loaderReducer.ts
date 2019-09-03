import types from '../actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { action } from '../../utils/interfaces';

export const initialState = {
  showLoader: false,
};

const loaderReducer = (state = initialState, action: action) => {
  const { payload } = action;

  switch (action.type) {
  case types.SHOW_PAGE_LOADER:
    return { ...state, showLoader: payload };
  case types.ERROR:
    toast.error(payload)
    return state
  default: return state;
  }
};

export default loaderReducer;
