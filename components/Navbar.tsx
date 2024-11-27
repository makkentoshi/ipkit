import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type NavProps = {
  contactSectionRef?: React.RefObject<HTMLDivElement>;
};

function Navbar({ contactSectionRef }: NavProps) {
  const router = useRouter();

  const handleOrderServicesClick = async (event: React.MouseEvent) => {
    event.preventDefault();

    await router.push("/"); // Переход на главную страницу

    // Переход к секции Contact без задержки
    if (contactSectionRef?.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  const goToContactSection = async (event: React.MouseEvent) => {
    await event.preventDefault();
    await router.push("/");
    // Переход к секции Contact без ожидания
    if (contactSectionRef?.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
            onClick={(event) => {
              event.preventDefault();
              router.push("/");
            }}
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={150}
              height={100}
              className="cursor-pointer"
            />
          </motion.div>

          <div className="hidden md:flex space-x-8">
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              href="#"
              className="text-gray-300 hover:text-white transition-colors flex"
              onClick={(event) => {
                event.preventDefault();
                router.push("/");
              }} // Изменено на переход к секции
            >
              <ArrowLeftIcon className="px-1" />
              Назад
            </motion.a>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity"
            onClick={handleOrderServicesClick}
          >
            Заказать услуги
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
