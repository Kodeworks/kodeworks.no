interface Props {
  listSectionSchema: NonNullable<Sanity.Default.Schema.ListSection>;
}

export default function ListSection({ listSectionSchema }: Props) {
  return (
    <section className="listSection max-w-sm">
      <h2>{listSectionSchema.heading}</h2>
      {listSectionSchema.list && (
        <ul>
          {listSectionSchema.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
