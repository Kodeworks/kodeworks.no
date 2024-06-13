import Image from 'next/image';
import { logos } from '../../../utils/kunderLogos';

const Kunder = () => {

  return (
    <div className="flex flex-col">
      <h2 className="section-title">Våre Kunder</h2>
      <div className="flex flex-row flex-wrap items-center lg:justify-start justify-start xl:gap-x-12 xl:gap-y-12 lg:gap-x-6 lg:gap-y-6 gap-x-4 gap-y-4">
        {logos.map((logo, index) => {
          return (
            <div key={index} className="logo">
              <Image src={logo.src} alt={logo.alt} width={140} height={30} className="lg:w-[150px] w-[100px] h-auto" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Kunder;
