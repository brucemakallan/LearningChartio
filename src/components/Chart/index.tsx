import * as React from 'react';
import {
  LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line, Legend, ResponsiveContainer,
} from 'recharts';
import { colors } from '../../utils/colors';
import { Articles } from '../../utils/interfaces';
import './Chart.scss';
import moment from 'moment';

export interface ChartProps {
  articles: Articles;
}

const lines = [
  { dataKey: 'readers', stroke: colors.blue, activeDot: { r: 4 } },
  { dataKey: 'likes', stroke: colors.orange, activeDot: { r: 4 } },
  { dataKey: 'dislikes', stroke: colors.pink, activeDot: { r: 4 } },
  { dataKey: 'comments', stroke: colors.teal, activeDot: { r: 4 } },
];

const toReadableDate = (date: string): string => moment(date, 'YYYY-MM-DD').format('MMM Do');

const Chart: React.SFC<ChartProps> = ({ articles }: ChartProps) => {
  const data: object[] = [];
  articles.forEach(article => {
    data.push({
      date: toReadableDate(article[1]),
      readers: article[3],
      likes: article[4],
      dislikes: article[5],
      comments: article[6],
    });
  });

  return (
    <div className="chart bottom-margin">
      <ResponsiveContainer width="100%" aspect={2.1}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          {
            lines.map(
              (line, index) =>
                <Line
                  key={index}
                  type="monotone"
                  dataKey={line.dataKey}
                  stroke={line.stroke}
                  activeDot={line.activeDot}
                />
            )
          }
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
