export default function TechList({ technologies }: { technologies: string[] }): JSX.Element {
  return (
    <div className="flex flex-wrap text-sm gap-4">
      {technologies?.map((tech, index) => (
        <div key={`${index}`} className="border-[1.25px] border-solid py-1 px-2 text-center">
          {tech}
        </div>
      ))}
    </div>
  );
}
