import React from 'react';
import '../LogoReel/LogoReel.css';
import Image from 'next/image';


const imageStyle: React.CSSProperties = {
  height: 'auto',
  width: '140px',
}

const logos = [
  { alt: 'aize logo', src: '/logos/aize.svg' },
  { alt: 'avinor logo', src: '/logos/avinor.png' },
  { alt: 'bitfix logo', src: '/logos/bitfix.png' },
  { alt: 'bn logo', src: '/logos/bn.png' },
  { alt: 'dnb logo', src: '/logos/dnb.png' },
  { alt: 'elporten logo', src: '/logos/elporten.png' },
  { alt: 'equinor logo', src: '/logos/equinor-logo.png' },
  { alt: 'fremtind logo', src: '/logos/fremtind.png' },
  { alt: 'gintel logo', src: '/logos/gintel.svg' },
  { alt: 'inatur logo', src: '/logos/inatur.svg' },
  { alt: 'kilter logo', src: '/logos/kilter.png' },
  { alt: 'klp logo', src: '/logos/klp.png' },
  { alt: 'kongsberg logo', src: '/logos/kongsberg.png' },
  { alt: 'lilbit logo', src: '/logos/lilbit2.webp' },
  { alt: 'moller logo', src: '/logos/moller.png' },
  // { alt: 'nomono logo', src: '/logos/nomono.webp' }, TODO add nomono logo with transparent bg
  { alt: 'obos logo', src: '/logos/obos.png' },
  { alt: 'remarkable logo', src: '/logos/remarkable.png' },
  { alt: 'ruter logo', src: '/logos/ruter.png' },
  { alt: 'statkraft logo', src: '/logos/statkraft.png' },
  { alt: 'technipFMC logo', src: '/logos/technip.png' },
  { alt: 'thales logo', src: '/logos/thales.png' },
  { alt: 'thomas Reuters logo', src: '/logos/thomson.png' }
];


const TeknologiReel = () => {
  return (
    <div className="logo-reel gap-12">
    {
        logos.map((logo, index) => {
        return (
            <div key={index} className="logo">
            <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={30}
                style={imageStyle}
            />
            </div>
        )
        
        })
    }
    {
        logos.map((logo, index) => {
        return (
            <div key={logo.alt} className="logo">
            <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={30}
                style={imageStyle}
            />
            </div>
        )
        
        })
    }

    </div>
  );
};

export default TeknologiReel;