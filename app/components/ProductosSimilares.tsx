"use client"; // Este archivo se ejecuta del lado del cliente, necesario para ciertos hooks y componentes interactivos

import React from "react";
import Image from "next/image";

const ProductosSimilares: React.FC = () => {
  return (
    <div className="w-full p-4 mt-4 border-2 border-gray-300 rounded-2xl">
      {/* Título de la sección */}
      <p className="pb-2 pl-2 font-semibold">Productos Similares:</p>

      {/* Contenedor de productos en grid responsivo:
          - 2 columnas en móviles
          - 3 columnas en pantallas medianas
          - 6 columnas en pantallas grandes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-2">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 rounded-2xl bg-gray-200 p-2 hover:shadow-xl transition-shadow duration-200 hover:bg-gray-300 hover:border-gray-400"
          >
            {/* Imagen del producto:
                - Asegura una proporción cuadrada con borde y fondo blanco */}
            <div className="w-full h-auto flex justify-center items-center border-2 rounded-2xl overflow-hidden bg-white">
              <Image
                src="/proyector.jpg"
                alt="producto similar"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Contenido textual debajo de la imagen */}
            <div className="mt-2 text-xs">
              {/* Nombre del producto */}
              <p className="font-medium">Nombre de artículo</p>

              {/* Precio actual y precio tachado */}
              <div className="flex items-center">
                <p className="font-semibold">$900.00</p>
                <p className="line-through text-gray-500 text-[10px] ml-2">
                  $1200.00
                </p>
              </div>

              {/* Valoración del producto con estrellas y calificación */}
              <div className="flex items-center justify-between mt-1">
                <div className="flex gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/icons8-estrella-100.png"
                      alt="estrella"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.1</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductosSimilares;
