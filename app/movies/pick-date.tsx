'use client';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  watchDate?: string;
  onWatchDateChange: (date: Date) => void;
};

export default function PickDate({
  watchDate,
  onWatchDateChange,
}: Props): JSX.Element {
  return (
    <div>
      <p>Date</p>
      <DatePicker
        selected={watchDate ? new Date(watchDate) : new Date()}
        onChange={(date: Date) => onWatchDateChange(date)}
        inline
      />
    </div>
  );
}
