"use client";

import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  image: string;
  Icon: LucideIcon;
  onClick: () => void;
}

export default function ServiceCard({
  title,
  image,
  Icon,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <Icon className="w-8 h-8 mb-3 text-blue-400" />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
}
