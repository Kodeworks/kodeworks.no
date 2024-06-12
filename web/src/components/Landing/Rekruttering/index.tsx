import Link from 'next/link';

const Rekruttering = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 section-padding" id="work-section">
      <article className="relative col-span-1 lg:col-span-2 grid grid-cols-[1fr] lg:grid-cols-[repeat(2,1fr)] flex py-16 items-center gap-10">
        <div className="full-screen-width h-full absolute bg-[var(--color-new-pink)] -z-10"></div>
        <div className=" flex flex-col items-center">
          <h2>Er du også en IT ekspert?</h2>
          <Link href="/karriere" className="mt-6">
            <button className="button px-3 py-2">Søk jobb hos oss</button>
          </Link>
        </div>
        <div className="flex justify-center lg:justify-start order-last">
          <img
            style={{ maxWidth: '100%' }}
            className="rounded-2xl"
            src="/static/photos/gruppe_c.jpg"
            alt="About"
          />
        </div>
      </article>
    </section>
  );
};

export default Rekruttering;
