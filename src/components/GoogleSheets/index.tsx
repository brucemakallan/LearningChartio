import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface table {
  startCell: string,
  endCell: string,
}

const readGoogleSheet = (sheetId: string, token: string, table: table) => {
  axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${table.startCell}:${table.endCell}`,
    {
      headers:{
        Authorization: `Bearer ${token}`,
        'content-type':'application/json',
      }
    }
  ).then(response => {
    console.log(response);
  })
  .catch(error => {
    toast.error(error.response.data.error.message);
  })
}

export default readGoogleSheet
