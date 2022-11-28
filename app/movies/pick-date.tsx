'use client';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  watchDate?: string;
};

export default function PickDate({ watchDate }: Props): JSX.Element {
  return (
    <div>
      <p>Date</p>
      <DatePicker
        selected={watchDate ? new Date(watchDate) : new Date()}
        onChange={() => null}
        inline
      />
    </div>
  );
}
