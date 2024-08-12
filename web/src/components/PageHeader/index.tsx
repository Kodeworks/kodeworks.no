interface Prop {
  firstWord: string;
  secondWord: string;
}

export default function PageHeader({ firstWord, secondWord }: Prop): JSX.Element {

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-16">
      <h2 className="mr-3 header-title">{firstWord}</h2>
      <h2 className="green-text header-title">{secondWord}</h2>
    </div>
  );
}
