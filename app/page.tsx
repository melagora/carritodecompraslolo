"use client"; // Indica que este componente se ejecuta del lado del cliente (Client Component)

import { useState } from "react"; // Hook para manejar el estado local
import ResumenPedido from "@/components/ResumenPedido"; // Componente con el resumen de la compra
import ProductosSimilares from "@/components/ProductosSimilares"; // Componente con sugerencias de productos
import ProductosCarrito from "@/components/ProductosCarrito"; // Componente que lista los productos en el carrito

export default function page() {
  // Estado local para manejar la cantidad de un producto
  const [contador, setContador] = useState(1);

  // Precio del producto sin descuento
  const precioUnitario = 900;

  // Precio anterior o con descuento aplicado
  const descuentoUnitario = 1200;

  return (
    <main>
      <div className="w-full p-4">
        {/* Contenedor principal responsive que divide la pantalla en carrito y resumen */}
        <div className="flex flex-col md:flex-row w-full gap-3 items-start">
          {/* Sección: Productos en el carrito */}
          <div className="w-full lg:w-2/3">
            <ProductosCarrito
              precioTotalUnitario={precioUnitario} // Precio actual del producto
              precioTotalDescuentoUnitario={descuentoUnitario} // Precio antes del descuento
              contador={contador} // Cantidad del producto
              aumentarContador={() => setContador(contador + 1)} // Incrementar cantidad
              disminuirContador={() => setContador(Math.max(1, contador - 1))} // Decrementar cantidad (mínimo 1)
            />
          </div>

          {/* Sección: Resumen del pedido */}
          <div className="w-full lg:w-1/3">
            <ResumenPedido />
          </div>
        </div>

        {/* Sección inferior: sugerencias de productos similares */}
        <div className="mt-4">
          <ProductosSimilares />
        </div>
      </div>
    </main>
  );
}
