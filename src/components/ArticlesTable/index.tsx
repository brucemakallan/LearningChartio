import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { ReduxState } from '../../redux/reducers';
import { ArticleState } from '../../redux/reducers/articlesReducer';
import { connect } from 'react-redux';


export interface ArticlesTableProps {
  articles: any;
}


class ArticlesTable extends React.Component<ArticlesTableProps, {}> {
  state = {
    columnDefs: [
      { headerName: 'Article', field: 'article', sortable: true, filter: true },
      { headerName: 'Date', field: 'date', sortable: true, filter: true },
      { headerName: 'Author', field: 'author', sortable: true, filter: true },
      { headerName: 'Readers', field: 'readers', sortable: true, filter: true },
      { headerName: 'Likes', field: 'likes', sortable: true, filter: true },
      { headerName: 'Dislikes', field: 'dislikes', sortable: true, filter: true },
      { headerName: 'Comments', field: 'comments', sortable: true, filter: true },
    ],
    rowData: [],
  }

  render(): JSX.Element {
    const { articles } = this.props;
    const rowData = articles.map((row: Array<string>) => ({
      article: row[0],
      date: row[1],
      author: row[2],
      readers: row[3],
      likes: row[4],
      dislikes: row[5],
      comments: row[6],
    }));
    console.log(rowData);

    return (
      <div
        className="ag-theme-material"
        style={{
          height: '500px',
          width: '600px' }}
      >
        {rowData.length > 0 && <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={rowData}>
        </AgGridReact>}
      </div>
    );
  }
}

const mapStateToProps = ({ articlesReducer }: ReduxState): ArticleState => ({
  articles: articlesReducer.articles,
});
export default connect(mapStateToProps, {})(ArticlesTable);
