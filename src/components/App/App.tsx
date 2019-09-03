import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import readGoogleSheet from '../GoogleSheets';
import ArticlesTable from '../ArticlesTable';
import Loader from '../Loader';
import { connect } from 'react-redux';
import { reduxState } from '../../redux/reducers';
import { table } from '../../utils/interfaces';

export interface AppProps {
  getAllArticles: (sheetId: string, token: string, table: table) => void;
}

export interface AppState { }

class App extends React.Component<AppProps, AppState> {
  getArticles = (): void => {
    const { getAllArticles } = this.props;
    const sheetId = process.env.REACT_APP_GOOGLE_SHEET_ID || '';
    const token = process.env.REACT_APP_GOOGLE_TOKEN || '';
    const table = {
      startCell: 'A1',
      endCell: 'G27',
    };
    getAllArticles(sheetId, token, table);
  }


  render() {
    return (
      <div className="App">
        <ToastContainer />
        <Loader />
        <button type="button" onClick={this.getArticles}>Refresh</button>
        <ArticlesTable />
      </div>
    );
  }
}

const mapStateToProps = ({ articlesReducer }: reduxState) => ({
  articles: articlesReducer.articles,
});
const mapDispatchToProps = {
  getAllArticles: readGoogleSheet,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
