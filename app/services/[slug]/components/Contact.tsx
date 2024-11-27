"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const contactSchema = z.object({
  firstName: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  lastName: z.string().min(2, "Фамилия должна содержать минимум 2 символа"),
  phone: z.string().regex(/^\+?[0-9]{10,12}$/, "Введите корректный номер телефона"),
  email: z.string().email("Введите корректный email адрес"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласие на обработку персональных данных",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });



  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="contact-card w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="contact-title text-3xl font-bold text-white mb-8 text-center">
          Свяжитесь с нами
        </h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="form-group">
            <input
              type="text"
              {...register("firstName")}
              placeholder="Имя"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              {...register("lastName")}
              placeholder="Фамилия"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="tel"
              {...register("phone")}
              placeholder="Телефон"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group flex items-start gap-3">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-1.5 h-4 w-4 rounded border-gray-600 text-blue-500 focus:ring-blue-500"
            />
            <label className="text-sm text-gray-300">
              Нажимая "Отправить", я соглашаюсь с обработкой моих персональных
              данных в соответствии с Федеральным законом и Политикой
              конфиденциальности
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-400 text-sm">{errors.consent.message}</p>
          )}

          <button
            type="submit"
            className="submit-button w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 transition-colors"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}