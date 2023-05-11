import { useContext } from 'react';
import CareerContext from '../../../context/careerContext';
import NumberWithSeperators from '../NumberWithSeperators';
import style from './salary.module.css';

export default function Salayr(): JSX.Element {
  const { salary } = useContext(CareerContext)

  const wageIncreacePercent: number = 4
  const vacationSavingsPercent: number = 12
  
  
  function getYearlySalaryIncrease() {
    return Math.round(salary + ((salary/100) * wageIncreacePercent))
  }
  
  function getVacationSavings() {
    return Math.round((salary/100) * vacationSavingsPercent)
  }
  
  return (
    <div className={`${style['salary-grid']}`}>
      <div className={`${style['info']}`}>
        <h2>Lønn</h2>
        <p>Lønnen i Kodeworks fastsettes basert på det totale antallet måneder fulltids relevant arbeidserfaring. En mastergrad legger til 12 måneder i denne utregningen.  </p>

        <p style={{ fontSize: '20px'}}>Lønnsjusteringen i 2023 var på <strong>4,73%</strong></p>
      </div>
      <div className={`${style['numbers']}`}>
        <div className={`${style['number-container']}`}>
            <span style={{ fontSize: '80px'}}>
                <NumberWithSeperators startValue={salary - 100000} endValue={salary}/>
                {` kr`}
              </span>
              <span>Fastlønn</span>
        </div>
        <div  className={`${style['number-container']}`}>
          <span style={{ fontSize: '46px'}}>
            <NumberWithSeperators startValue={getVacationSavings() - 10000} endValue={getVacationSavings()} />
            {` kr`}
          </span>
            <span>Feriepenger i {new Date().getFullYear() + 1}</span>
        </div>
        <div  className={`${style['number-container']}`}>
          <span style={{ fontSize: '46px'}}>
            <NumberWithSeperators startValue={salary - 100000} endValue={getYearlySalaryIncrease()} />
            {` kr`}
          </span>
            <span>Ny fastlønn etter lønnsjustering i januar {new Date().getFullYear() + 1}, gitt en økning på <b>{wageIncreacePercent}%</b></span>
        </div>
      </div>
    </div>
  );
}
