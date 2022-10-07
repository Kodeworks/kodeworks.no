import {useState} from 'react';

import style from './calculator.module.css';

enum Education {
  Bachelor = 0,
  Master = 1,
}

type Wage = {
  [key: number]: string;
};

const wages: Wage = {
  0: '569430',
  1: '611610',
  2: '672771',
  3: '800366',
  4: '862581',
  5: '911088',
  6: '956432',
  7: '991230',
  8: '1024974',
  9: '1043955',
  10: '1059772',
  11: '1070318',
  12: '1080862',
  13: '1091408',
  14: '1101952',
  15: '1111443',
  16: '1120934',
  17: '1125152',
  18: '1133588',
  19: '1138860',
  20: '1144132',
};

export default function Calculator(): JSX.Element {
  const [seniority, setSeniority] = useState<number>(0);
  const [education, setEducation] = useState<Education>(Education.Bachelor);

  function handleSeniorityChange(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget.value)
      setSeniority(+event.currentTarget.value);
  }

  function handleEducationChange(event: React.FormEvent<HTMLInputElement>) {
    if (education === Education.Bachelor && seniority === 20) {
      setSeniority(19);
    } else if (education === Education.Master && seniority === 19) {
      setSeniority(20);
    }

    setEducation(+event.currentTarget.value);
  }

  function numberWithSeperators(num: number): string {
    if (!num) {
      return '-';
    }

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  wages.hasOwnProperty(seniority + education) ? wages[seniority + education] : wages[20]
  return (
    <div className={`${style['calculator']}`}>
      <h2>Hva kommer du til å tjene?</h2>

      <h4>Hvilken utdanning har du?</h4>
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
      </label>

      <h4>Hvor lang arbeidserfaring har du?</h4>
      <div className={`${style['calculator-seniority-content']}`}>
        <label>
          <input
            type="range"
            className={`${style['calculator-seniority-range']}`}
            min={0}
            max={education === Education.Bachelor ? 20 : 19}
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
        år
      </div>

      <h4>Det vil gi en årslønn på</h4>
      <p className={`${style['calculator-salary']}`}>
        {numberWithSeperators(wages.hasOwnProperty(seniority + education) ? +wages[seniority + education] : +wages[Object.keys(wages).length - 1])} kr
      </p>
    </div>
  );
}
