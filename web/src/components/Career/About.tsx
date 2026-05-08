import { useContext, useEffect } from 'react';
import CareerContext from '../../context/CareerContext';
import style from '../page/calculator.module.css';
import { Calculator } from '../../types/sanity.types';

interface Props {
  careerSchema: NonNullable<Calculator>;
}

enum Education {
  Bachelor = 0,
  Master = 1,
}

export default function About({ careerSchema }: Props) {
  const { education, setEducation, seniority, setSeniority, setSalary } = useContext(CareerContext);
  useEffect(() => {
    setContextSalary();
  });

  // Max slider value differs between master and bachelors degree
  function getSliderMaxLevel(education: Education) {
    if (education == Education.Bachelor) {
      return careerSchema.salaryStpes!.length - 1;
    }
    return careerSchema.salaryStpes!.length - 2;
  }

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
            defaultChecked
            onChange={(event) => {
              setEducation(+event.target.value);
              // Edge case for switching from Bachelor to Master when slider is maxed out.
              const newMaxLevel = getSliderMaxLevel(+event.target.value);
              if (seniority > newMaxLevel) {
                setSeniority(newMaxLevel);
              }
              setContextSalary();
            }}
          />
          Mastergrad
        </label>
      </div>
      <h4 className="text-center lg:text-start">Hvor lang arbeidserfaring har du?</h4>
      <div className={`gap-4 items-center justify-center lg:justify-start flex`}>
        <label>
          <input
            type="range"
            className={`${style['calculator-seniority-range']}`}
            min={0}
            max={getSliderMaxLevel(education)}
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
