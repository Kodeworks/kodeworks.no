import Link from 'next/link';
import { useContext, useEffect } from 'react';
import CareerContext from '../../context/CareerContext';
import NumberWithSeperators from '../NumberWithSeparator';
import style from '../page/calculator.module.css';
import TooltipComponent from '../ToolTip';

interface Props {
  careerSchema: NonNullable<Sanity.Default.Schema.Calculator>;
}

export default function SalaryAdjustment({ careerSchema }: Props) {
  const { seniority, education } = useContext(CareerContext);
  const maxSalaryLevel = careerSchema.salaryStpes!.length - 1;

  function getSalaryIncreace(yearsToIncrease: number) {
    const increasePercent = careerSchema.estimatedSalaryIncrease;
    const salaryLevel = seniority + education;

    const yearOne = careerSchema.salaryStpes?.map((step) =>
      Math.floor(step + (step * increasePercent!) / 100)
    );
    const yearTwo = yearOne?.map((step) => step + Math.floor((step * increasePercent!) / 100));
    const yearThree = yearTwo?.map((step) => step + Math.floor((step * increasePercent!) / 100));

    const newSalary =
      yearsToIncrease === 1
        ? yearOne![salaryLevel > maxSalaryLevel ? maxSalaryLevel : salaryLevel]
        : yearsToIncrease === 2
        ? yearTwo![salaryLevel + 1 > maxSalaryLevel ? maxSalaryLevel : salaryLevel + 1]
        : yearThree![salaryLevel + 2 > maxSalaryLevel ? maxSalaryLevel : salaryLevel + 2];
    return (
      <NumberWithSeperators startValue={newSalary - 10000} endValue={newSalary} showCurrency />
    );
  }

  return (
    <div className={`${style['salary-adjustments']}`}>
      <div className={`${style['info-top']}`}>
        <h3>Lønnsjusteringer over tid (estimert)</h3>
        <span>KodeWorks følger Tekna sine retningslinjer for lønninger. </span>
      </div>
      <div className={`${style['year-one']} flex flex-col h-full`}>
        <div className="flex items-end justify-center h-full py-4 min-h-[150px]">
          <div
            className={`border-2 border-solid border-[#B6FF9E] text-s leading-none flex p-2 justify-center w-min whitespace-nowrap`}
          >
            {getSalaryIncreace(1)}
          </div>
        </div>
        <div className={`${style['year']} p-4 flex justify-center items-center`}>2024</div>
      </div>
      <div className={`${style['year-two']} flex flex-col h-full`}>
        <div className="flex items-center justify-center h-full py-4 min-h-[150px]">
          <div
            className={`border-2 border-solid border-[#B6FF9E] text-s leading-none flex p-2 justify-center w-min whitespace-nowrap`}
          >
            {getSalaryIncreace(2)}
          </div>
        </div>
        <div className={`${style['year']} p-4 flex justify-center items-center`}>2025</div>
      </div>
      <div className={`${style['year-three']} flex flex-col h-full`}>
        <div className="flex items-start justify-center h-full py-4 min-h-[150px]">
          <div
            className={`border-2 border-solid border-[#B6FF9E] text-s leading-none flex p-2 justify-center w-min whitespace-nowrap`}
          >
            {getSalaryIncreace(3)}
          </div>
        </div>
        <div className={`${style['year']} p-4 flex justify-center items-center`}>2026</div>
      </div>
      <div className={`${style['info-bottom']}`}>
        Lønnsjusteringen estimeres til {careerSchema.estimatedSalaryIncrease} % økning per år.
      </div>
    </div>
  );
}
