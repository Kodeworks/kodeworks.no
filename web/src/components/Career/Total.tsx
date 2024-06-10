import Link from 'next/link';
import { useContext, useMemo } from 'react';
import CareerContext from '../../context/CareerContext';
import NumberWithSeperators from '../NumberWithSeparator';
import style from '../page/calculator.module.css';
import TooltipComponent from '../ToolTip';

interface Props {
  careerSchema: NonNullable<Sanity.Default.Schema.Calculator>;
}

export default function Total({ careerSchema }: Props) {
  const { salary, pension } = useContext(CareerContext);
  const dateString = careerSchema.basicPensionAmount?.fromDate!;

  function getTotal() {
    return permanentBenefits + salary + pension;
  }

  const permanentBenefits = useMemo(() => {
    if (Array.isArray(careerSchema.employeeBudget?.epolyeeBudgetsPosts) && Array.isArray(careerSchema.benefits?.benefitItems)) {
      const totalEmployeeBudgetAmount = careerSchema.employeeBudget?.epolyeeBudgetsPosts.filter((post) => post.fixedBenefits)
        .map((post) => post.amountYearly)
        .reduce((accumulator, currentValue) => accumulator! + currentValue!);

      const totalBenefitsAmount = careerSchema.benefits?.benefitItems.filter((item) => item.fixedBenefits)
        .map((item) => item.amountYearly)
        .reduce((accumulator, currentValue) => accumulator! + currentValue!);
      return totalEmployeeBudgetAmount! + totalBenefitsAmount!;
    } else {
      return 0;
    }
  }, [careerSchema]);

  return (
    <div className={`flex flex-col items-center lg:items-start my-16`}>
      <h4>Totalpakke</h4>
      <div
        className={`border-2 border-solid border-[var(--color-green)] gap-y-4 flex flex-col w-min`}
      >
        <div className="flex flex-col px-5 py-2">
          <h4>Fastlønn</h4>
          <div className="text-5xl whitespace-nowrap">
            <NumberWithSeperators startValue={salary - 100000} endValue={salary} showCurrency />
          </div>
        </div>
        <div className="flex flex-col px-5 py-2">
          <div className="flex">
            <h4>Faste goder</h4>
            <TooltipComponent
              tooltipContainer={
                <img src="/static/icons/marker.svg" alt="Logo" width="12" height="12" />
              }
            >
              <p className="max-w-[70vw]">
                Er summen av faster godene som du får som ansatt hos KodeWorks blant annet Telefon,
                laptop, annet utstyr, kurs og konferanse, telefonabonnement, bredbånd og
                treningsmedlemskap
              </p>
            </TooltipComponent>
          </div>
          <div className="text-5xl whitespace-nowrap">
            <NumberWithSeperators
              startValue={permanentBenefits}
              endValue={permanentBenefits}
              showCurrency
            />
          </div>
        </div>
        <div className="flex flex-col px-5 py-2">
          <div className="flex">
            <h4>Pensjon</h4>
            <TooltipComponent
              tooltipContainer={
                <img src="/static/icons/marker.svg" alt="Logo" width="12" height="12" />
              }
            >
              <p className="max-w-[70vw]">
                Grunnbeløpet (G) per {dateString} er kr {careerSchema.basicPensionAmount!.amount!}.
              </p>
            </TooltipComponent>
          </div>
          <div className="text-5xl whitespace-nowrap">
            <NumberWithSeperators startValue={pension - 10000} endValue={pension} showCurrency />
          </div>
        </div>
        <div
          className={`border-t-2 border-solid border-[var(--color-green)] gap-y-4 flex flex-col whitespace-nowrap`}
        >
          <div className="flex flex-col px-4 py-3">
            <h4>Dette vil gi en totalpakke på</h4>
            <div className="text-5xl whitespace-nowrap">
              <NumberWithSeperators
                startValue={getTotal() - 10000}
                endValue={getTotal()}
                showCurrency
              />
            </div>
          </div>
        </div>
      </div>
      <Link href="/staffmanual" className="mt-6">
        <div className="mt-4 px-10 py-3 bg-[var(--color-green)] text-black hover:text-[var(--color-dark-grey)] ">
          Se håndboka
        </div>
      </Link>
    </div>
  );
}
