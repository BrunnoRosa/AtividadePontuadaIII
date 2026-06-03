import './style.css';
import React from 'react';

const Video = () => {
  return (
    <div className="video-container">
      <h2>Dedicatórias em Vídeo</h2>
      <p className="video-subtitle">Mensagens gravadas que o tempo não apaga</p>

      <div className="video-grid">
        
        {/* OPÇÃO A: Vídeo do YouTube/Vimeo (Embed) */}
        <div className="video-card card-homenagem">
          <h3>Mensagem Especial</h3>
          <p>Um depoimento emocionante para guardar no coração.</p>
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo ID do seu vídeo do YouTube
              title="Dedicatória para os Pais"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* OPÇÃO B: Vídeo Local (Tag <video>) */}
        <div className="video-card card-homenagem">
          <h3>Nossos Momentos</h3>
          <p>Arquivo gravado direto do celular da família.</p>
          <div className="video-responsive">
            <video controls poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600">
              <source src="seu-video-local.mp4" type="video/mp4" /> 
              {/* Para usar local: importe o vídeo no topo e passe na tag src */}
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Video;

