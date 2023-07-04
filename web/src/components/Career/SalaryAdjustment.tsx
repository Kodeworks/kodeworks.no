import { useContext, useEffect, useRef, useState } from 'react';
import CareerContext from '../../context/CareerContext';
import NumberWithSeperators from '../NumberWithSeparator';
import style from '../page/calculator.module.css';

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

  const [lines, setLines] = useState<Object[]>([]);

  useEffect(() => {
    setLines(calculateLines());
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setLines(calculateLines());
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const years = [
    { class: 'year-one', align: 'items-end' },
    { class: 'year-two', align: 'items-center' },
    { class: 'year-three', align: 'items-start' },
  ];

  function calculateLines() {
    let lineList: Object[] = [];
    for (let i = 0; i < years.length - 1; i++) {
      const fromBox = document.getElementById(years[i]['class']);
      const toBox = document.getElementById(years[i + 1]['class']);
      lineList.push({
        x1: (fromBox!.offsetLeft + fromBox!.offsetWidth).toString(),
        y1: (fromBox!.offsetTop + fromBox!.offsetHeight / 2).toString(),
        x2: toBox!.offsetLeft.toString(),
        y2: (toBox!.offsetTop + toBox!.offsetHeight / 2).toString(),
      });
    }
    return lineList;
  }

  return (
    <div className={`${style['salary-adjustments']} relative`}>
      <div style={{ gridArea: 'info-top' }}>
        <h3>Lønnsjusteringer over tid (estimert)</h3>
        <span>
          KodeWorks justerer lønnstabellen årlig basert på Tekna sine lønnsvekstrapporter.
        </span>
      </div>

      {lines.length > 1 &&
        lines.map((line, index) => {
          return (
            <svg key={index} className="absolute h-full w-full -z-10">
              <line
                x1={line['x1']}
                y1={line['y1']}
                x2={line['x2']}
                y2={line['y2']}
                stroke="var(--color-green)"
              />
            </svg>
          );
        })}
      {years.map((year, index) => {
        return (
          <div key={year.class} style={{ gridArea: year.class }} className={`flex flex-col h-full`}>
            <div className={`${year.align} flex justify-center h-full py-4 min-h-[150px]`}>
              <div
                id={year.class}
                className={`border-2 border-solid border-[var(--color-green)] text-s leading-none flex p-2 justify-center w-min whitespace-nowrap bg-white`}
              >
                {getSalaryIncreace(index + 1)}
              </div>
            </div>
            <div
              className={`border-t-2 border-solid border-black p-4 flex justify-center items-center h-[50px]`}
            >
              {new Date().getFullYear() + index + 1}
            </div>
          </div>
        );
      })}
      <div style={{ gridArea: 'info-bottom' }}>
        Lønnsjusteringen estimeres til {careerSchema.estimatedSalaryIncrease} % økning per år.
      </div>
    </div>
  );
}
