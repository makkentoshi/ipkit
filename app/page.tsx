"use client";

import {
  Camera,
  Wrench,
  Network,
  Server,
  Shield,
  WalletIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import VideoCarousel from "@/components/VideoCarousel";
import { EmblaOptionsType } from "embla-carousel";

import { useRouter } from "next/compat/router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ServicesGrid from "@/components/ServiceGrid";

const services = [
  {
    title: "Видеонаблюдение",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "/services/camera",
    description:
      "Современные системы видеонаблюдения — это надежное решение для контроля и безопасности вашего бизнеса или дома. Мы предлагаем профессиональные решения на базе IP- и аналоговых камер с высококачественной записью, аналитикой и удаленным доступом. Системы включают:",
    advantages: [
      "Камеры с функцией распознавания лиц и номеров.",
      "Аналитику для определения поведения и предотвращения угроз.",
      "Возможность просмотра видео в режиме реального времени через мобильные устройства.",
      "Обеспечьте полный контроль за вашим объектом в любое время и из любой точки мира.",
    ],
  },
  {
    title: "Монтажные работы",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2940&auto=format&fit=crop",
    path: "/services/wrench",
    description:
      "Монтажные работы — это ответственный и трудоёмкий процесс, требующий комплексного подхода и высоких профессиональных навыков. При их выполнении важно учитывать специфику каждого объекта и строго следовать проектной документации и техническим нормам. Только при соблюдении всех этапов монтажа и стандартов качества можно гарантировать безопасность и долговечность построенных конструкций и установленных систем.",
  },
  {
    title: "Серверные решения",
    icon: Server,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2934&auto=format&fit=crop",
    path: "/services/server",
    description:
      "Серверные решения — это сердце IT-инфраструктуры вашего бизнеса. Мы предлагаем:",
    advantages: [
      "Подбор и установку серверного оборудования.",
      "Разработку решений для хранения данных (NAS, SAN).",
      "Виртуализацию и облачные технологии.",
    ],
  },
  {
    title: "Сетевая инфраструктура",
    icon: Network,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    path: "/services/network",
    description:
      "Эффективная сетевая инфраструктура — это основа стабильной работы вашего бизнеса. Мы предлагаем полный цикл услуг:",
    advantages: [
      "Проектирование и монтаж локальных сетей (LAN).",
      "Настройка Wi-Fi сетей для предприятий любого масштаба.",
      "Интеграция сетевых решений с облачными сервисами.",
    ],
  },
  {
    title: "Системы безопасности",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "/services/security",
    description:
      "Комплексные системы безопасности для вашего бизнеса и дома — это надежная защита от внешних и внутренних угроз. Мы проектируем и устанавливаем:",
    advantages: [
      "Системы контроля и управления доступом (СКУД).",
      "Пожарно-охранные сигнализации.",
      "Интегрированные решения с видеонаблюдением.",
    ],
  },
  {
    title: "Торговое оборудование",
    icon: WalletIcon,
    image:
      "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    path: "/services/retail",
    description:
      "Современное торговое оборудование помогает автоматизировать процессы и повысить эффективность бизнеса. Мы поставляем и настраиваем:",
    advantages: [
      "Кассовое оборудование и POS-системы.",
      "Сканеры штрих-кодов и терминалы сбора данных.",
      "Принтеры чеков и весы с интеграцией в учетные системы.",
    ],
  },
];

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  const router = useRouter();

  const footerRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen   bg-gradient-to-b from-[#0A0A1F] via-[#141428] to-[#0A0A1F] text-white">
      <Header />

      {/* 3D Model Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      </div>

      {/* Video Content */}
      <div className=" py-[330px]">
        <VideoCarousel slides={SLIDES} options={OPTIONS}></VideoCarousel>
      </div>

      <div className="relative z-10">
        <Hero contactSectionRef={contactSectionRef} />

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-400 mb-12">
              Комплексные IT-решения для вашего бизнеса
            </p>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Services
                  key={index}
                  title={service.title}
                  image={service.image}
                  Icon={service.icon}
                  className="cursor-pointer"
                />
              ))}
            </div> */}

            <ServicesGrid services={services}></ServicesGrid>
          </div>
        </section>

        {/* Logo Ticker Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 mb-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Нам доверяют
            </h3>
          </div>
          <LogoTicker />
        </section>

        {/* Contact Section */}

        <ContactSection ref={contactSectionRef} />

        {/*Footer */}

        <Footer ref={footerRef}></Footer>
      </div>
    </main>
  );
}
