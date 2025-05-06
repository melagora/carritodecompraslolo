// Define una interfaz para los props del botón, extendiendo todas las props nativas de un botón HTML
interface ButtonProp extends React.ComponentPropsWithoutRef<"button"> {
  label: string; // Propiedad personalizada obligatoria que define el texto dentro del botón
}

// Componente funcional que representa un botón reutilizable
const Button: React.FC<ButtonProp> = ({ label, className = "", ...rest }) => {
  // Clases CSS por defecto aplicadas al botón (estilos, hover, foco, animaciones, etc.)
  const defaultClasses =
    "w-full h-13 mt-4 bg-yellow-400 hover:bg-yellow-700 font-semibold uppercase text-xl py-2 px-4 rounded-2xl transition duration-300 ease-in-out transform hover:scale-102 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-md cursor-pointer";

  // Combina las clases por defecto con las que se pasen por props
  const combinedClasses = `${defaultClasses} ${className}`;

  // Renderiza el botón, propagando cualquier otra prop (como onClick, disabled, etc.)
  return (
    <button className={combinedClasses} {...rest}>
      {label} {/* Texto del botón */}
    </button>
  );
};

export default Button;
