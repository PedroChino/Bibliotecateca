import React, { useState } from 'react';
import Layout from '@theme/Layout';
import './Biblioteca.css';

type Livro = {
  imagem: string;
  titulo: string;
  resumo: string;
};

const livros: Livro[] = [
  { imagem: './img/img1.webp', titulo: 'Journey Beyond the Stars', resumo: 'Em um futuro distante, a humanidade enfrentará a maior das aventuras: explorar além dos confins do nosso sistema solar. Uma corajosa tripulação embarca em uma missão ousada para descobrir novos mundos e desvendar os mistérios do universo. Entre nebulosas radiantes e galáxias distantes, o livro narra desafios épicos, encontros alienígenas e a luta pela sobrevivência em territórios desconhecidos. "Journey Beyond the Stars" é uma celebração da coragem e do espírito humano de exploração, levando o leitor a uma jornada inesquecível entre as estrelas.' },
  { imagem: './img/img2.webp', titulo: 'Kingdom of Ash and Flame', resumo: 'No coração de um reino devastado pela guerra e cercado por montanhas sombrias, ergue-se um castelo marcado pela chama e pela destruição. O dragão ancestral, guardião do fogo eterno, desperta de seu sono secular para proteger os segredos de um poder antigo que ameaça cair em mãos erradas. "Kingdom of Ash and Flame" é uma história épica de coragem, traição e magia, onde heróis improváveis precisam enfrentar seus próprios medos para salvar o reino das sombras e da destruição total.' },
  { imagem: './img/img3.webp', titulo: 'The Art of Flavor', resumo: 'Descubra a magia dos sabores neste livro de culinária que celebra a diversidade dos ingredientes frescos e naturais. "The Art of Flavor" é uma viagem gastronômica que combina receitas criativas com técnicas inovadoras para realçar o melhor de cada ingrediente. Com dicas sobre harmonização de sabores e apresentação, este livro é um guia indispensável para chefs experientes e iniciantes que desejam transformar refeições simples em verdadeiras obras de arte.' },
  { imagem: './img/img4.webp', titulo: 'Whispers in the Dark', resumo: 'Quando a escuridão sussurra, ninguém está a salvo. Este livro de terror psicológico conduz o leitor a uma floresta densa e sombria, onde realidades se misturam e o medo assume formas impossíveis de ignorar. No coração dessa escuridão, um olho vigilante observa e manipula os pensamentos de quem ousa se aventurar. "Whispers in the Dark" explora os limites da sanidade, o poder da sugestão e os segredos enterrados na mente humana. Prepare-se para enfrentar seus piores medos – eles podem estar mais próximos do que você imagina.' },
  { imagem: './img/img5.webp', titulo: 'The Skys Secret', resumo: 'Em um mundo cheio de cores e magia, uma baleia curiosa embarca em uma aventura para desvendar um grande mistério: o segredo do céu. Ao longo de sua jornada, ela encontra amigos encantadores, como estrelas dançantes, arco-íris falantes e nuvens brincalhonas, que a ajudam a entender a beleza e os mistérios do mundo ao seu redor. "The Skys Secret" é uma história repleta de imaginação, amizade e lições sobre curiosidade e empatia, perfeita para encantar crianças de todas as idades.' },
  { imagem: './img/img6.webp', titulo: 'Heroes of Tomorrow', resumo: 'Num futuro onde o destino do planeta está constantemente em risco, surge uma nova geração de heróis com poderes incríveis e coragem inabalável. Unidos por um propósito comum, eles enfrentam vilões formidáveis e forças que ameaçam a existência da humanidade. Cada herói traz consigo uma história única, habilidades extraordinárias e o compromisso de lutar pelo bem maior. "Heroes of Tomorrow" é uma banda desenhada repleta de ação, drama e trabalho em equipe, mostrando que, juntos, até os maiores desafios podem ser superados.' },
  { imagem: './img/img7.webp', titulo: 'The Veil of Addiction', resumo: 'Este livro explora o turbilhão psicológico de uma pessoa presa nas garras do vício em drogas e sua luta para recuperar o controle da própria vida. Através de uma narrativa profundamente introspectiva e impactante, "The Veil of Addiction" desvenda os efeitos devastadores do vício na mente, na identidade e nos relacionamentos. Com um olhar sensível e realista, esta obra é um testemunho de resiliência, esperança e a dolorosa jornada para atravessar o véu do vício e encontrar a luz da recuperação.' },
  { imagem: './img/img8.webp', titulo: 'The Art of Advocacy', resumo: 'Nesta obra fascinante, acompanhamos uma advogada especializada em galerias de arte, cuja abordagem criativa e única transforma os tribunais em verdadeiros palcos de expressão artística. Unindo sua paixão por justiça e arte, ela utiliza técnicas inovadoras, metáforas visuais e narrativas cativantes para resolver casos complexos e desafiadores. "The Art of Advocacy" é uma celebração do poder da criatividade no sistema jurídico, mostrando como a arte pode ser uma poderosa aliada na busca pela verdade e justiça.' },
  { imagem: './img/img9.webp', titulo: 'Echoes of the Infinite', resumo: '"Echoes of the Infinite" mergulha nas profundezas do espaço-tempo e explora as teorias fascinantes que moldam nossa compreensão do universo. Com uma narrativa envolvente, o livro apresenta as complexidades da relatividade, a misteriosa natureza dos buracos negros e as possibilidades infinitas do multiverso. De forma acessível, ele convida o leitor a refletir sobre questões fundamentais: o que é o tempo? O que está além do universo conhecido? Uma jornada através de ciência, filosofia e imaginação que desafia tudo o que sabemos sobre a realidade.' },
  { imagem: './img/img10.webp', titulo: 'Echoes of the Infinite', resumo: 'Este livro oferece uma abordagem inovadora para explorar as conexões entre a mente, o corpo e o universo, utilizando conceitos do espaço-tempo como metáforas para o processo de cura. "Echoes of the Infinite" apresenta técnicas terapêuticas e reflexões profundas, ajudando os leitores a navegar pelos desafios emocionais e a encontrar equilíbrio. Combinando ciência, filosofia e práticas de autocuidado, é um guia para redescobrir seu lugar no cosmos e alcançar um bem-estar duradouro.' },
];

const Biblioteca: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResumo, setSelectedResumo] = useState('');

  const handleOpenModal = (resumo: string) => {
    setSelectedResumo(resumo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedResumo('');
  };

  return (
    <Layout title="Biblioteca">
      <div className="biblioteca-container">
        <h1>Bem-vindo à Biblioteca</h1>
        <div className="livros-grid">
          {livros.map((livro, index) => (
            <div
              className="livro-card"
              key={index}
              onClick={() => handleOpenModal(livro.resumo)}
            >
              <img src={livro.imagem} alt={livro.titulo} />
              <div className="overlay">
                <p className="typing">{livro.titulo}</p>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Resumo do Livro</h2>
              <p>{selectedResumo}</p>
              <button onClick={handleCloseModal} className="close-modal-button">
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Biblioteca;
