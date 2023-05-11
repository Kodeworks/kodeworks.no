import style from './budgetpost2.module.css';

interface Prop {
  total: number;
  yearly: number;
  title: String
}

export default function BudgetPost2({ total, yearly, title }: Prop): JSX.Element {

  return (
    <div className={`${style['budget-post2']}`}>
      <div className={`${style['title']}`}>
        <h4>{title}</h4>
        <span>Kan spare opp til {total} kr</span>
      </div>
      <div className={`${style['bar']}`} style={{ width: `${(yearly/1000)*4}%`}}>
          <span>{yearly} kr <br/> per år</span>
      </div>
    </div>
  );
}
