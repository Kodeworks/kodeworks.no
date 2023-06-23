import { useContext, useEffect } from 'react';
import CareerContext from '../../context/CareerContext';
import NumberWithSeperators from '../NumberWithSeparator';

interface Props {
  careerSchema: NonNullable<Sanity.Default.Schema.Calculator>;
}

export default function Pension({ careerSchema }: Props) {
  const { salary, pension, setPension } = useContext(CareerContext);
  useEffect(() => {
    setContextPension();
  });

  // const dateString = new Date(careerSchema.basicPensionAmount?.fromDate!).toLocaleDateString();
  const dateString = careerSchema.basicPensionAmount?.fromDate!;

  function setContextPension() {
    const twelveG = 12 * careerSchema.basicPensionAmount!.amount!;
    const retirementBasis = salary > twelveG ? twelveG : salary;
    setPension((retirementBasis / 100) * careerSchema.yearlyPensionSaving!);
  }

  return (
    <div
      className={`relative flex flex-col lg:flex-row lg:justify-between justify-center lg:items-center py-16 gap-y-10 text-white`}
    >
      <div className={'full-screen-width h-full absolute bg-[#000] -z-10 '}></div>
      <div className="flex flex-col">
        <h3>Pensjon</h3>
        <span>{careerSchema.yearlyPensionSaving} % årlig pensjonssparing opp til 12G.</span>
        <span>
          Grunnbeløpet (G) per {dateString} er kr{' '}
          {
            <NumberWithSeperators
              startValue={careerSchema.basicPensionAmount!.amount!}
              endValue={careerSchema.basicPensionAmount!.amount!}
              showCurrency
            />
          }
          .
        </span>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="pb-2">Årlig pensjon basert på årslønn</h4>
        <div
          className={`border-2 border-solid border-[#B6FF9E] text-5xl leading-none flex p-2 justify-center w-min whitespace-nowrap`}
        >
          <NumberWithSeperators startValue={pension - 10000} endValue={pension} showCurrency />
        </div>
      </div>
    </div>
  );
}
