import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

// O componente recebe props para se adaptar dinamicamente
const ParentSection = ({ title, subtitle, text, image, reverse }) => {
  return (
    <div className="section-container">
      <motion.div 
        className={`parent-flex ${reverse ? 'flex-reverse' : ''}`}
        // Configuração da animação do Framer Motion
        initial={{ opacity: 0, y: 50 }}       // Como o elemento começa (invisível e abaixo)
        whileInView={{ opacity: 1, y: 0 }}    // Como ele fica quando aparece na tela
        transition={{ duration: 0.8, ease: "easeOut" }} // Duração e suavidade da transição
        viewport={{ once: true, amount: 0.2 }} // Anima apenas uma vez, quando 20% do bloco estiver visível
      >
        
        {/* Lado do Texto: Usa a classe de Card com Sombra que criamos */}
        <div className="parent-text-block card-homenagem">
          <span className="parent-tag">{subtitle}</span>
          <h3>{title}</h3>
          <p className="parent-text">{text}</p>
        </div>

        {/* Lado da Imagem: Usa a classe de Moldura Digital */}
        <div className="parent-image-block">
          <div className="moldura-foto">
            <img src={image} alt={`Homenagem ao/à ${title}`} className="parent-img" />
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default ParentSection;