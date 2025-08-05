import React, { useState } from "react";
import type { Product } from "../types/Product";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState(product.imagen);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false); // Estado para controlar el popup

  const handleBuyNow = () => {
    setShowPaymentPopup(true); // Mostrar el popup al hacer clic en "Comprar ahora"
  };

  const closePaymentPopup = () => {
    setShowPaymentPopup(false); // Cerrar el popup
  };

  return (
    <div id="product-detail-view">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Volver a productos
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            <div className="mb-4 border rounded-lg overflow-hidden">
              <img
                id="main-product-image"
                src={`data:image/png;base64,${product.imagen}`}
                alt="Imagen principal del producto"
                className="w-full h-auto detail-image"
              />
            </div>
            {/* ... Galería de miniaturas ... */}
          </div>
          <div className="md:w-1/2 p-6 border-l">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <div className="mb-6">
              <p className="text-3xl font-bold text-gray-800 mb-1">
                ${product.price}
              </p>
              {product.price > 20000 ? (
                <span className="text-green-500 text-sm ">Envío Gratis</span>
              ) : (
                <span className="text-red-500 text-sm ">
                  Costo de envío: $15.000
                </span>
              )}
            </div>
            <div className="mb-1">
              <p className="flex items-center mb-2">stock:+{product.stock}</p>
            </div>
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </span>
              <span className="text-gray-500 text-sm ">({product.views})</span>
            </div>
            <div className="flex space-x-2">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
                onClick={handleBuyNow} // Llama a la función para mostrar el popup
              >
                Comprar ahora
              </button>
              <button className="bg-blue-400 text-gray-800 px-6 py-2 rounded-md hover:bg-blue-500 transition-all">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 border-t">
          <div className="flex border-b mb-4">
            <button
              className={`tab px-4 py-2 ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Descripción
            </button>
            <button
              className={`tab px-4 py-2 ${
                activeTab === "specs" ? "active" : ""
              }`}
              onClick={() => setActiveTab("specs")}
            >
              Especificaciones
            </button>
            <button
              className={`tab px-4 py-2 ${
                activeTab === "reviews" ? "active" : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Opiniones
            </button>
          </div>
          <div className={activeTab === "description" ? "" : "hidden"}>
            <p>{product.description}</p>
          </div>
          <div className={activeTab === "specs" ? "" : "hidden"}>
            <p>Especificaciones técnicas del producto: {product.spects}</p>
          </div>
          <div className={activeTab === "reviews" ? "" : "hidden"}>
            <p>Opiniones de clientes.</p>
          </div>
        </div>
      </div>

      {/* Popup de opciones de pago */}
      {showPaymentPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Opciones de Pago</h2>
            <div className="flex flex-col space-y-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Tarjeta de Crédito
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Tarjeta de Débito
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                PayPal
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                onClick={closePaymentPopup} // Cierra el popup
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
