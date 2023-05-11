import { useContext } from 'react';
import CareerContext from '../../../context/careerContext';
import NumberWithSeperators from '../NumberWithSeperators';
import style from './total.module.css';


export default function Total(): JSX.Element {
  const { mastersDegree, seniority, salary } = useContext(CareerContext)

  const posts = [
    {
      name: 'Årlig Telefon beløp',
      value: 5000
    },
    {
      name: 'Årlig Utstyr beløp',
      value: 15000
    },
    {
      name: 'Årlig Konferanse beløp',
      value: 15000
    },
    {
      name: 'Årlig Laptop beløp',
      value: 12000
    },
    {
      name: 'Årlig trening beløp',
      value: 6000
    },
    {
      name: 'Årlig bredbånd beløp',
      value: 6000
    },
    {
      name: 'Årlig mobil abbonement',
      value: 7400
    },
  ]

  const OneG: number = 111477
  const retiremantSavingsPercent: number = 7

  function getYearlyRetirement() {
    const twelveG: number = 12 * OneG;
    const retirementBasis = salary > twelveG ? twelveG : salary;
    return (retirementBasis / 100) * retiremantSavingsPercent
  }

  function getTotalPackageSum() {
    const employeeBudgetSum = posts.flatMap((item) => item.value).reduce((accumulator, currentValue) => accumulator + currentValue);
    return employeeBudgetSum + salary + getYearlyRetirement()
  }
  
  return (
    <div className={`${style['total-container']}`}>
      <h2>Totalpakke i året som ansatt i Kodeworks:</h2>
      <span className={`${style['total-number']}`}>
        <NumberWithSeperators endValue={getTotalPackageSum()} />
        
        {` kr`}
      </span>
      <span className={`${style['total-subtext']}`}>med {seniority} år arbeidserfaring {mastersDegree ? 'og mastergrad.' : ''}</span>
    </div>
  );
}
