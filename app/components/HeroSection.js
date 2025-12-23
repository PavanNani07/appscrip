import React from 'react';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
        Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </section>
  );
};

export default HeroSection;
