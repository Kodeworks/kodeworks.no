import { useContext, useEffect, useState } from 'react';
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

  const [sliderMaxLevel, setSliderMaxLevel] = useState(getSliderMaxLevel(Education.Master));

  function getSliderMaxLevel(education: Education) {
    if (education == Education.Bachelor) {
      return careerSchema.salaryStpes!.length - 1;
    }
    return careerSchema.salaryStpes!.length - 2;
  }

  function handleEducationChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value;
    setEducation(value);
    const newMaxLevel = getSliderMaxLevel(value);
    if (seniority > newMaxLevel) {
      setSeniority(newMaxLevel);
    }
    setSliderMaxLevel(newMaxLevel);
    setContextSalary();
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
            defaultChecked
            onChange={handleEducationChange}
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
            key={sliderMaxLevel}
            min={0}
            max={sliderMaxLevel}
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
