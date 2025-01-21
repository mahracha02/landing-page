import React from 'react';
import './FloatingIcons.css'; // Importer le fichier CSS

const FloatingIcons = () => {
  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {/* Cercle WhatsApp */}
      <div className="circle whatsapp">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      {/* Cercle Scroll-Up */}
      <div className="circle scroll-up" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default FloatingIcons;
