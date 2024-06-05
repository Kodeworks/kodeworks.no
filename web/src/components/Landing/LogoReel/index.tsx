import React from 'react';
import './LogoReel.css'
import Image from 'next/image';
import { logos } from '../../../utils/kunderLogos';

const imageStyle: React.CSSProperties = {
  height: 'unset',
  width: '140px',
}

const LogoReel = () => {
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

export default LogoReel;