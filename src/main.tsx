import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css"; // <-- ¡Importante! Asegúrate de que esta línea esté aquí

// Busca el elemento con el ID 'root' en el index.html
const rootElement = document.getElementById("root");

if (rootElement) {
  // Crea el root de React y renderiza el componente App
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con id 'root'.");
}
