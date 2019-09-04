import { Articles } from './interfaces';

export const sumColumn = (articles: Articles, columnIndex: number): number =>
  articles.reduce((accumulator, article) => accumulator + parseInt(article[columnIndex]), 0);

