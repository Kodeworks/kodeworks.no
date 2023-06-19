import style from './number.module.css';
import dynamic from 'next/dynamic';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

interface Prop {
  startValue?: number;
  endValue: number;
  showCurrency: boolean;
}

export default function NumberWithSeperators({startValue = 0, endValue, showCurrency=true} : Prop) {
  return (
    <span><CountUp start={startValue} end={endValue} separator=' ' duration={0.75}/>{showCurrency ? <span className='m2-3'> kr</span> : ''}</span>
  );
}