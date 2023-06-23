import { useContext, useEffect } from 'react';
import CareerContext from '../../context/CareerContext';
import style from '../page/calculator.module.css';

interface Props {
  careerSchema: NonNullable<Sanity.Default.Schema.Calculator>;
}

enum Education {
  Bachelor = 0,
  Master = 1,
}

export default function About({ careerSchema }: Props) {
  const { education, setEducation, seniority, setSeniority, salary, setSalary } =
    useContext(CareerContext);
  useEffect(() => {
    setContextSalary();
  });

  const maxSalaryLevel = careerSchema.salaryStpes!.length - 1;

  function setContextSalary() {
    const salaryLevel = seniority + education;
    setSalary(
      careerSchema.salaryStpes![salaryLevel > maxSalaryLevel ? maxSalaryLevel : salaryLevel]
    );
  }

  return (
    <div className={`flex flex-col gap-y-4 justify-center lg:justify-start`}>
      <h4 className="text-center lg:text-start">Hvilken utdanning har du?</h4>
      <div className="flex justify-center lg:justify-start gap-3">
        <label className={`${style['calculator-education-label']}`}>
          <input
            type="radio"
            className={`${style['calculator-education-input']}`}
            name="education"
            value={Education.Bachelor}
            defaultChecked
            onChange={(event) => {
              setEducation(+event.target.value);
              setContextSalary();
            }}
          />
          Bachelorgrad
        </label>
        <label className={`${style['calculator-education-label']}`}>
          <input
            type="radio"
            className={`${style['calculator-education-input']}`}
            name="education"
            value={Education.Master}
            onChange={(event) => {
              setEducation(+event.target.value);
              setContextSalary();
            }}
          />
          Mastergrad
        </label>
      </div>
      <h4 className="text-center lg:text-start">Hvor lang arbeidserfaring har du?</h4>
      <div
        className={`${style['calculator-seniority-content']} justify-center lg:justify-start flex`}
      >
        <label>
          <input
            type="range"
            className={`${style['calculator-seniority-range']}`}
            min={0}
            max={20}
            onChange={(event) => {
              setSeniority(+event.target.value);
              setContextSalary();
            }}
            value={seniority}
          />
        </label>
        <h4 className="mb-1.5">{seniority} år</h4>
      </div>
    </div>
  );
}
