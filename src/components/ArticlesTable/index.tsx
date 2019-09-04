import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './ArticlesTable.scss';
import { Articles } from '../../utils/interfaces';


export interface ArticlesTableProps {
  articles: Articles;
}

const ArticlesTable: React.SFC<ArticlesTableProps> = (props: ArticlesTableProps) => {
  const sortableFilterable = { sortable: true, filter: true };
  const columns = [
    { headerName: 'Article', field: 'article', ...sortableFilterable },
    { headerName: 'Date', field: 'date', ...sortableFilterable },
    { headerName: 'Author', field: 'author', ...sortableFilterable },
    { headerName: 'Readers', field: 'readers', ...sortableFilterable },
    { headerName: 'Likes', field: 'likes', ...sortableFilterable },
    { headerName: 'Dislikes', field: 'dislikes', ...sortableFilterable },
    { headerName: 'Comments', field: 'comments', ...sortableFilterable },
  ];
  const { articles } = props;
  const rows = articles.map((row: Array<string>) => ({
    article: String(row[0]),
    date: String(row[1]),
    author: String(row[2]),
    readers: parseInt(row[3]),
    likes: parseInt(row[4]),
    dislikes: parseInt(row[5]),
    comments: parseInt(row[6]),
  }));

  return (
    <div className="ag-theme-material" style={{ height: '90vh', width: '100%' }}>
      { rows.length > 0 &&  <AgGridReact columnDefs={columns} rowData={rows} /> }
    </div>
  );
};

export default ArticlesTable;
