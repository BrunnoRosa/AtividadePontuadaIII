import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ParentSection from './pages/ParentSection';
import Gallery from './pages/Gallery';
import Video from './pages/Video';

function App() {
  // Textos longos guardados em variáveis para organizar o código
  const mensagemMae = `Mãe, obrigado por ser meu porto seguro, minha conselheira e meu maior exemplo de amor incondicional. 
  
  Seus ensinamentos moldaram quem eu sou hoje, e sua força me inspira diariamente a buscar os meus sonhos. Esta página é apenas um pedacinho da minha gratidão por tudo o que você fez e faz por mim. Te amo!`;

  const mensagemPai = `Pai, você é minha referência de integridade, dedicação e sabedoria. 
  
  Obrigado por cada conversa, por cada puxão de orelha na hora certa e por sempre me apoiar nas minhas escolhas. Seu apoio silencioso e seu abraço forte são pilares fundamentais na minha vida. Todo o meu respeito e admiração a você!`;

  return (
    <div>
      <Header />
      
      {/* Container principal com margem para o Header fixo */}
      <main style={{ marginTop: '80px' }}>
        
        {/* Seção Início (Provisória até criarmos o Hero) */}
        <section id="inicio" style={{ height: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0e6df' }}>
          <h1 style={{ fontSize: '3rem', color: '#1D3557' }}>Nossa Família, Nossas Memórias</h1>
          <p style={{ fontSize: '1.2rem', color: '#E63946', fontWeight: 'bold' }}>Uma homenagem cheia de amor</p>
        </section>

        {/* SEÇÃO MÃE */}
        <section id="mae">
          <ParentSection 
            title="Minha Mãe, Meu Amor"
            subtitle="Homenagem à Rainha"
            text={mensagemMae}
            image="src/assets/mainha2.jpg" 
            reverse={false} // Texto na esquerda, imagem na direita
          />
        </section>

        {/* SEÇÃO PAI */}
        <section id="pai">
          <ParentSection
            title="Meu Pai, Meu Herói"
            subtitle="Homenagem ao Exemplo"
            text={mensagemPai}
            image="src/assets/painho.png"
            reverse={true} // Imagem na esquerda, texto na direita (Gera o efeito "Zigue-Zague" elegante)
          />
        </section>

        {/* GALERIA DE MEMÓRIAS */}
        <section id="galeria" style={{ backgroundColor: '#fdfbf7' }}>
        <Gallery />
        </section>

        {/* SEÇÃO VÍDEOS */}
        <section id="videos" style={{ backgroundColor: '#fdfbf7' }}>
          <Video />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;