import axios from 'axios'
import types, { handleException, showPageLoader } from '../../redux/actions';
import { table } from '../../utils/interfaces'

const readGoogleSheet = (sheetId: string, token: string, table: table) => async (dispatch: any) => {
  dispatch(showPageLoader(true));
  axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${table.startCell}:${table.endCell}`,
    {
      headers:{
        Authorization: `Bearer ${token}`,
        'content-type':'application/json',
      }
    }
  ).then((response) => {
    const payload = response.data.values;
    dispatch({ type: types.FETCH_GOOGLE_SHEET, payload });
    dispatch(showPageLoader(false));
  })
  .catch((error) => {
    dispatch(showPageLoader(false));
    handleException(error, dispatch);
  })
}

export default readGoogleSheet
