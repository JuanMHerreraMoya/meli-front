import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductsGrid from "./components/ProductsGrid";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import type { Product } from "./types/Product";
import axios from "./api/axios";

function App() {
  const [productos, setProductos] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  // Nuevo estado para los detalles del producto
  const [selectedProductDetails, setSelectedProductDetails] =
    useState<Product | null>(null);

  // Nuevo estado para la carga de los detalles
  const [loadingDetail, setLoadingDetail] = useState(false);

  // useEffect 1: Carga la lista inicial de productos
  useEffect(() => {
    axios
      .get("/item")
      .then((res) => setProductos(res.data))
      .catch((err) => console.error("Error al obtener productos:", err))
      .finally(() => setLoading(false));
  }, []);

  // useEffect 2: Carga los detalles del producto cuando se selecciona uno
  useEffect(() => {
    if (selectedProductId) {
      setLoadingDetail(true);
      axios
        // Hacemos la llamada al endpoint de detalle
        .get(`/item/${selectedProductId}`)
        .then((res) => setSelectedProductDetails(res.data))
        .catch((err) =>
          console.error("Error al obtener detalles del producto:", err)
        )
        .finally(() => setLoadingDetail(false));
    }
  }, [selectedProductId]); // Se ejecuta solo cuando selectedProductId cambia

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setCurrentView("detail");
  };

  const backToHome = () => {
    setCurrentView("home");
    setSelectedProductId(null);
    setSelectedProductDetails(null); // También limpiamos el detalle
  };

  // El renderizado ahora es más robusto
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="container mx-auto py-6 px-4">
        {currentView === "home" ? (
          // Vista de la cuadrícula
          loading ? (
            <p>Cargando productos...</p>
          ) : (
            <ProductsGrid
              products={productos}
              onProductClick={handleProductClick}
            />
          )
        ) : // Vista de detalle
        loadingDetail ? (
          <p>Cargando detalles del producto...</p>
        ) : selectedProductDetails ? (
          <ProductDetail product={selectedProductDetails} onBack={backToHome} />
        ) : (
          // Si la vista es detalle pero no hay producto cargado (ej. error)
          <p>No se pudo cargar el detalle del producto.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
