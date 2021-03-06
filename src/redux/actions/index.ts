import messages from '../../utils';

const types = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
  FETCH_GOOGLE_SHEET: 'FETCH_GOOGLE_SHEET',
  SHOW_PAGE_LOADER: 'SHOW_PAGE_LOADER',
};

interface Action {
  type: string;
  payload: any;
};

export const showError = (payload?: string): Action => ({
  type: types.ERROR,
  payload: payload || messages.NETWORK_ERROR,
});

export const showSuccess = (payload: string): Action => ({
  type: types.SUCCESS,
  payload: payload || messages.SUCCESS,
});

export const showPageLoader = (payload: boolean): Action => ({
  type: types.SHOW_PAGE_LOADER,
  payload,
});

export const handleException = (error: any, dispatch: any): void => {
  if (error && error.response && error.response.data
    && error.response.data.error && error.response.data.error.message) {
    error.response.data.error.status === messages.UNAUTHENTICATED
      ? dispatch(showError(messages.ACCESS_DENIED))
      : dispatch(showError(error.response.data.error.message));
  } else dispatch(showError());
};

export default types;
