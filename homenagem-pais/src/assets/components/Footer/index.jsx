import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <p className="frase-amor">"O amor de um pai e de uma mãe é o combustível que capacita um ser humano comum a fazer o impossível."</p>
      <div className="creditos">
        <p>&copy; {new Date().getFullYear()} - Desenvolvido com ❤️ por Bruno Rosa</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;