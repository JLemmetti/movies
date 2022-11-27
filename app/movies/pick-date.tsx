'use client';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {};

export default function PickDate({}: Props): JSX.Element {
  return <DatePicker selected={new Date()} onChange={() => null} inline />;
}
