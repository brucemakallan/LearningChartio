import * as React from 'react';
import './ValueCard.scss';

export interface ValueCardProps {
  value: string;
  title: string;
  color: string;
}

const ValueCard: React.SFC<ValueCardProps> = ({ value, title, color }: ValueCardProps) => (
  <div className="value-card" style={{ backgroundColor: color }}>
    <div className="value">
      {value}
    </div>
    <div className="title">
      {title}
    </div>
  </div>
);

export default ValueCard;
