import React from 'react';
import HomeNavbar from './HomeNavbar';
import styles from './HomePage.module.css';
import { HomePictures, pictures} from '../../assets/HomePictures';
import 'bootstrap/dist/css/bootstrap.min.css'
import { products } from '../../assets/HomePictures';
import { FaRegHeart } from "react-icons/fa";
import HomeFooter from './HomeFooter';

const HomePage = () => {
  return (
    <>
      <HomeNavbar />

      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={HomePictures.headphone} alt="Headphones" />
        </div>
        <div className={styles.headerRight}>
          <p className={styles.highlightText}>In the spotlight</p>
          <h1 className={styles.mainText}>Your sound best for your life</h1>
          <p className={styles.descriptionText}>
            These have large ear cups that encompass the ears, providing good sound isolation and often better sound quality.
          </p>
          <button className={styles.shopButton}>
            Shop now <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className={styles.featuresHeading}>
        <h1>Feature's</h1>
      </div>

      <div className={styles.featureSection}>
          <div className={styles.leftSide}>
            <div className={styles.textCover}>
             <div className={styles.backgroundText1}>HEADPHONES</div>
             <div className={styles.backgroundText2}>HEADPHONES</div>
             <div className={styles.backgroundText3}>HEADPHONES</div>
             <div className={styles.backgroundText4}>HEADPHONES</div>
             <div className={styles.backgroundText5}>HEADPHONES</div>
             <img src={HomePictures.hdphone}/>
          </div>  
          
        </div>
         <div className={styles.rightSide}>
          <h2 className={styles.title}>Amazing feature</h2>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Touch Controls</h3>
            <p className={styles.featureDescription}>
              Some headphones have touch-sensitive surfaces for controlling playback.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Sound Quality</h3>
            <p className={styles.featureDescription}>
              This includes considerations like bass response, clarity, and overall audio fidelity.
            </p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Microphone</h3>
            <p className={styles.featureDescription}>
              Built-in microphones enable hands-free calling and voice commands.
            </p>
          </div>
        </div> 
      </div>




      <div className={styles.categorysSection}>
  <h2 className={styles.categorysTitle}>Category</h2>
  <p className={styles.categorysSubtitle}>Can we help you pick a headphone</p>
  <div className={styles.cardContainer}>
    <div className={styles.card}>
      <img src={HomePictures.iphone} alt="Iphone" className={styles.cardImage} />
      <p className={styles.cardTitle}>Iphone</p>
    </div>
    <div className={styles.card}>
      <img src={HomePictures.speaker} alt="Speaker" className={styles.cardImage} />
      <p className={styles.cardTitle}>Speaker</p>
    </div>
    <div className={styles.card}>
      <img src={HomePictures.tablet} alt="Tablet" className={styles.cardImage} />
      <p className={styles.cardTitle}>Tablet</p>
    </div>
    <div className={styles.card}>
      <img src={HomePictures.laptop} alt="Laptop" className={styles.cardImage} />
      <p className={styles.cardTitle}>Laptop</p>
    </div>
    <div className={styles.card}>
      <img src={HomePictures.hdphone} alt="Headphone" className={styles.cardImage} />
      <p className={styles.cardTitle}>Headphone</p>
    </div>
  </div>
</div>



<div className={styles.cardsContainer}>
     
      <div className={styles.promoCard}>
        <img src={HomePictures.camera} alt="Camera Promo" className={styles.promoImage1} />
        <div className={styles.promoContent} >
          <h3 className={styles.promoDiscount} style={{fontWeight:'bold'}}>25% off</h3>
          <p className={styles.promoDescription}>Catch hottest<span style={{fontWeight:'bold'}}> Deals </span> in Cameras category</p>
          <button className={styles.promoButton}>
            Shop now  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                      </svg></button>
        </div>
      </div>

    
      <div className={styles.promoCard}>
        <img src={HomePictures.tablet2} alt="Tablet Promo" className={styles.promoImage2} />
        <div className={styles.promoContent}>
          <h3 className={styles.promoDiscount} style={{fontWeight:'bold'}}>25% off</h3>
          <p className={styles.promoDescription}>Tablets smartphone<br></br><span  style={{fontWeight:'bold'}}> and more</span> </p>
          <span className={styles.promoPrice}>$799</span>
        </div>
      </div>
    </div>




    <div className={styles.container}>
      <h2 className={styles.title}>Top rated product</h2>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <span className={styles.badge} style={{color:'black'}}>Top rated</span>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>{product.price}</p>
            <button className={styles.favoriteButton}><FaRegHeart /></button>
          </div>
        ))}
      </div>
    </div>


    <div className={styles.BannershopContainer}>
      <h2 className={styles.Bannertitle}>Shop product by</h2>
      <div className={styles.BannerproductCard}>
        <img
          src={HomePictures.iphoneBanner}
          alt="Product"
          className={styles.BannerproductImage}
        />
        <div className={styles.BannertextContent}>
          <h3 className={styles.BannerproductTitle}>Define yourself, be different</h3>
          <p className={styles.BannerproductDescription}>
            These have large ear cups that encompass the ears, providing good
            sound isolation and often better sound quality.
          </p>
          <button className={styles.BannershopButton}>Shop now ➔</button>
        </div>
      </div>
    </div>



    <div className={styles.displayWrapper}>
     
      <section className={styles.arrivalSection}>
        <h2 className={styles.arrivalTitle}>New arrival</h2>
        <div className={styles.arrivalGrid}>
          {pictures.map((pictures, index) => (
            <div key={index} className={styles.arrivalCard}>
              <img src={pictures.image} alt={name} className={styles.arrivalImage} key={index}/>
              <h3 className={styles.arrivalName}>{pictures.name}</h3>
              <p className={styles.arrivalDescription}>Headphones come with a variety of features.</p>
              <div style={{display:'flex' , justifyContent:'space-between'}}>
              <div className={styles.arrivalPrice}>{pictures.price}</div>
              <button className={styles.arrivalCartButton}>Add to cart</button></div>
            </div>
          ))}
        </div>
      </section>

    
      <section className={styles.categorySection}>
        <div className={styles.categoryItem1}>
          <img src={HomePictures.earspod} alt="Awesome Airpods" className={styles.categoryImage} />
          <div className={styles.categoryContent}>
            <h3 className={styles.categoryTitle}>Awesome Airpods</h3>
            <p className={styles.categoryDescription}>
              These have large ear cups that encompass the ears, providing good sound.
            </p>
            <button className={styles.categoryShopButton}>Shop now ➔</button>
          </div>
        </div>
        <div className={styles.categoryItem2}>
          
          <div className={styles.categoryContent}>
            <h3 className={styles.categoryTitle}>Smart Watches</h3>
            <button className={styles.categoryShopButton}>Shop now ➔</button>
          </div>
          <img src={HomePictures.watch} alt="Smart Watches" className={styles.categoryImage} />
        </div>
      </section>
    </div>


    <div className={styles.alert}>
      <h2>10% off when playing debit card</h2>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-tag" viewBox="0 0 16 16">
                 <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
                   <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/>
        </svg></p>
    </div>











    <div className={styles.containerA}>
      <div className={styles.textWrapperA}>
        <span className={styles.levelTextA}>Comment level</span>
        <h1 className={styles.titleA}>A new style in your <br /> Ear</h1>
        <div className={styles.statsWrapperA}>
          <div className={styles.statItemA}>
            <h2 className={styles.statNumberA}>4M+</h2>
            <p className={styles.statLabelA}>User's</p>
          </div>
          <div className={styles.statItemA}>
            <h2 className={styles.statNumberA}>153k</h2>
            <p className={styles.statLabelA}>Purchaser</p>
          </div>
          <div className={styles.statItemA}>
            <h2 className={styles.statNumberA}>53k</h2>
            <p className={styles.statLabelA}>Gallery</p>
          </div>
          <div className={styles.statItemA}>
            <h2 className={styles.statNumberA}>2M+</h2>
            <p className={styles.statLabelA}>Feedback</p>
          </div>
        </div>
      </div>
      <div className={styles.imageWrapperA}>
        <img src={HomePictures.promo} alt="Happy user with headphones" className={styles.userImgA} />
      </div>
    </div>
    <HomeFooter/>


    </>
  );
};

export default HomePage;
