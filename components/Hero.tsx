'use client';

import React from "react";

type HeroProps = {
  contactSectionRef: React.RefObject<HTMLDivElement>;
};

export default function Hero({ contactSectionRef }: HeroProps) {
  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20" />
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500">
          Современные IT-решения для вашего бизнеса
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Профессиональная установка и обслуживание IT-инфраструктуры
        </p>
        <button
          onClick={scrollToContactSection}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Оставить заявку
        </button>
      </div>
    </section>
  );
}