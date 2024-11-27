"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import IconCard from "@/components/IconCard";

import services from "../servicesData";
import Footer from "@/components/Footer";
import ContactPage from "./components/Contact";
import ContactSection from "./components/ContactSection";

type ServicePageProps = {
  params: { slug: string };
};

const ServicePage: React.FC<ServicePageProps> = ({ params }) => {
  const { slug } = React.use(params);

  const router = useRouter();

  const contactSectionRef = useRef(null);
  // Находим текущий сервис на основе slug
  const service = services.find(
    (service) => service.path === `/services/${slug}`
  );
  if (!service) return <div>Сервис не найден</div>;

  const handleOrderServicesClick = async () => {
    await router.push("/"); // Переход на главную страницу

    // Переход к секции Contact после небольшого ожидания
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "auto" });
      }
    }, 0); // Можно установить задержку, если это нужно
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar
        contactSectionRef={contactSectionRef}
        handleOrderServicesClick={handleOrderServicesClick}
      />

      <main className="relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-1/2 h-[600px] bg-gradient-to-r from-pink-600 to-purple-600 blur-[150px] opacity-30" />
          <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-gradient-to-l from-blue-600 to-purple-600 blur-[150px] opacity-30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-[100px]">
          {/* 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <IconCard
              icon={<service.icon />} // Используем иконку сервиса
              title={service.title} // Заголовок сервиса
              description={service.description} // Описание сервиса
            />
          </div> */}

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            src={service.image}
            alt={service.title}
            className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
          />
          <div className="text-white  flex justify-start h-[500px]">
            <div className="py-10  text-md flex-col">
              <div className="font-semibold">{service.title}</div>
              <div className="font-light"> {service.description}</div>
              <ul className="mt-4 list-disc list-inside">
                {service.advantages?.map((advantage, index) => (
                  <li key={index} className="font-light">
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <ContactSection></ContactSection>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ServicePage;
