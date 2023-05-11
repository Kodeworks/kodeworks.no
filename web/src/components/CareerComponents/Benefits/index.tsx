import { useContext } from 'react';
import CareerContext from '../../../context/careerContext';
import BudgetPost2 from '../BudgetPost2';
import NumberWithSeperators from '../NumberWithSeperators';
import style from './benefits.module.css';

export default function Benefits(): JSX.Element {
  const { salary } = useContext(CareerContext)

  return (
    <div className={`${style['benefits-grid']}`}>
      <div className={`${style['info']}`}>
        <h3>Innkjøp</h3>
        <p>I Kodeworks har de ansatte sitt eget ansattbudsjett med ett beløp man får hvert år, som man enten kan bruke eller spare opp til ett visst beløp</p>
      </div>
      <div className={`${style['benefits']}`}>
        <BudgetPost2 total={15000} yearly={5000} title='Telefon'/>
        <BudgetPost2 total={48000} yearly={12000} title='Laptop'/>
        <BudgetPost2 total={30000} yearly={15000} title='Diverse utstyr'/>
        <BudgetPost2 total={30000} yearly={15000} title='Kurs og konferanser'/>
      </div>
    </div>
  );
}
