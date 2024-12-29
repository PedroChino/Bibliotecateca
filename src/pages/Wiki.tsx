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
      </main>
    </Layout>
  );
}
