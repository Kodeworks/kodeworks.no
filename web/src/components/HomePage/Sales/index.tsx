import Link from 'next/link';

const Sales = () => {
  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col w-full justify-start gap-8">
        {/* Text section initially placed first but will move based on order in CSS */}
        <div className="flex flex-col justify-between w-full md:order-2 order-1">
          <div className="mb-8 md:mb-0">
            {' '}
            {/* Added margin-bottom for mobile layout */}
            <p className="text-4xl">
              Har du et system du trenger hjelp med?
              <br></br>
              Eirik er klar for å bistå deg.
            </p>
          </div>
          <div className="flex flex-col">
            <h3>Eirik Larsen</h3>
            <p>eirik@kodeworks.no</p>
            <p>+47 416 70 269</p>
            <div>
              <Link href="#kontaktoss">
                <button className="button xl:px-8 px-6 py-3 border-none">Kontakt oss</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="self-start md:order-1 order-2">
          <img
            src="/static/photos/eirik_l.jpg"
            className="h-[500px] object-cover w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Sales;
