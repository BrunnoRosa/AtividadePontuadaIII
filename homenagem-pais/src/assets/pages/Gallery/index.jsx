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
  // Lista de imagens temporárias para testes (substitua pelas fotos da sua família depois)
  const fotosFamilia = [
    { id: 1, url: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=800', legenda: 'Momentos inesquecíveis juntos' },
    { id: 2, url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800', legenda: 'Nossas viagens em família' },
    { id: 3, url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800', legenda: 'Gerações unidas pelo amor' },
    { id: 4, url: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=800', legenda: 'Sorrisos que alimentam a alma' },
  ];

  return (
    <div className="gallery-container">
      <h2>Galeria de Memórias</h2>
      <p className="gallery-subtitle">Um registro visual dos nossos melhores momentos</p>

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