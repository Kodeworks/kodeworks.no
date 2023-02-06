import { useState } from 'react';

import style from './calculator.module.css';

enum Education {
  Bachelor = 0,
  Master = 1,
}

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

export default function Calculator(): JSX.Element {
  const [seniority, setSeniority] = useState<number>(0);
  const [education, setEducation] = useState<Education>(Education.Bachelor);

  function handleSeniorityChange(event: React.FormEvent<HTMLInputElement>) {
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
