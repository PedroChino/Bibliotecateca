import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './Wiki.module.css';

export default function Wiki(): JSX.Element {
  return (
    <Layout
      title="Wiki"
      description="Saiba mais sobre a nossa Wiki e explore o conteúdo disponível.">
      <main className={styles.wikiContainer}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Wiki</h1>
          <p className={styles.subtitle}>
            Bem-vindo à Wiki! Explore conteúdos úteis, tutoriais e muito mais.
          </p>
        </section>
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Tópicos em Destaque</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Introdução</h3>
              <p>Descubra como começar a usar nossa plataforma.</p>
            </div>
            <div className={styles.card}>
              <h3>Funcionalidades</h3>
              <p>Explore as principais funcionalidades disponíveis no site.</p>
            </div>
            <div className={styles.card}>
              <h3>Dúvidas Frequentes</h3>
              <p>Encontre respostas para as perguntas mais comuns.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
