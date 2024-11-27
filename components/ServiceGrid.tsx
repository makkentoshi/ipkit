import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ServiceCard from "./Services";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type ServiceCardProps = {
  title: string;
  image: string;
  Icon: LucideIcon;
  className?: string;
  onClick: () => void;
};

const ServicesGrid: React.FC<{
  services: Array<
    {
      title: string;
      icon: React.ElementType;
      image: string;
      path: string;
      className?: string;
    } & ServiceCardProps
  >;
}> = ({ services }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const elements = gridRef.current?.children;
    let observer: IntersectionObserver;

    if (elements) {
      // Устанавливаем изначально скрытые стили
      gsap.set(elements, { opacity: 0, y: -50 });

      // Создаём IntersectionObserver
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Запускаем анимацию, когда элементы видны
              gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
              });
              observer.disconnect(); // Отключаем наблюдатель после анимации
            }
          });
        },
        { threshold: 0.1 } // Запуск анимации, когда 10% элемента видимо
      );

      // Начинаем наблюдение за секцией с карточками
      if (gridRef.current) observer.observe(gridRef.current);
    }

    // Чистим наблюдатель при размонтировании компонента
    return () => {
      if (observer) observer.disconnect();
    };
  }, [services]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer z-50"
    >
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          onClick={() => router.push(service.path)}
          title={service.title}
          image={service.image}
          Icon={service.icon as LucideIcon}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
};

export default ServicesGrid;