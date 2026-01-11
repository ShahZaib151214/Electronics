import React from 'react';
import styles from './ElectronicsPage.module.css';
import ElectronicsNavbar from './ElectronicsNavbar';
import { products } from '../../assets/HomePictures';
import { FaRegHeart } from "react-icons/fa";

const ElectronicsPage = () => {
  return (
    <>
      <ElectronicsNavbar />
      <div className={styles.container}>
        <h1 className={styles.title}>All Electronics</h1>
        <div className={styles.productGrid}>
          {products.map((product) => (
             <div className={styles.productCard} key={product.id}>
                 <span className={styles.badge}>Top rated</span>
                 <img src={product.image} alt={product.name} className={styles.productImage} />
                 <h3 className={styles.productName}>{product.name}</h3>
                 <p className={styles.productPrice}>{product.price}</p>
                 <button className={styles.favoriteButton}><FaRegHeart /></button>
             </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ElectronicsPage;
