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
      </main>
    </Layout>
  );
}
