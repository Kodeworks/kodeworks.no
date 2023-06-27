import { useContext, useEffect, useState } from 'react';
import CareerContext from '../../context/CareerContext';
import { ClipContentContext } from '../../context/ClipContentContext';
import { useClipText } from '../../utils/useClipText';
import NumberWithSeperators from '../NumberWithSeparator';

interface Props {
  careerSchema: NonNullable<Sanity.Default.Schema.Calculator>;
}

export default function Pension({ careerSchema }: Props) {
  const { salary, pension, setPension } = useContext(CareerContext);
  const { changeClipMode } = useContext(ClipContentContext);
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date(careerSchema.basicPensionAmount?.fromDate!).toLocaleDateString());
    setContextPension();
  });

  const shouldClipText = useClipText(['pension']);

  useEffect(() => {
    changeClipMode(shouldClipText);
  }, [shouldClipText]);

  function setContextPension() {
    const twelveG = 12 * careerSchema.basicPensionAmount!.amount!;
    const retirementBasis = salary > twelveG ? twelveG : salary;
    setPension((retirementBasis / 100) * careerSchema.yearlyPensionSaving!);
  }

  return (
    <div
      id="pension"
      className={`relative flex flex-col lg:flex-row lg:justify-between justify-center lg:items-center py-16 gap-y-10 text-white`}
    >
      <div className={'full-screen-width h-full absolute bg-black -z-10 '}></div>
      <div className="flex flex-col">
        <h3>Pensjon</h3>
        <span>{careerSchema.yearlyPensionSaving} % årlig pensjonssparing opp til 12G.</span>
        <span>
          Grunnbeløpet (G) per {date && date} er kr{' '}
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
          className={`border-2 border-solid border-[var(--color-green)] text-5xl leading-none flex p-2 justify-center w-min whitespace-nowrap`}
        >
          <NumberWithSeperators startValue={pension - 10000} endValue={pension} showCurrency />
        </div>
      </div>
    </div>
  );
}
