import Link from 'next/link';
import { useContext } from 'react';
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
    return getPermanentBenefits() + salary + pension;
  }

  function getPermanentBenefits() {
    const totalEmployeeBudgetAmount = careerSchema.employeeBudget
      ?.epolyeeBudgetsPosts!.filter((post) => post.fixedBenefits)
      .map((post) => post.amountYearly)
      .reduce((accumulator, currentValue) => accumulator! + currentValue!);

    const totalBenefitsAmount = careerSchema.benefits
      ?.benefitItems!.filter((item) => item.fixedBenefits)
      .map((item) => item.amountYearly)
      .reduce((accumulator, currentValue) => accumulator! + currentValue!);
    return totalEmployeeBudgetAmount! + totalBenefitsAmount!;
  }

  return (
    <div className={`${style['total']} flex flex-col items-center lg:items-start`}>
      <h4>Totalpakke</h4>
      <div className={`border-2 border-solid border-[#B6FF9E] gap-y-4 flex flex-col w-min`}>
        <div className="flex flex-col px-5 py-2">
          <h4>Fastlønn</h4>
          <NumberWithSeperators startValue={salary - 100000} endValue={salary} showCurrency />
        </div>
        <div className="flex flex-col px-5 py-2">
          <div className="flex">
            <h4>Faste goder</h4>
            <TooltipComponent
              tooltipContainer={
                <img src="/static/icons/marker.svg" alt="Logo" width="12" height="12" />
              }
            >
              <p>
                Er summen av faster godene som du får som ansatt hos KodeWorks blant annet Telefon,
                lapton, annet utstyr, kurs og konferanse, telefonabonnement, bredbånd og
                treningsmedlemskap
              </p>
            </TooltipComponent>
          </div>
          <NumberWithSeperators
            startValue={getPermanentBenefits()}
            endValue={getPermanentBenefits()}
            showCurrency
          />
        </div>
        <div className="flex flex-col px-5 py-2">
          <div className="flex">
            <h4>Pensjon</h4>
            <TooltipComponent
              tooltipContainer={
                <img src="/static/icons/marker.svg" alt="Logo" width="12" height="12" />
              }
            >
              <p>
                Grunnbeløpet (G) per {dateString} er kr {careerSchema.basicPensionAmount!.amount!}.
              </p>
            </TooltipComponent>
          </div>
          <NumberWithSeperators startValue={pension - 10000} endValue={pension} showCurrency />
        </div>
        <div
          className={`border-t-2 border-solid border-[#B6FF9E] gap-y-4 flex flex-col whitespace-nowrap`}
        >
          <div className="flex flex-col px-4 py-3">
            <h4>Dette vil gi en totalpakke på</h4>
            <NumberWithSeperators
              startValue={getTotal() - 10000}
              endValue={getTotal()}
              showCurrency
            />
          </div>
        </div>
      </div>
      <Link href="/staffmanual" className="mt-6">
        <div className="mt-4 px-10 py-3 bg-[#B6FF9E] text-[#000] hover:text-[#666] ">
          Se håndboka
        </div>
      </Link>
    </div>
  );
}
