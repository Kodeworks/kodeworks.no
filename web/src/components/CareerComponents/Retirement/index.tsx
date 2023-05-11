import { useContext } from 'react';
import CareerContext from '../../../context/careerContext';
import NumberWithSeperators from '../NumberWithSeperators';
import style from './retirement.module.css';

type Wage = {
  [key: number]: number;
};

export default function Retirement(): JSX.Element {
  const { salary } = useContext(CareerContext)

  const retiremantSavingsPercent: number = 7
  const OneG: number = 111477
    
  const wages: Wage = {
    0: 596345,
    1: 640519,
    2: 704571,
    3: 838197,
    4: 903353,
    5: 954152,
    6: 1001640,
    7: 1038082,
    8: 1073421,
    9: 1093300,
    10: 1109864,
    11: 1120909,
    12: 1131951,
    13: 1142996,
    14: 1154038,
    15: 1163978,
    16: 1173917,
    17: 1178335,
    18: 1187169,
    19: 1192690,
    20: 1198212,
  };

  const savingsMin = (wages[0] / 100) * retiremantSavingsPercent
  const savingsMax = (wages[20] / 100) * retiremantSavingsPercent
  
  function numberWithSeperators(num: number): string {
    if (!num) {
      return '-';
    }
    
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  
  function getYearlyRetirement() {
    const twelveG: number = 12 * OneG;
    const retirementBasis = salary > twelveG ? twelveG : salary;
    return (retirementBasis / 100) * retiremantSavingsPercent
  }
  
  const retirementSavingsWidth = ((getYearlyRetirement() - savingsMin) / (savingsMax - savingsMin));

  return (
    <div className={`${style['retirement-grid']}`}>
      <div className={`${style['info']}`}>
        <h2>Pensjon</h2>
        <p>Pensjon er veldig enkelt i Kodeworks! Alle har 7% årlig pensjonssparing opp til 12G! </p>
        <p>{`Grunnbeløpet (G) per 1. mai 2022 er kr ${numberWithSeperators(OneG)}.`}</p>
      </div>
      <div className={`${style['retirement']}`}>
        <p>{`Med en årslønn på ${numberWithSeperators(salary)} kr sparer man årlig:`}</p>
        <div className={`${style['yearly-retirement']}`} style={{ width: `${retirementSavingsWidth*100}%` }}>
          <span>
            <NumberWithSeperators startValue={getYearlyRetirement() - 10000} endValue={getYearlyRetirement()} />kr
          </span>
        </div>
      </div>
    </div>
  );
}
