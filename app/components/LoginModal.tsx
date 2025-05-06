"use client"; // Indica que este componente debe ejecutarse del lado del cliente en Next.js

import React from "react";

// Definición de los props que recibe el componente Login
interface LoginProps {
  onClose: () => void; // Función para cerrar el modal
}

// Componente funcional Login (modal de inicio de sesión)
const Login: React.FC<LoginProps> = ({ onClose }) => {
  return (
    // Fondo oscuro semitransparente con desenfoque (modal backdrop)
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm flex justify-center items-center z-50">
      {/* Contenedor del modal */}
      <div className="w-[400px] bg-white p-6 rounded-2xl shadow-lg relative">
        {/* Botón para cerrar el modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
        >
          ×
        </button>

        {/* Título del modal */}
        <h2 className="text-2xl font-bold mb-4 text-pink-700">
          Iniciar sesión
        </h2>

        {/* Campo para el email */}
        <p>Correo electronico:</p>
        <input
          type="email"
          placeholder="aaabbbcccddd@example.com"
          className="w-full mb-3 p-2 border-2 border-gray-300 rounded"
        />

        {/* Campo para la contraseña */}
        <p>Contraseña:</p>
        <input
          type="password"
          placeholder="*****"
          className="w-full mb-3 p-2 border-2 border-gray-300 rounded"
        />

        {/* Enlace para recuperar la contraseña */}
        <div className="flex justify-end items-center mb-4 text-pink-700">
          <p className="hover:underline font-semibold">Recuperar contraseña</p>
        </div>

        {/* Botón para iniciar sesión normal */}
        <button className="w-full mt-2 bg-pink-700 text-white px-4 py-2 rounded hover:bg-pink-900 transition">
          Iniciar sesión
        </button>

        {/* Botón para iniciar sesión con Google */}
        <button className="w-full mt-2 border-2 border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition">
          Iniciar sesión con Google
        </button>

        {/* Enlace para registrarse si no tiene cuenta */}
        <div className="flex justify-center items-center mt-6 gap-3">
          <p>¿No tienes cuenta?</p>
          <p className="text-pink-700 underline font-semibold">Únete</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
