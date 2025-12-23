import styles from '../styles/ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p>${product.price}</p>
    </div>
  );
}
