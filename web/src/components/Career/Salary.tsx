import { useContext } from 'react';
import CareerContext from '../../context/CareerContext';
import NumberWithSeperators from '../NumberWithSeparator';
import style from '../page/calculator.module.css';

export default function Salary() {
  const { salary } = useContext(CareerContext);

  return (
    <div className={`flex flex-col justify-center items-center`}>
      <h4>Det vil gi en årslønn på</h4>
      <div className="border-2 border-solid border-[#B6FF9E] text-5xl px-2 py-3">
        <NumberWithSeperators startValue={salary - 100000} endValue={salary} showCurrency />
      </div>
    </div>
  );
}
