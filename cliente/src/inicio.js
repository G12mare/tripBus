import React from 'react'; 
import { Link } from 'react-router-dom';
import './inicio.css';
import logo from './images/Logo.png';
import sesion from './images/iniciosesion.png';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const FullScreenGallery = () => {
  const images = [
    { original: "https://media.admagazine.com/photos/62bc5075f395a0eee972b23d/16:9/w_2400,h_1350,c_limit/Hacienda-El-Santuario-portada.jpg" },
    { original: "https://www.elfinanciero.com.mx/resizer/v2/4QXH3KWUHND47HUTNH7F7D7IWQ.jpg?smart=true&auth=0a1286b138b1d45a4b96667a7ffed7a439f15a128ca510fc820d176b67041518&width=1600&height=900" },
    { original: "https://images.pexels.com/photos/16021778/pexels-photo-16021778/free-photo-of-mar-ciudad-paisaje-montanas.jpeg" },
    { original: "https://el-buho.com/wp-content/uploads/2015/04/san-miguel-2.jpg?w=1200" },
    { original: "https://blog.hoteleus.com/wp-content/uploads/2023/11/Cuanto-Dura-Un-Viaje-En-El-Tren-Chepe-3.png" }
  ];

  return (
    <div className="fullscreen-gallery">
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={true}
        showPlayButton={false}
        useBrowserFullscreen={false}
      />
    </div>
  );
};

function Inicio() {
  return (
    <div className="main-content">
      <header className="topbar">
        <div className="topbar-logo">
          <img src={logo} alt="TravelSite Logo" className="logo" />
          <h1>TRIPBUS</h1>
        </div>
        <nav className="topbar-menu">
          <ul>
            <li>
              <Link to="/cliente/src/Promociones/Promociones.js">
                <button className="boton-Promociones">Promociones</button>
              </Link>
            </li>
            <li>
              <Link to="/cliente/src/Paquetes/paquetes.js">
                <button className="boton-Paquetes">Paquetes</button>
              </Link>
            </li>
            <li>
              <Link to="/cliente/src/Recomendaciones/Recomendaciones.js">
                <button className="boton-Recomendaciones">Recomendaciones</button>
              </Link>
            </li>
            <li>
              <Link to="/cliente/src/AcercaDeNosotros/informacion.js">
                <button className="boton-Acerca">Acerca de</button>
              </Link>
            </li>
            <li>
              <Link to="/cliente/src/Usuario/login.js">
                <button className="boton-sesion">
                  <img src={sesion} alt="inicio sesión" className="sesion" />
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <FullScreenGallery />
      <div className="mision-vision">
          <div className="mision">
            <h2>Nuestra Misión</h2>
            <p>Ofrecer a nuestros clientes experiencias de viaje únicas, con servicios de calidad que hagan que cada viaje sea inolvidable.</p>
          </div>
          <div className="vision">
            <h2>Nuestra Visión</h2>
            <p>Ser una empresa líder en el sector turístico, reconocida por su innovación, calidad y compromiso con el bienestar de nuestros clientes y del medio ambiente.</p>
          </div>
        </div>
      <footer className="footer">
        <div className="contacto">
          <h2>Contáctanos</h2>
          <p><strong>Teléfono:</strong> +52 312 123 4567</p>
          <p><strong>Correo Electrónico:</strong> contacto@tripbus.com</p>
        </div>
        <div className="redes-sociales">
          <h2>Síguenos en nuestras redes sociales</h2>
          <ul>
            <li><a href="https://www.facebook.com/tripbus" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/tripbus" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/tripbus" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
        <div className="sugerencias">
          <h2>Sugerencias</h2>
          <p>Si tienes alguna sugerencia o comentario, no dudes en escribirnos. Queremos ofrecerte la mejor experiencia de viaje posible.</p>
        </div>

        <div className="copyright">
          <p>&copy; 2024 TripBus. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Inicio;

