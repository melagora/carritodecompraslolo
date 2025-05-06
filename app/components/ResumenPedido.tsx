"use client"; // Este componente es del lado del cliente, necesario para usar hooks como useState

import { useState } from "react";
import Button from "./ButtonPago"; // Componente de botón reutilizable para continuar al pago
import Login from "./LoginModal"; // Componente modal para iniciar sesión

const ResumenPedido = () => {
  // Estado para mostrar u ocultar el modal de login
  const [showLogin, setShowLogin] = useState(false);

  // Función para mostrar el modal
  const handleClick = () => {
    setShowLogin(true);
  };

  // Función para cerrar el modal
  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="w-[100%] border-gray-300 rounded-2xl relative">
      <div className="flex flex-col gap-4">
        {/* Tarjeta 1: Resumen de precios del pedido */}
        <div className="bg-gray-100 p-4 border-2 border-gray-300 rounded-2xl">
          <p className="font-bold text-xl">Resumen de pedido</p>

          {/* Detalles del pedido */}
          <div className="mt-4">
            <div className="flex mb-2 justify-between">
              <p>Total por los artículos</p>
              <p>$ precio</p>
            </div>
            <div className="flex mb-2 justify-between">
              <p>Descuento de los artículos</p>
              <p className="text-red-500">-$ Precio</p>
            </div>
            <div className="flex mb-6 justify-between">
              <p>Envío</p>
              <p>$ Precio</p>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between font-semibold items-center">
              <p className="text-2xl">Subtotal</p>
              <p className="">$ Precio</p>
            </div>
          </div>

          {/* Botón para proceder al pago */}
          <div className="mt-4">
            <Button label="Pagar" onClick={handleClick} />
          </div>
        </div>

        {/* Tarjeta 2: Métodos de pago disponibles */}
        <div className="bg-white p-4 border-2 border-gray-300 rounded-2xl">
          <p className="font-semibold text-center pb-4">
            Algunos de los métodos de pago aceptados
          </p>
          <img
            src="/metodosDePago.png"
            alt="métodos de pago"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Modal para iniciar sesión, se muestra cuando showLogin es true */}
      {showLogin && <Login onClose={closeLogin} />}
    </div>
  );
};

export default ResumenPedido;
