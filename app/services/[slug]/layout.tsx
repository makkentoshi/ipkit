import React from "react";

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="service-layout">
      <header className="service-header">
        {/* Можно добавить навигацию, лого, иконку или любую другую информацию */}
      </header>
      <main className="service-content">{children}</main>
    </div>
  );
}