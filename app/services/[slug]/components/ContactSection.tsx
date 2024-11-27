"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import React from "react";

const ContactSection = React.forwardRef<HTMLDivElement>((props, ref) => (
  <section
    className=" py-[12rem]  backdrop-blur-sm"
    ref={ref}
  >
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r text-white">
              ЗАКАЗАТЬ УСЛУГИ
            </h2>
            <p className="mt-4 text-gray-400">
              Заполните форму и мы свяжемся с вами в ближайшее время для
              обсуждения всех вопросов!
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">КОНТАКТЫ</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
          
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-gray-300" />
                <span>+7 (777) 429-3944</span>
              

              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-gray-300" />
                <span>info@ipkit.kz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Контактная информация
          </h3>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Имя"
                className="w-full bg-transparent border-b  border-white/20  px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Фамилия"
                className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full  bg-transparent border-b border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full  bg-transparent border-b border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="privacy" className="mt-1.5" />
              <label htmlFor="privacy" className="text-sm text-gray-400">
                Нажимая 'Отправить', я соглашаюсь с обработкой моих персональных
                данных в соответствии с Федеральным законом и Политикой
                конфиденциальности
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-800 to-pink-800 text-white rounded-lg px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
));

ContactSection.displayName = "ContactSection";

export default ContactSection;
