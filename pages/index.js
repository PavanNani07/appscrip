import React, { useEffect, useState } from 'react';
import Header from '../app/components/Header';
import HeroSection from '../app/components/HeroSection';
import Footer from '../app/components/Footer';
import Sidebar from '../app/components/Sidebar';
import ProductGrid from '../app/components/ProductGrid';
import styles from '../app/styles/page.module.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <div className={styles.mainContent}>
        <Sidebar />
        <ProductGrid products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
