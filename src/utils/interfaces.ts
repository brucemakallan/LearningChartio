export interface SpreadsheetTable {
  startCell: string;
  endCell: string;
}

export type Articles = [string[]];

export interface GlobalState {
  articles: Articles;
  showLoader: boolean;
}
