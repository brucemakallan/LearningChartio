import React from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import readGoogleSheet from '../GoogleSheets';
import ArticlesTable from '../ArticlesTable';
import Loader from '../Loader';
import { connect } from 'react-redux';
import { ReduxState } from '../../redux/reducers';
import { SpreadsheetTable } from '../../utils/interfaces';
import { ArticleState } from '../../redux/reducers/articlesReducer';

export interface AppProps {
  getAllArticles: (sheetId: string, token: string, table: SpreadsheetTable) => void;
}

class App extends React.Component<AppProps> {
  getArticles = (): void => {
    const { getAllArticles } = this.props;
    const sheetId = process.env.REACT_APP_GOOGLE_SHEET_ID || '';
    const token = process.env.REACT_APP_GOOGLE_TOKEN || '';
    const table = {
      startCell: 'A2',
      endCell: 'G27',
    };
    getAllArticles(sheetId, token, table);
  }


  render(): JSX.Element {
    return (
      <div className="app">
        <ToastContainer />
        <Loader />
        <div className="refresh-bt">
          <button type="button" className="btn btn-sm btn-outline-primary" onClick={this.getArticles}>
            Refresh from Google Sheet
          </button>
        </div>
        <ArticlesTable />
      </div>
    );
  }
}

const mapStateToProps = ({ articlesReducer }: ReduxState): ArticleState => ({
  articles: articlesReducer.articles,
});
const mapDispatchToProps = {
  getAllArticles: readGoogleSheet,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
