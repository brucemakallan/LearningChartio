import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import readGoogleSheet from '../GoogleSheets'

const App: React.FC = () => {
  const sheetId = process.env.REACT_APP_GOOGLE_SHEET_ID || ''
  const token = process.env.REACT_APP_GOOGLE_TOKEN || ''
  const table = {
    startCell: 'A1',
    endCell: 'G27',
  }

  return (
    <div className="App">
      <ToastContainer />
      <button type="button" onClick={() => readGoogleSheet(sheetId, token, table)}>Read Google Sheet</button>
    </div>
  );
}

export default App;
