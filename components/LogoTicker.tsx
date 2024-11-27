import React from 'react';

const logos = [
  { name: 'ABR', url: 'https://example.com/abr', imageUrl: '/ABR.svg' },
  { name: 'Afisha', url: 'https://www.google.com', imageUrl: '/Afisha.svg' },
  { name: 'AGORA', url: 'https://www.amazon.com', imageUrl: '/AGORA.svg' },
  { name: 'AROMA', url: 'https://www.ibm.com', imageUrl: '/AROMA.svg' },
  { name: 'AUYL', url: 'https://www.oracle.com', imageUrl: '/AUYL.svg' },
  { name: 'Blanca', url: 'https://www.intel.com', imageUrl: '/Blanca.svg' },
  { name: 'Bochonok', url: 'https://example.com/abr', imageUrl: '/Bochonok.svg' },
  { name: 'Brodvei Burger', url: 'https://www.google.com', imageUrl: '/Brodvei Burger.svg' },
  { name: 'CAFETERIA', url: 'https://www.amazon.com', imageUrl: '/CAFETERIA.svg' },
  { name: 'City Guide', url: 'https://www.ibm.com', imageUrl: '/City Guide.svg' },
  { name: 'COCO', url: 'https://www.oracle.com', imageUrl: '/COCO.svg' },
  { name: 'Daredzhani', url: 'https://www.intel.com', imageUrl: '/Daredzhani.svg' },
  { name: 'DelPapa', url: 'https://example.com/abr', imageUrl: '/DelPapa.svg' },
  { name: 'Julius', url: 'https://www.google.com', imageUrl: '/Julius.svg' },
  { name: 'LUCKEE YU', url: 'https://www.amazon.com', imageUrl: '/LUCKEE YU.svg' },
  { name: 'Ogonek', url: 'https://www.ibm.com', imageUrl: '/Ogonek.svg' },
  { name: 'RAMEN 77', url: 'https://www.oracle.com', imageUrl: '/RAMEN 77.svg' },
  { name: 'RAW', url: 'https://www.intel.com', imageUrl: '/RAW.svg' },
  { name: 'Spiros', url: 'https://example.com/abr', imageUrl: '/Spiros.svg' },
  { name: 'SYN 33', url: 'https://www.google.com', imageUrl: '/SYN 33.svg' },
  { name: 'TOR', url: 'https://www.amazon.com', imageUrl: '/TOR.svg' },

];



const LogoTicker = () => {
  return (
    <div className="relative overflow-hidden py-10">
      <div className="flex animate-ticker">
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-8 flex min-w-[150px] items-center justify-center transition-all hover:grayscale-0"
          >
            <img
              src={logo.imageUrl}
              alt={logo.name}
              className="h-12 object-contain grayscale"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
