import Image from 'next/image';
import { logos } from '../../../utils/kunderLogos';

const imageStyle: React.CSSProperties = {
  height: 'unset',
  width: '150px',
};

const Kunder = () => {

  return (
    <div className="flex flex-col section-padding">
      <h2 className="section-title">Kunder</h2>
      <div className="flex flex-row flex-wrap items-center justify-start gap-x-12 gap-y-12">
        {logos.map((logo, index) => {
          return (
            <div key={index} className="logo">
              <Image src={logo.src} alt={logo.alt} width={140} height={30} style={imageStyle} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Kunder;
