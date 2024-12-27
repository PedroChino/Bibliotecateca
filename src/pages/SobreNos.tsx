import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './SobreNos.module.css';

export default function SobreNos(): JSX.Element {
  return (
    <Layout
      title="Sobre Nós"
      description="Saiba mais sobre a nossa história, valores e equipe.">
      <main className={styles.sobreContainer}>
        {/* Seção 1: Cabeçalho */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Sobre Nós</h1>
          <p className={styles.heroSubtitle}>
            Conheça mais sobre nossa jornada e o que nos move.
          </p>
        </section>

        {/* Seção 2: Linha do Tempo */}
        <section className={styles.timelineSection}>
          <h2 className={styles.sectionTitle}>Nossa História</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Fundação</h3>
                <p>Nascemos em 2020 com a missão de organizar bibliotecas ao redor do mundo.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Crescimento</h3>
                <p>Expandimos nossa presença em 2021 com soluções digitais inovadoras.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Futuro</h3>
                <p>Continuamos inovando para facilitar a vida de quem ama livros!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: Valores */}
        <section className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Nossos Valores</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Inovação</h3>
              <p>Buscamos sempre oferecer o que há de mais moderno em tecnologia.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Inclusão</h3>
              <p>Acreditamos que todos devem ter acesso ao conhecimento e cultura.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Compromisso</h3>
              <p>Nosso foco é atender às suas necessidades com qualidade e dedicação.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
