import React from 'react';
import Layout from '@theme/Layout';
import styles from './Wiki.module.css';

export default function Wiki(): JSX.Element {
  return (
    <Layout
      title="Wiki"
      description="Sistema de Biblioteca - Informações e funcionalidades">
      <main className={styles.wikiContainer}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Sistema de Biblioteca</h1>
          <p className={styles.subtitle}>
            Um sistema simples para gerenciamento de **livros**, **funcionários**, **leitores** e **empréstimos** em uma biblioteca.
          </p>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Funcionalidades</h2>
          <ul>
            <li><strong>Gerenciar Livros</strong></li>
            <li><strong>Gerenciar Funcionários</strong></li>
            <li><strong>Gerenciar Leitores</strong></li>
            <li><strong>Gerenciar Empréstimos</strong></li>
          </ul>
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Pré-requisitos</h2>
          <ul>
            <li><strong>Python 3.8+</strong></li>
            <li>Dependências adicionais podem ser configuradas com <code>pip</code>.</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
