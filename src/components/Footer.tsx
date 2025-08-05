import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Acerca de</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Trabaja con nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Ayuda</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Políticas de devolución
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Guía de compra
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>Atención al cliente</li>
              <li>help@mercadoclone.com</li>
              <li>(011) 1234-5678</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#">
                <img
                  src="https://placehold.co/30x30"
                  alt="Facebook"
                  className="h-8"
                />
              </a>
              <a href="#">
                <img
                  src="https://placehold.co/30x30"
                  alt="Instagram"
                  className="h-8"
                />
              </a>
              <a href="#">
                <img
                  src="https://placehold.co/30x30"
                  alt="Twitter"
                  className="h-8"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>© 2023 MercadoClone - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
