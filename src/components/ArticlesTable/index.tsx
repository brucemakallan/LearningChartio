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
  render(): JSX.Element {
    const columns = [
      { headerName: 'Article', field: 'article', sortable: true, filter: true },
      { headerName: 'Date', field: 'date', sortable: true, filter: true },
      { headerName: 'Author', field: 'author', sortable: true, filter: true },
      { headerName: 'Readers', field: 'readers', sortable: true, filter: true },
      { headerName: 'Likes', field: 'likes', sortable: true, filter: true },
      { headerName: 'Dislikes', field: 'dislikes', sortable: true, filter: true },
      { headerName: 'Comments', field: 'comments', sortable: true, filter: true },
    ];
    const { articles } = this.props;
    const rows = articles.map((row: Array<string>) => ({
      article: row[0],
      date: row[1],
      author: row[2],
      readers: parseInt(row[3]),
      likes: parseInt(row[4]),
      dislikes: parseInt(row[5]),
      comments: parseInt(row[6]),
    }));

    return (
      <div className="ag-theme-material" style={{ height: '90vh', width: '98%' }}>
        { rows.length > 0 &&  <AgGridReact columnDefs={columns} rowData={rows} /> }
      </div>
    );
  }
}

const mapStateToProps = ({ articlesReducer }: ReduxState): ArticleState => ({
  articles: articlesReducer.articles,
});
export default connect(mapStateToProps, {})(ArticlesTable);
