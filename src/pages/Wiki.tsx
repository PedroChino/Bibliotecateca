import React from 'react';
import Layout from '@theme/Layout';
import styles from './Wiki.module.css';

export default function Wiki(): JSX.Element {
  return (
    <Layout
      title="Wiki"
      description="Bem-vindo à Wiki do projeto BibliotecaTeca!">
      <main className={styles.wikiContainer}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Wiki da BibliotecaTeca</h1>
          <p className={styles.subtitle}>
            Bem-vindo à Wiki do projeto <strong>BibliotecaTeca</strong>! Esta documentação cobre todas as funcionalidades disponíveis no sistema.
          </p>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Índice</h2>
          <ul>
            <li><a href="#página-inicial-index">Página Inicial (Index)</a></li>
            <li><a href="#biblioteca">Biblioteca</a></li>
            <li><a href="#sobre-nós">Sobre Nós</a></li>
            <li><a href="#wiki">Wiki</a></li>
          </ul>
        </section>

        <section className={styles.contentSection} id="página-inicial-index">
          <h2 className={styles.sectionTitle}>Página Inicial (Index)</h2>
          <p>
            A página inicial do site BibliotecaTeca apresenta as principais informações do sistema. Esta página contém:
          </p>
          <ul>
            <li>Um <strong>banner</strong> com o título e a descrição do sistema.</li>
            <li>Um <strong>botão de navegação</strong> que leva os usuários diretamente à Biblioteca.</li>
            <li>Uma seção de <strong>funcionalidades principais</strong> que explica os recursos disponíveis.</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
