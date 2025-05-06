"use client"; // Indica que este componente se ejecuta en el cliente, necesario para usar hooks como useState

import React, { useState } from "react";
import Image from "next/image";

// Props que recibe el componente desde el padre
interface ProductosCarritoProps {
  precioTotalUnitario: number; // Precio unitario del producto
  precioTotalDescuentoUnitario: number; // Precio original antes del descuento
  contador: number; // Cantidad del producto seleccionada
  aumentarContador: () => void; // Función para aumentar la cantidad
  disminuirContador: () => void; // Función para disminuir la cantidad
}

const ProductosCarrito: React.FC<ProductosCarritoProps> = ({
  precioTotalUnitario,
  precioTotalDescuentoUnitario,
  contador,
  aumentarContador,
  disminuirContador,
}) => {
  const [activo, setActivo] = useState(false); // Controla si el producto está "seleccionado"

  // Calcula el precio total y el precio con descuento multiplicado por la cantidad
  const precioCalculado = precioTotalUnitario * contador;
  const precioDescuentoCalculado = precioTotalDescuentoUnitario * contador;

  return (
    <div className="w-[100%] flex flex-col gap-3">
      {/* Sección de encabezado del carrito */}
      <div className="w-full p-4 border-2 border-gray-300 rounded-2xl">
        <p className="text-2xl font-semibold">Mi carrito (1)</p>
        <div className="w-full flex pt-4">
          {/* Botón de selección global de artículos */}
          <div className="w-[4%] flex items-center space-x-4 justify-center">
            <div
              onClick={() => setActivo(!activo)}
              className={`w-4 h-4 rounded-full cursor-pointer border-2 transition-all duration-300 ${
                activo
                  ? "bg-orange-500 border-orange-700"
                  : "bg-white border-ora"
              }`}
              title={activo ? "Activo" : "Inactivo"}
            ></div>
          </div>

          {/* Enlaces para seleccionar o eliminar todos los artículos */}
          <a
            href="#"
            className="w-auto text-xs pl-4 pr-4 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              if (!activo) setActivo(true);
            }}
          >
            <p>Seleccionar todos los artículos</p>
          </a>

          {/* Separador visual */}
          <div className="bg-gray-400 w-1 h-5"></div>

          <a
            href="#"
            className="w-auto text-xs pl-4 pr-4 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              setActivo(false);
            }}
          >
            <p>Eliminar todos los artículos seleccionados</p>
          </a>
        </div>
      </div>

      {/* Tarjeta del producto en el carrito */}
      <div className="w-full p-4 border-2 border-gray-300 rounded-2xl">
        <div className="w-full flex flex-col md:flex-row items-center md:items-start">
          {/* Checkbox de selección individual */}
          <div className="w-full md:w-[4%] flex justify-center md:justify-start mb-3 md:mb-0">
            <div
              onClick={() => setActivo(!activo)}
              className={`w-4 h-4 rounded-full cursor-pointer border-2 transition-all duration-300 ${
                activo
                  ? "bg-orange-500 border-orange-700"
                  : "bg-white border-ora"
              }`}
              title={activo ? "Activo" : "Inactivo"}
            ></div>
          </div>

          {/* Contenedor del producto */}
          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-4 border-2 border-gray-300 rounded-2xl p-4">
            {/* Imagen del producto */}
            <div className="min-w-[100px] max-w-[100px] min-h-[100px] max-h-[100px] flex items-center justify-center">
              <Image
                src="/proyector.jpg"
                alt="producto"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>

            {/* Detalles del producto */}
            <div className="flex-1 min-w-[200px] text-center md:text-left">
              <p>Nombre del artículo</p>
              <p>Color silver / 1 thera / 16 ram</p>
              <p>Fecha estimada de entrega</p>

              {/* Precios: actual y con descuento tachado */}
              <div className="flex justify-center md:justify-start items-center">
                <p>${precioCalculado.toFixed(2)}</p>
                <p className="pl-3 line-through text-xs text-gray-500">
                  ${precioDescuentoCalculado.toFixed(2)}
                </p>
              </div>

              <p>Costo de envío</p>
            </div>

            {/* Controles de cantidad y acciones rápidas */}
            <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-3">
              {/* Contador de cantidad */}
              <div className="flex justify-center md:justify-end font-bold">
                <div className="w-6 h-6 bg-gray-300 flex items-center justify-center cursor-pointer">
                  <div
                    className="w-5 h-5 bg-white flex items-center justify-center hover:bg-gray-200"
                    onClick={disminuirContador}
                  >
                    -
                  </div>
                </div>
                <div className="w-5.5 h-6 bg-gray-300 flex items-center justify-center font-normal">
                  {contador}
                </div>
                <div className="w-6 h-6 bg-gray-300 flex items-center justify-center cursor-pointer">
                  <div
                    className="w-5 h-5 bg-white flex items-center justify-center hover:bg-gray-200"
                    onClick={aumentarContador}
                  >
                    +
                  </div>
                </div>
              </div>

              {/* Acciones: agregar a favoritos y eliminar */}
              <div className="flex justify-center md:justify-end gap-2">
                <div
                  className="w-7 h-7 p-0.5 border-2 border-gray-300 rounded-full hover:bg-gray-300"
                  title="Agregar a favoritos"
                >
                  <Image
                    src="/icons8-me-gusta-100.png"
                    alt="estrella"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="w-7 h-7 p-0.5 border-2 border-gray-300 rounded-full hover:bg-gray-300"
                  title="Eliminar del carrito"
                >
                  <Image
                    src="/icons8-basura-100.png"
                    alt="basurero"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosCarrito;
