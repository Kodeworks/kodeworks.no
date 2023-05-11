import { useState } from 'react';

import style from './calculator.module.css';

type Wage = {
  [key: number]: string;
};

const wages: Wage = {
  0: '596345',
  1: '640519',
  2: '704571',
  3: '838197',
  4: '903353',
  5: '954152',
  6: '1001640',
  7: '1038082',
  8: '1073421',
  9: '1093300',
  10: '1109864',
  11: '1120909',
  12: '1131951',
  13: '1142996',
  14: '1154038',
  15: '1163978',
  16: '1173917',
  17: '1178335',
  18: '1187169',
  19: '1192690',
  20: '1198212',
};

const retirementSavingsPercent: number = 7
const wageIncreacePercent: number = 4

export default function Calculator(): JSX.Element {
  const [seniority, setSeniority] = useState<number>(0);
  const [masterDegree, setMasterDegree] = useState<boolean>(false);

  function handleSeniorityChange(event: React.FormEvent<HTMLInputElement>) {
    setSeniority(+event.currentTarget.value);
  }

  function handleEducationChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMasterDegree(event.target.checked);
  }

  function numberWithSeperators(num: number): string {
    if (!num) {
      return '-';
    }

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  
  function getWage() {
    return wages.hasOwnProperty(seniority + 1)
    ? +wages[masterDegree ? seniority + 1 : seniority]
    : +wages[Object.keys(wages).length - 1]
  }
  
  function getYearlyRetirementSavings() {
    const wage = getWage()
    return Math.round((wage/100) * retirementSavingsPercent)
  }
  
  function getYearlyWageIncrease() {
    const wage = getWage()
    return Math.round(wage + (wage/100) * wageIncreacePercent)
  }
  
  function getNextYear() {
    return new Date().getFullYear() + 1
  }

  return (
    <div className={`${style['calculator']}`}>
      <h2>Hva kommer du til å tjene?</h2>
      <p>Lønnen i Kodeworks fastsettes basert på det totale antallet måneder fulltids relevant arbeidserfaring. En mastergrad legger til 12 måneder i denne utregningen.  </p>
      {/* <h4>Hvilken utdanning har du?</h4>
      <label className={`${style['calculator-education-label']}`}>
        <input
          type="radio"
          className={`${style['calculator-education-input']}`}
          name="education"
          value={Education.Bachelor}
          defaultChecked
          onChange={handleEducationChange}
        />
        Bachelorgrad
      </label>
      <label className={`${style['calculator-education-label']}`}>
        <input
          type="radio"
          className={`${style['calculator-education-input']}`}
          name="education"
          value={Education.Master}
          onChange={handleEducationChange}
        />
        Mastergrad
      </label> */}

      <div className='mb-8'>
        <label className={`${style['calculator-education-checkbox-label']}`}>
            <input
                type="checkbox"
                className={`${style['calculator-education-checkbox']}`}
                onChange={handleEducationChange}
            />
            Jeg har mastergrad
        </label>
      </div>
      <div className={`${style['calculator-seniority-content']}`}>
        <label>
          <input
            type="range"
            className={`${style['calculator-seniority-range']}`}
            min={0}
            max={20}
            onChange={handleSeniorityChange}
            value={seniority}
          />
        </label>
        <input
          className={`${style['calculator-seniority-input']}`}
          type="text"
          value={seniority}
          onChange={handleSeniorityChange}
        />
        <span>års arbeidserfaring</span>
      </div>

      <div className={`${style['calculator-result']}`}>
        <div>
          <h4>Årlig fastlønn:</h4>
          <p className={`${style['calculator-salary']}`}>
            {numberWithSeperators(getWage())}{' '}
            kr
          </p>
        </div>
        <div>
          <h4>Brutto månedslønn:</h4>
          <p className={`${style['calculator-salary']}`}>
            {numberWithSeperators(Math.floor(getWage()/12))}{' '}
            kr
          </p>
        </div>
        <div>
          <h4>Årlig pensjonssparing (7%):</h4>
          <p className={`${style['calculator-salary']}`}>
            {numberWithSeperators(getYearlyRetirementSavings())}{' '}
            kr
          </p>
        </div>
      </div>
      <div className={`${style['calculator-result']}`}>
        <div>
          <h4>Ny fastlønn etter lønnsjustering i januar {getNextYear()} , gitt en økning på <b>{wageIncreacePercent}%</b>:</h4>
          <p className={`${style['calculator-salary']}`}>
            {numberWithSeperators(getYearlyWageIncrease())}{' '}
            kr
          </p>
        </div>
      </div>
      
    </div>
  );
}
