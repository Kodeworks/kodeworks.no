interface Props {
    technologies: string[];
}

const Teknologier = ({ technologies }: Props) => {
  return (
    <div className="flex flex-col section-padding">
      <h2 className="section-title">Teknologi</h2>
      <div className="flex flex-row flex-wrap gap-3">
        {technologies.map((tek) => (
            <div key={tek} className="border-[2px] border-solid p-2 text-center">
                {tek}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Teknologier;
