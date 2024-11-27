"use client";
import React, { useEffect, useState, forwardRef } from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = forwardRef<HTMLDivElement>((props, ref) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className="bg-black text-white py-10 flex flex-col items-center text-center md:text-left"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="container mx-auto px-12">
              <Image src="/logo.png" alt="logo" width={210} height={150} />
            </div>
            <p className="mt-4 text-sm text-gray-400">
              IPKIT.KZ : Качество в каждом действии.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Что мы предлагаем
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Установка
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Демонтаж
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Ремонт
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Выявление проблемы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              ОБЩЕЕ
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Услуги
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Контакт
                </a>
              </li>
            </ul>
          </div>

          <div className="container mx-auto md:px-[0rem] px-[5rem]">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              СОЦ СЕТИ
            </h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {currentYear} IPKIT.KZ Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
