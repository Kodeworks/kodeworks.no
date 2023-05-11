import style from './budgetpost.module.css';

interface Prop {
  total: number;
  yearly: number;
  title: String
}

export default function BudgetPost({ total, yearly, title }: Prop): JSX.Element {

  return (
    <div className={`${style['budget-post']}`}>
      <div className={`${style['title']}`} style={{ gridArea: 'title' }}>
        <h4>{title}</h4>
      </div>
      <div className={`${style['bar']}`} style={{ gridArea: 'bar' }}>
        <span>{total} kr totalt</span>
        <div className={`${style[`year-bar`]}`} style={{ height: `${(yearly/total)*100}%`}} >  
          <span>{yearly} kr <br/> per år</span>
        </div>
      </div>
    </div>
  );
}
