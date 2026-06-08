import './style.css';

import React from 'react';
// Importando os componentes do Swiper React
import { Swiper, SwiperSlide } from 'swiper/react';
// Importando os módulos necessários (Navegação por setas e Paginação por bolinhas)
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Importando os estilos do Swiper (Obrigatório)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = () => { 
  
  const fotosFamilia = [
    { id: 1, url: '/fotos/sorisso.jpg', legenda: 'Momentos inesquecíveis juntos' },
    { id: 2, url: '/fotos/velinha.jpg', legenda: 'Sua presença é o meu abrigo' },
    { id: 3, url: '/fotos/descanso.jpg', legenda: 'Sempre ao seu lado' },
    { id: 4, url: '/fotos/felicidade.jpg', legenda: 'Sorrisos que alimentam a alma' },
    { id: 5, url: '/fotos/painhocachimbo.jpg', legenda: 'Paz e Amor' },
    { id: 6, url: '/fotos/palmas.jpg', legenda: 'Amor que transcende o tempo' },
    { id: 7, url: '/fotos/beijo.jpg', legenda: 'Casal unido pelo amor' },
   ];


  return (
    <div className="gallery-container">
      <h2>Galeria de Memórias</h2>
      <p className="gallery-subtitle">Um registro visual do nosso amor</p>

      <div className="swiper-wrapper-box">
        <Swiper
          // Ativando os módulos instalados
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30} // Espaço entre os slides em pixels
          slidesPerView={1} // Quantos slides aparecem por vez no celular
          navigation={true} // Ativa as setinhas laterais
          pagination={{ clickable: true }} // Ativa as bolinhas clicáveis embaixo
          autoplay={{ delay: 4000, disableOnInteraction: false }} // Passa sozinho a cada 4 segundos
          breakpoints={{
            // Quando a tela for maior que 768px (Computador), mostra 2 slides por vez
            768: {
              slidesPerView: 2,
            },
          }}
          className="mySwiper"
        >
          {fotosFamilia.map((foto) => (
            <SwiperSlide key={foto.id}>
              {/* Aplicando o requisito de Cards com Sombra e Moldura no Carrossel */}
              <div className="gallery-card card-homenagem moldura-foto">
                <img src={foto.url} alt={foto.legenda} className="gallery-img" />
                <div className="gallery-caption">
                  <p>{foto.legenda}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;