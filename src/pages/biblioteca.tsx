import React from 'react';
import Layout from '@theme/Layout';

const Biblioteca: React.FC = () => {
  return (
    <Layout title="Biblioteca">
      <div style={{ padding: '2rem' }}>
        <h1>Bem-vindo à Biblioteca</h1>
        <p>Aqui você pode encontrar recursos organizados e informações importantes.</p>
        <ul>
          <li>
            <a href="/docs/intro">Introdução</a>
          </li>
          <li>
            <a href="/docs/algum-recurso">Algum Recurso</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Biblioteca;
