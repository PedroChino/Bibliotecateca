import React from 'react';
import Layout from '@theme/Layout';
import './Biblioteca.css';

type Livro = {
  imagem: string;
  resumo: string;
};

const livros: Livro[] = [
  { imagem: './img/img1.webp', resumo: 'Resumo do Livro 1' },
  { imagem: './img/img2.webp', resumo: 'Resumo do Livro 2' },
  { imagem: './img/img3.webp', resumo: 'Resumo do Livro 3' },
  { imagem: './img/img4.webp', resumo: 'Resumo do Livro 4' },
  { imagem: './img/img5.webp', resumo: 'Resumo do Livro 5' },
  { imagem: './img/img6.webp', resumo: 'Resumo do Livro 6' },
  { imagem: './img/img7.webp', resumo: 'Resumo do Livro 7' },
  { imagem: './img/img8.webp', resumo: 'Resumo do Livro 8' },
  { imagem: './img/img9.webp', resumo: 'Resumo do Livro 9' },
  { imagem: './img/img10.webp', resumo: 'Resumo do Livro 10' },
];

const Biblioteca: React.FC = () => {
  return (
    <Layout title="Biblioteca">
      <div className="biblioteca-container">
        <h1>Bem-vindo à Biblioteca</h1>
        <div className="livros-grid">
          {livros.map((livro, index) => (
            <div className="livro-card" key={index}>
              <img src={livro.imagem} alt={`Livro ${index + 1}`} />
              <div className="resumo">
                <p>{livro.resumo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Biblioteca;
