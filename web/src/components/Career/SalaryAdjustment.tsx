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

  function calculateLines() {
    const box1 = document.getElementById('year-one');
    const box2 = document.getElementById('year-two');
    const box3 = document.getElementById('year-three');

    return [
      {
        x1: (box1!.offsetLeft + box1!.offsetWidth).toString(),
        y1: (box1!.offsetTop + box1!.offsetHeight / 2).toString(),
        x2: box2!.offsetLeft.toString(),
        y2: (box2!.offsetTop + box2!.offsetHeight / 2).toString(),
      },
      {
        x1: (box2!.offsetLeft + box2!.offsetWidth).toString(),
        y1: (box2!.offsetTop + box2!.offsetHeight / 2).toString(),
        x2: box3!.offsetLeft.toString(),
        y2: (box3!.offsetTop + box3!.offsetHeight / 2).toString(),
      },
    ];
  }

  const years = [
    { class: 'year-one', align: 'items-end' },
    { class: 'year-two', align: 'items-center' },
    { class: 'year-three', align: 'items-start' },
  ];

  return (
    <div className={`${style['salary-adjustments']} relative`}>
      <div style={{ gridArea: 'info-top' }}>
        <h3>Lønnsjusteringer over tid (estimert)</h3>
        <span>
          KodeWorks justerer lønnstabellen årlig basert på Tekna sine lønnsvekstrapporter.
        </span>
        <p>halloen{years.length}</p>
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
              {new Date().getFullYear() + index}
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
