"use client";

import Image from "next/image";
import { useRouter } from "next/compat/router";

export default function Header() {

  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-md">
      <div className="container mx-auto ">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-1" onClick={router?.push("/")}>
            <Image
              src="/logo.png"
              alt="logo"
              width={160}
              height={100}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
