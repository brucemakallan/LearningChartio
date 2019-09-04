import * as React from 'react';
import './ValueCard.scss';

export interface ValueCardProps {
  value: number;
  title: string;
}

const ValueCard: React.SFC<ValueCardProps> = ({ value, title }: ValueCardProps) => (
  <div className="value-card">
    <div className="value">
      {value}
    </div>
    <div className="title">
      {title}
    </div>
  </div>
);

export default ValueCard;
