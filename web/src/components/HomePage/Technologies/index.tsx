interface Props {
    technologies: string[];
}

const Technologies = ({ technologies }: Props) => {
  return (
    <div className="flex flex-col">
      <h2 className="section-title">Teknologi</h2>
      <div className="flex flex-row flex-wrap gap-3 justify-center">
        {technologies.map((tek) => (
            <div key={tek} className="border-[2px] border-solid p-2 text-center text-3xl">
                {tek}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
