import React from "react";
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      className="product-card bg-white rounded-lg overflow-hidden shadow-md transition-all cursor-pointer"
      onClick={() => onClick(product.id)}
    >
      <div className="p-4">
        <img
          src={`data:image/png;base64,${product.imagen}`}
          alt={product.title}
          className="product-image w-full"
        />
      </div>
      <div className="p-4 border-t">
        <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </span>
          <span className="text-gray-500 text-sm ml-1">({product.views})</span>
        </div>
        <p className="text-2xl font-bold text-gray-800">{product.price}</p>
        <p className="text-green-600 text-sm">Envío gratis</p>
      </div>
    </div>
  );
};

export default ProductCard;
