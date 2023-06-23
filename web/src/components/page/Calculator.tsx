import { useState } from 'react';
import CareerContext from '../../context/CareerContext';
import About from '../Career/About';
import EmployeeBudgets from '../Career/EmployeeBudgets';
import OtherBenefits from '../Career/OtherBenefits';
import Pension from '../Career/Pension';
import Salary from '../Career/Salary';
import SalaryAdjustment from '../Career/SalaryAdjustment';
import Total from '../Career/Total';

interface Props {
  careerSchema: NonNullable<Sanity.Default.Schema.Calculator>;
}

export default function Calculator({ careerSchema }: Props) {
  const [seniority, setSeniority] = useState(0);
  const [education, setEducation] = useState(0);
  const [salary, setSalary] = useState(0);
  const [pension, setPension] = useState(0);

  return (
    <CareerContext.Provider
      value={{
        education,
        setEducation,
        seniority,
        setSeniority,
        salary,
        setSalary,
        pension,
        setPension,
      }}
    >
      <section className="col-span-1 lg:col-span-2 flex flex-col">
        <h2 className="text-center lg:text-start">Hva kommer du til å tjene</h2>
        <div className="col-span-1 lg:col-span-2 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] my-16">
          <About careerSchema={careerSchema} />
          <Salary />
        </div>
        <div className="col-span-1 lg:col-span-2 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)]">
          <Total careerSchema={careerSchema} />
          <SalaryAdjustment careerSchema={careerSchema} />
        </div>
        <Pension careerSchema={careerSchema} />
        <EmployeeBudgets careerSchema={careerSchema} />
        <OtherBenefits careerSchema={careerSchema} />
      </section>
    </CareerContext.Provider>
  );
}
