import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductsGrid from "../components/ProductsGrid";
import ProductDetails from "../components/ProductDetail";
import type { Product } from "../types/Product";

const HomeView = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [selectedProductDetails, setSelectedProductDetails] =
    useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Efecto para cargar la lista inicial de productos
  useEffect(() => {
    // ... (este código se mantiene igual, ya que carga la lista)
    setIsLoading(true);
    axios
      .get<Product[]>("http://localhost:8080/meli/api/item")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error("Error al cargar la lista de productos:", err);
        setError("No se pudo cargar la lista de productos.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
  };

  // EFECTO DONDE SE HACE EL CAMBIO
  useEffect(() => {
    if (selectedProductId) {
      setIsLoading(true);
      // Aquí está la nueva URL
      // Usas el `id` del producto seleccionado para construir el endpoint
      axios
        .get<Product>(
          `http://localhost:8080/meli/api/item/${selectedProductId}`
        )
        .then((response) => {
          setSelectedProductDetails(response.data);
        })
        .catch((err) => {
          console.error("Error al cargar los detalles del producto:", err);
          setError("No se pudo cargar los detalles del producto.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selectedProductId]); // Se ejecuta cada vez que 'selectedProductId' cambia

  // ... (el resto del componente de renderizado se mantiene igual)

  return (
    <div id="app-container">
      {isLoading ? (
        <div>Cargando...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : selectedProductDetails ? (
        <ProductDetails
          product={selectedProductDetails}
          onBack={() => setSelectedProductDetails(null)}
        />
      ) : (
        <ProductsGrid products={products} onProductClick={handleProductClick} />
      )}
    </div>
  );
};

export default HomeView;
