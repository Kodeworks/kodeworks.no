import style from './number.module.css';
import CountUp from 'react-countup';


interface Prop {
  startValue?: number;
  endValue: number;
}

export default function NumberWithSeperators({startValue = 0, endValue} : Prop): JSX.Element {
  return (
    <CountUp start={startValue} end={endValue} separator=' ' duration={0.75}/>
  );
}
