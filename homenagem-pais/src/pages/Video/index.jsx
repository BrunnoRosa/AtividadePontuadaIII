import './style.css';
import React from 'react';
import videoFamilia from "../../assets/Fotos/depoimento.mp4";
import videoLocal1 from "../../assets/Fotos/casalfeliz.MP4";
import videoLocal2 from "../../assets/Fotos/cortandocabelo.mp4";
import videoPoster from "../../assets/Fotos/dancandocomela.mp4";
import fotoPoster from "../../assets/Fotos/mae.png";

const Video = () => {
  // 1. LISTA DE VÍDEOS (Fácil de adicionar, remover ou alterar)
  const listaDeVideos = [
    {
      id: 1,
      titulo: "Cuidando de quem sempre cuidou de mim",
      descricao: "Um momento especial para guardar no coração.",
      tipo: "local", 
      url: videoLocal2,
    },
    {
      id: 2,
      titulo: "O casal mais lindo do mundo",
      descricao: "Uma homenagem em vídeo para celebrar o amor de vocês.",
      tipo: "local",
      url: videoLocal1
    },
    {
      id: 3,
      titulo: "Nossa família reúnida",
      descricao: "Relembrando os momentos mais especiais juntos.",
      tipo: "local", 
      url: videoFamilia,
      
    },
    {
      id: 4,
      titulo: "Um Lembrança Querida",
      descricao: "Um momento que nunca será esquecido.",
      tipo: "local",
      url: videoPoster,
      poster: fotoPoster,
      
    }
  ];

  return (
    <div className="video-container">
      <h2>Dedicatórias em Vídeo</h2>
      <p className="video-subtitle">Mensagens gravadas que o tempo não apaga</p>

      <div className="video-grid">
        {/* 2. RENDERIZAÇÃO DINÂMICA COM .MAP() */}
        {listaDeVideos.map((video) => (
          <div key={video.id} className="video-card card-homenagem">
            <h3>{video.titulo}</h3>
            <p>{video.descricao}</p>
            
            <div className="video-responsive">
              {/* Condicional: Se o tipo for embed, renderiza iframe, senão renderiza a tag video */}
              {video.tipo === 'embed' ? (
                <iframe
                  src={video.url}
                  title={video.titulo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video controls poster={video.poster}>
                  <source src={video.url} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;