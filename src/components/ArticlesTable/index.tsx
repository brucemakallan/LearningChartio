import * as React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export interface ArticlesTableProps {
  
}
 
export interface ArticlesTableState {

}
 
class ArticlesTable extends React.Component<ArticlesTableProps, ArticlesTableState> {
  state = {
    columnDefs: [
      { headerName: "Article", field: "article", sortable: true, filter: true },
      { headerName: "Date", field: "date", sortable: true, filter: true },
      { headerName: "Author", field: "author", sortable: true, filter: true },
      { headerName: "Readers", field: "readers", sortable: true, filter: true },
      { headerName: "Likes", field: "likes", sortable: true, filter: true },
      { headerName: "Dislikes", field: "dislikes", sortable: true, filter: true },
      { headerName: "Comments", field: "comments", sortable: true, filter: true },
    ],
    rowData: []
  }

  render() { 
    return (
      <div 
        className="ag-theme-material"
        style={{ 
        height: '500px', 
        width: '600px' }} 
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    )
  }
}
 
export default ArticlesTable;
