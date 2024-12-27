import React from 'react';
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
            Conheça mais a nossa equipa e o que nos move.
          </p>
        </section>

        {/* Seção 2: Linha do Tempo */}
        <section className={styles.timelineSection}>
          <h2 className={styles.sectionTitle}>Nossa História</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Os Nossos Livros</h3>
                <p>
                  Descubra um mundo de histórias e conhecimento através dos nossos livros. Na nossa página dedicada, 
                  você encontrará catálogos dinâmicos que permitem explorar cada título em detalhe e resumos das obras.
                  Seja um ávido leitor ou alguém à procura de inspiração, garantimos que a nossa coleção tem algo especial para você.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>Mentes Criativas</h3>
                <p>
                  Deixe-se inspirar pelas criações dos nossos talentosos profissionais artísticos. Aqui, celebramos a criatividade 
                  e incentivamos você a dar vida às suas próprias ideias. Aprenda com exemplos e técnicas de escritores experientes 
                  que compartilham suas jornadas criativas conosco. Nosso objetivo é despertar o autor que existe em você.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>A Nossa Equipa</h3>
                <p>
                  Conheça a equipe por trás deste projeto. Somos um grupo de 3 escritores, apaixonados por literatura, tecnologia e criatividade, 
                  unidos pelo desejo de criar um espaço que conecta leitores e escritores. Acreditamos no poder transformador das histórias 
                  e estamos aqui para dar vida às suas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3: Valores */}
        <section className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>The Dream Team</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Chines</h3>
              <p>
                Um escritor chines com falta de interesse por fazer uma tradução de jeito(Racista).
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Lisboeta</h3>
              <p>
                O prodigio da escrita que escreve tudo o que lhe vem ha cabeça e só deus sabe o porque do livro ficar bom.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3>Rusha</h3>
              <p>
                Morto no campo de batalha ucraneano mas notavel pelos seus livros diferenciados.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}