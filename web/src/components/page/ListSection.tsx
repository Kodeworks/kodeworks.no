interface Props {
  listSectionSchema: NonNullable<Sanity.Default.Schema.ListSection>;
}

export default function ListSection({ listSectionSchema }: Props) {
  return (
    <section className="listSection max-w-sm w-fit">
      <h2>{listSectionSchema.heading}</h2>
      {listSectionSchema.list && (
        <>
          {listSectionSchema.list.map((item) => (
            <div className="flex items-start my-2" key={item}>
              <img className="mt-0.5" src="/static/icons/list-marker.svg" alt="" />
              <span className="ml-1">{item}</span>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
