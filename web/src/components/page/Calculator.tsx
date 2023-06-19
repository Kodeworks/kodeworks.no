import Link from 'next/link';
import { useEffect, useState } from 'react';
import { urlFor } from '../../lib/sanity';
import Button from '../Button';
import NumberWithSeperators from '../NumberWithSeparator';
import TooltipComponent from '../ToolTip';
import style from './calculator.module.css';

interface Props {
  careerSchema: NonNullable<Sanity.Default.Schema.Calculator>;
}

enum Education {
  Bachelor = 0,
  Master = 1,
}

export default  function Calculator({ careerSchema }: Props) {
  // const dateString = new Date(careerSchema.basicPensionAmount?.fromDate!).toLocaleDateString();
  const dateString = careerSchema.basicPensionAmount?.fromDate!;
  const [seniority, setSeniority] = useState<number>(0);
  const [education, setEducation] = useState<Education>(Education.Bachelor);

  function getTotal() {
    return getPermanentBenefits() + getSalary() + getPension()
  }
  function getPermanentBenefits() {
    const totalEmployeeBudgetAmount = careerSchema.employeeBudget?.epolyeeBudgetsPosts!
    .filter((post) => post.fixedBenefits)
    .map((post) => post.amountYearly)
    .reduce(
      (accumulator, currentValue) => accumulator! + currentValue!)
    const totalBenefitsAmount = careerSchema.benefits?.benefitItems!
    .filter((item) => item.fixedBenefits)
    .map((item) => item.amountYearly)
    .reduce(
      (accumulator, currentValue) => accumulator! + currentValue!)
    return totalEmployeeBudgetAmount! + totalBenefitsAmount!
  }

  function getSalary() {
    const salaryLevel = seniority + education;
    return careerSchema.salaryStpes![salaryLevel > 19 ? careerSchema.salaryStpes!.length -1 : salaryLevel]
  }
  
  function getSalaryIncreace(yearsToIncrease: number) {
    const increasePercent = careerSchema.estimatedSalaryIncrease
    const salaryLevel = seniority + education;
    const yearOne = careerSchema.salaryStpes?.map((step) => Math.floor(step + (step * increasePercent! / 100)));
    const yearTwo = yearOne?.map((step) => step + Math.floor((step * increasePercent! / 100)));
    const yearThree = yearTwo?.map((step) => step + Math.floor((step * increasePercent! / 100)));
    const newSalary = yearsToIncrease === 1 ? yearOne![salaryLevel] : yearsToIncrease === 2 ? yearTwo![salaryLevel+1] : yearThree![salaryLevel+2] 
    return <NumberWithSeperators startValue={newSalary - 10000} endValue={newSalary} showCurrency/>
  }
  
  function getPension() {
      const twelveG: number = 12 * careerSchema.basicPensionAmount!.amount!;
      const salary: number = getSalary();

      const retirementBasis = salary > twelveG ? twelveG : salary;
      return (retirementBasis / 100) * careerSchema.yearlyPensionSaving!
  }
  
  function handleSeniorityChange(event: React.FormEvent<HTMLInputElement>) {
    setSeniority(+event.currentTarget.value);
  }

  function handleEducationChange(event: React.FormEvent<HTMLInputElement>) {
    setEducation(+event.currentTarget.value);
  }

  return (
    <section className="col-span-1 lg:col-span-2 flex flex-col gap-10">
      <h2 className='text-center lg:text-start'>Hva kommer du til å tjene</h2>
      <div className={`${style['calculator-grid']}`}>
        <div className={`${style['about']} flex flex-col gap-y-4 justify-center lg:justify-start`}>
          <h4 className='text-center lg:text-start'>Hvilken utdanning har du?</h4>
          <div className='flex justify-center lg:justify-start gap-3'>
            <label className={`${style['calculator-education-label']}`}>
              <input
                type="radio"
                className={`${style['calculator-education-input']}`}
                name="education"
                value={Education.Bachelor}
                defaultChecked
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
                onChange={handleEducationChange}
              />
              Mastergrad
            </label>
          </div>
          <h4 className='text-center lg:text-start'>Hvor lang arbeidserfaring har du?</h4>
            <div className={`${style['calculator-seniority-content']} justify-center lg:justify-start flex`}>
              <label>
                <input
                  type="range"
                  className={`${style['calculator-seniority-range']}`}
                  min={0}
                  max={20}
                  onChange={handleSeniorityChange}
                  value={seniority}
                />
              </label>
              <h4 className='mb-1.5'>{seniority} år</h4>
            </div>
        </div>
        <div className={`${style['salary']} flex flex-col justify-center items-center`}>
          <h4>Det vil gi en årslønn på</h4>
          <div className={`${style['salary-box']}`}>
              <NumberWithSeperators startValue={getSalary() - 100000} endValue={getSalary()} showCurrency/>
          </div>
        </div>
        <div className={`${style['total']} flex flex-col items-center lg:items-start`}>
          <h4>Totalpakke</h4>
          <div className={`border-2 border-solid border-[#B6FF9E] gap-y-4 flex flex-col w-min`}>
            <div className='flex flex-col px-5 py-2'>
              <h4>Fastlønn</h4>
              <NumberWithSeperators startValue={getSalary() - 100000} endValue={getSalary()} showCurrency/>
            </div>
            <div className='flex flex-col px-5 py-2'>
              <div className='flex'>
                <h4>Faste goder</h4>
                <TooltipComponent tooltipContainer={<img src="/static/icons/marker.svg" alt="Logo" width="12" height="12" />}>
                  <p>Er summen av faster godene som du får som ansatt hos KodeWorks blant annet Telefon, lapton, annet utstyr, kurs og konferanse, telefonabonnement, bredbånd og treningsmedlemskap</p>
                </TooltipComponent>
              </div>
              <NumberWithSeperators startValue={getPermanentBenefits()} endValue={getPermanentBenefits()} showCurrency/>
            </div>
            <div className='flex flex-col px-5 py-2'>
              <div className='flex'>
                <h4>Pensjon</h4>
                <TooltipComponent tooltipContainer={<img src="/static/icons/marker.svg" alt="Logo" width="12" height="12" />}>
                  <p>Grunnbeløpet (G) per {dateString} er kr {careerSchema.basicPensionAmount!.amount!}.</p>
                </TooltipComponent>
              </div>
              <NumberWithSeperators startValue={getPension() - 10000} endValue={getPension()} showCurrency/>
            </div>
            <div className={`border-t-2 border-solid border-[#B6FF9E] gap-y-4 flex flex-col whitespace-nowrap`}>
              <div className='flex flex-col px-4 py-3'>
                <h4>Dette vil gi en totalpakke på</h4>
                <NumberWithSeperators startValue={getTotal() - 10000} endValue={getTotal() } showCurrency/>
              </div>
            </div>
          </div>
          <Link href="/staffmanual">
            <div className='mt-4 px-10 py-3 bg-[#B6FF9E] text-[#000] hover:text-[#666] '>
              Se håndboka
            </div>
          </Link>
        </div>
        <div className={`${style['salary-adjustments']}`}>
          <div className={`${style['info-top']}`}>
            <h3>Lønnsjusteringer over tid (estimert)</h3>
            <span>KodeWorks følger Tekna sine retningslinjer for lønninger. </span>
          </div>
          <div className={`${style['year-one']} flex flex-col h-full`}>
            <div className='flex items-end justify-center h-full py-4 min-h-[150px]'>
              <div className={`border-2 border-solid border-[#B6FF9E] text-s leading-none flex p-2 justify-center w-min whitespace-nowrap`}>
                {getSalaryIncreace(1)}
              </div>
            </div>
            <div className={`${style['year']} p-4 flex justify-center items-center`}>
              2024
            </div>
          </div>
          <div className={`${style['year-two']} flex flex-col h-full`}>
            <div className='flex items-center justify-center h-full py-4 min-h-[150px]'>
              <div className={`border-2 border-solid border-[#B6FF9E] text-s leading-none flex p-2 justify-center w-min whitespace-nowrap`}>
                {getSalaryIncreace(2)}
              </div>
            </div>
            <div className={`${style['year']} p-4 flex justify-center items-center`}>
              2025
            </div>
          </div>
          <div className={`${style['year-three']} flex flex-col h-full`}>
            <div className='flex items-start justify-center h-full py-4 min-h-[150px]'>
              <div className={`border-2 border-solid border-[#B6FF9E] text-s leading-none flex p-2 justify-center w-min whitespace-nowrap`}>
                {getSalaryIncreace(3)}
              </div>
            </div>
            <div className={`${style['year']} p-4 flex justify-center items-center`}>
              2026
            </div>
          </div>
          <div className={`${style['info-bottom']}`}>
            Lønnsjusteringen estimeres til {careerSchema.estimatedSalaryIncrease} % økning per år.
          </div>
        </div>
        <div className={`relative ${style['pension']} flex flex-col lg:flex-row lg:justify-between justify-center lg:items-center py-16 gap-y-10 text-white`}>
          <div className="full-screen-width h-full absolute bg-[#000] -z-10"></div>
          <div className='flex flex-col'>
            <h3>Pensjon</h3>
            <span>{careerSchema.yearlyPensionSaving} % årlig pensjonssparing opp til 12G.</span>
            <span>Grunnbeløpet (G) per {dateString} er kr {<NumberWithSeperators startValue={careerSchema.basicPensionAmount!.amount!} endValue={careerSchema.basicPensionAmount!.amount!} showCurrency/>}.</span>
          </div>
          <div className='flex flex-col items-center'>
            <h4 className='pb-2'>Årlig pensjon basert på årslønn</h4>
            <div className={`border-2 border-solid border-[#B6FF9E] text-5xl leading-none flex p-2 justify-center w-min whitespace-nowrap`}>
              <NumberWithSeperators startValue={getPension() - 10000} endValue={getPension()} showCurrency/>
            </div>
          </div>
        </div>
        <div className={`relative ${style['employee-budgets']} flex flex-col gap-y-4 justify-center py-16`}>
          <div className="full-screen-width h-full absolute bg-[#B6FF9E] -z-10"></div>
            <h3>{careerSchema.employeeBudget!.title}</h3>
            <span className='max-w-xl'>{careerSchema.employeeBudget!.subTitle}</span>
            <div className='flex flex-col md:flex-row justify-between gap-10'>
              {careerSchema.employeeBudget?.epolyeeBudgetsPosts!.map((post, index) => {
                return <div className='flex flex-col justify-start lg:justify-center items-center text-center' key={index}>
                    <img
                      className={`${style['employee-budgets-icon']} py-4`}
                      src={urlFor(post.image).width(458).height(286).url()}
                      alt={''}
                    />
                    <h3 className='py-4'>{post.title}</h3>
                    <span><strong><NumberWithSeperators startValue={post.amountYearly!} endValue={post.amountYearly!} showCurrency/></strong> per år.</span>
                    <span>Kan spare opp til</span>
                    <span><strong><NumberWithSeperators startValue={post.amountTotal!} endValue={post.amountTotal!} showCurrency/></strong></span>
                  </div>
              })}
            </div>
        </div>
        <div className={`${style['other-benefits']}`}>
          <h3>{careerSchema.benefits?.title}</h3>
          <span className='max-w-xl'>{careerSchema.benefits!.subTitle}</span>
          <div className="full-screen-width flex  justify-start lg:justify-center gap-x-10 overflow-x-scroll">
            {careerSchema.benefits?.benefitItems!.map((item, index) => {
                return <div className={`${style['benefit-box']} relative flex flex-col justify-center items-center text-center `} key={index}>
                    <div className="h-full w-full absolute bg-[#00000066] -z-10"></div>
                    <img
                      className={`${style['benefit-image']} h-full w-full absolute -z-20`}
                      src={urlFor(item.image).width(458).height(286).url()}
                      alt={''}
                    />
                    <div className='-z-0 p-8'>
                      <h4 className='py-4'>{item.title}</h4>
                      <div className='flex'>
                        <span className='text-2xl leading-none text-[#B6FF9E] mr-2'>*</span>
                        <span className='text-xs leading-none'>{item.text}</span>
                      </div>
                    </div>
                  </div>
              })}
          </div>
        </div>
      </div>
      

      
    </section>
  );
}