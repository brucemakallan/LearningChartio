import React from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import readGoogleSheet from '../GoogleSheets';
import ArticlesTable from '../ArticlesTable';
import Loader from '../Loader';
import { connect } from 'react-redux';
import { ReduxState } from '../../redux/reducers';
import { SpreadsheetTable, GlobalState, Articles } from '../../utils/interfaces';

export interface AppProps {
  getAllArticles: (sheetId: string, token: string, table: SpreadsheetTable) => void;
  showLoader: boolean;
  articles: Articles;
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
    const { showLoader, articles } = this.props;

    return (
      <div className="app">
        <ToastContainer />
        <Loader showLoader={showLoader} />
        <div className="refresh-bt">
          <button type="button" className="btn btn-sm btn-outline-primary" onClick={this.getArticles}>
            Refresh from Google Sheet
          </button>
        </div>
        <ArticlesTable articles={articles} />
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState): GlobalState => ({
  articles: state.articlesReducer.articles,
  showLoader: state.loaderReducer.showLoader,
});
const mapDispatchToProps = {
  getAllArticles: readGoogleSheet,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
