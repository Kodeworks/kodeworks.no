import { useContext, useEffect } from 'react';
import CareerContext from '../../../context/careerContext';
import style from './aboutPerson.module.css';
import { getSalaryInfo, SalaryInfo } from '../../../lib/sanity-api';

type Wage = {
  [key: number]: number;
};

interface Props {
  salaryInfo: SalaryInfo;
}

export default function AboutPerson({ salaryInfo }: Props): JSX.Element {
  const { mastersDegree, setMastersDegree, seniority, setSeniority, salary, setSalary } = useContext(CareerContext)

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

  function handleEducationChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setMastersDegree(event.currentTarget.value === '1' ? true : false);
  }
  
  function handleSeniorityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSeniority(+event.currentTarget.value);
    console.log(salaryInfo.yearlyPension)

  }

  useEffect(() => {
    setSalary(getYearlySalary);
  });

  function getYearlySalary() {
    return wages.hasOwnProperty(seniority + 1)
    ? +wages[mastersDegree ? seniority + 1 : seniority]
    : +wages[Object.keys(wages).length - 1]
  }


  return (
    <div className={`${style['abb']}`}>
      <div className={`${style['about-container']}`}>
          <div className={`${style['about-content']}`}>
            <span>Har du mastergrad?</span>
            <select
              className={`${style['about-work-month-select']}`}
              onChange={handleEducationChange}
            >
              <option value="0">Nei</option>
              <option value="1">Ja</option>
            </select>
          </div>
          <div className={`${style['about-content']}`}>
            <span>År fulltids relevant arbeidserfaring:</span>
            <div className={`${style['range']}`}>
              <input
                type="range"
                className={`${style['calculator-seniority-range']}`}
                min={0}
                max={20}
                onChange={handleSeniorityChange}
                value={seniority}
              />
              <span>{seniority}</span>
            </div>
          </div>
      </div>
      <div className={`${style['bottom']}`}>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const salaryInfo = await getSalaryInfo();
  console.log(salaryInfo.yearlyPension);
  return {
    props: { salaryInfo },
  };
}