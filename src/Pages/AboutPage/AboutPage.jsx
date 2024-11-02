import React from 'react';
import styles from './AboutPage.module.css';
import { Aboutpics } from '../../assets/AboutPictures';
import AboutNavbar from './AboutNavbar';

const AboutPage = () => {
  return (<>
  <AboutNavbar />
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Are you university or school for an online partnership?</p>
      </div>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1>Open a Mobile Accessories Store Online</h1>
          <p>Best Tips to Start an Online Business</p>
          <button className={styles.shopButton}>Shop now</button>
        </div>
        <div className={styles.imageSection}>
          <img 
            src={Aboutpics.material} 
            alt="Mobile Accessories" 
            className={styles.image1}
          />
        </div>
      </div>
    </div>






    <div className={styles.container2}>
      <div className={styles.statsBar}>
        <div className={styles.statItem}>
          <h2>870</h2>
          <p>Shops</p>
        </div>
        <div className={styles.statItem}>
          <h2>20,000+</h2>
          <p>Users</p>
        </div>
        <div className={styles.statItem}>
          <h2>260</h2>
          <p>Subscribers</p>
        </div>
        <div className={styles.statItem}>
          <h2>73,990</h2>
          <p>Active</p>
        </div>
      </div>
      <div className={styles.content2}>
        <p className={styles.subheading}>Why choose us</p>
        <h1>Benefits of online buying service with us</h1>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitCard}>
            <h3>Choose teaching</h3>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>24/7 available</h3>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Whiteboard</h3>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>Afterable price</h3>
            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
          </div>
        </div>
      </div>

      
      
    </div>



  <div className={styles.container3}>


    <div className={styles.section2}>
        <div className={styles.imageContainer}>
          <img src={Aboutpics.orderpic} alt="Customer using product" className={styles.image} />
          <div className={styles.iconOverlay}>
            <img src={Aboutpics.material} alt="Icon" className={styles.icon} />
          </div>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.subheading}>Customer your product us</p>
          <h2>Personilized professional online buying on your schedule</h2>
          <p className={styles.description}>
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className={styles.button2}>Get started</button>
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.textContainer}>
          <p className={styles.subheading}>Customer your product us</p>
          <h2>Personilized professional online buying on your schedule</h2>
          <p className={styles.description}>
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className={styles.button2}>Get started</button>
        </div>
        <div className={styles.imageContainer}>
          <img src={Aboutpics.about2} alt="Product display" className={styles.image} />
        </div>
      </div>
    </div>



    <div className={styles.testimonialSection}>
      <h4 className={styles.titleT}>Our testimonial</h4>
      <h2 className={styles.headingT}>What our users say about us</h2>
      <div className={styles.userProfiles}>
        <img src={Aboutpics.user1} alt="User 1" className={styles.userImage1} />
        <img src={Aboutpics.user2} alt="User 2" className={styles.userImage2} />
        <img src={Aboutpics.user3} alt="User 3" className={styles.userImage1} />
      </div>
      <div className={styles.userInfo}>
        <h3>About Monica</h3>
        <p>Student at finance</p>
        <p className={styles.userTestimonial}>
          "This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        </p>
      </div>
    </div>
    
    </>
  );
};

export default AboutPage;
