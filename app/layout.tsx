import "../styles/globals.css"; // Importación global de estilos con Tailwind o estilos personalizados
import Image from "next/image"; // Componente optimizado para imágenes en Next.js
import logo from "../public/logo.png"; // Logo principal de la empresa
import escudo from "../public/icons8-escudo-60.png"; // Ícono que representa "pago seguro"
import React from "react";

// Metadatos del sitio (para SEO y uso en Next.js con app directory)
export const metadata = {
  title: "Lolo - Carrito de Compras",
  keywords: "carrito de compras, ecommerce, tienda online",
  description: "Tu carrito de compras en LOLO",
};

// Lista de pasos que representan el progreso del usuario en el checkout
const steps = [
  { label: "Carrito", status: "completed" },
  { label: "Pagar", status: "pending" },
  { label: "Completado", status: "pending" },
];

// Función para generar estilos condicionales según el estado del paso
const getStepStyles = (status: string) => ({
  circle: `w-4 h-4 rounded-full ${
    status === "completed" ? "bg-green-500" : "bg-gray-300"
  }`,
  text: `mt-2 text-sm ${
    status === "completed" ? "font-semibold text-black" : "text-gray-600"
  }`,
  line: `${status === "completed" ? "bg-green-500" : "bg-gray-300"}`,
});

// Año dinámico para mostrar en el pie de página
const añoActual = new Date().getFullYear();

// Componente principal de layout que envuelve toda la app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        {/* Encabezado principal con logo, mensaje de seguridad y pasos de compra */}
        <header className="bg-white flex flex-col md:flex-row items-center justify-center text-center md:h-auto py-4">
          {/* Logo principal de la empresa */}
          <div className="pl-4 pr-4 flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo de empresa LOLO"
              width={100}
              height={50}
            />
          </div>

          {/* Línea vertical separadora (visible solo en pantallas md o mayores) */}
          <div className="hidden md:block bg-black w-1 h-10 my-4 md:my-0 md:mx-4"></div>

          {/* Sección de pago seguro (visible solo en md+) */}
          <div className="hidden md:flex w-full md:w-1/2 items-center justify-center md:justify-start pl-4">
            <Image
              src={escudo}
              alt="escudo de pago seguro"
              width={25}
              height={15}
            />
            <p className="text-green-700 pl-2">Pago Seguro</p>
          </div>

          {/* Visualización del progreso en los pasos del checkout */}
          <div className="w-full md:w-3/6 flex items-center justify-center md:justify-end px-4 mt-4 md:mt-0 relative">
            {steps.map((step, index) => {
              const isFirst = index === 0;
              const isLast = index === steps.length - 1;
              const { circle, text, line } = getStepStyles(step.status);

              return (
                <div
                  key={step.label}
                  className="relative flex flex-col items-center mx-4"
                >
                  {/* Línea que conecta con el paso anterior */}
                  {!isFirst && (
                    <div
                      className={`absolute left-[-50%] top-2 w-full h-0.5 ${line}`}
                    ></div>
                  )}
                  {/* Línea que conecta con el siguiente paso */}
                  {!isLast && (
                    <div
                      className={`absolute right-[-50%] top-2 w-full h-0.5 ${line}`}
                    ></div>
                  )}
                  {/* Círculo representando el estado del paso */}
                  <div className={circle}></div>
                  {/* Texto del paso */}
                  <span className={text}>{step.label}</span>
                </div>
              );
            })}
          </div>
        </header>

        {/* Contenido principal de cada página que se renderiza dentro del layout */}
        <main className="flex-grow overflow-y-auto">{children}</main>

        {/* Pie de página con información general y enlaces útiles */}
        <footer className="bg-gradient-to-r from-yellow-400 to-orange-600 text-white p-5 w-full">
          {/* Contenedor con dos columnas: descripción y contacto */}
          <div className="flex flex-col md:flex-row mb-6 px-5 pt-5">
            {/* Columna izquierda con descripción y enlaces */}
            <div className="w-full md:w-1/2 text-start mb-6 md:mb-0">
              <div className="mb-2">
                <Image
                  src={logo}
                  alt="Logo de empresa LOLO"
                  width={100}
                  height={50}
                />
              </div>
              <p className="text-sm">
                compra<b>lolo</b>.com
              </p>
              <p className="text-md pt-4">
                El Marketplace en el cual puedes buscar, comparar y comprar
                productos de Estados Unidos a El Salvador, sin complicaciones y
                sin sorpresas.
              </p>
              {/* Enlaces útiles para el usuario */}
              <div className="flex justify-between pt-4 gap-4 font-semibold">
                <a href="#" className="underline">
                  Atención al cliente
                </a>
                <a href="#" className="underline">
                  Condiciones
                </a>
                <a href="#" className="underline">
                  Preguntas frecuentes
                </a>
              </div>
            </div>

            {/* Columna derecha con información de contacto */}
            <div className="w-full md:w-1/2 flex items-center justify-center text-center px-0 md:pl-4">
              <div>
                <p className="font-bold">CONTACTANOS</p>
                <p>1a Calle Poniente, San Salvador</p>
                <p>El Salvador</p>
                <p>+503 7950-2151</p>
                <p className="font-bold">info@passeioapp.com</p>
              </div>
            </div>
          </div>

          {/* Pie inferior con derechos de autor */}
          <div className="text-center border-t border-white pt-4">
            <p className="text-sm">
              © {añoActual} Lolo. Todos los derechos reservados.
            </p>
            <p className="text-sm">Desarrollado por Lolo Team</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
