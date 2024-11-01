import React from 'react';
import styles from './ContactPage.module.css';
import ContactNavbar from './ContactNavbar';
import { contactpics } from '../../assets/ContactPictures';

const ContactPage = () => {
  return (
    <div className={styles.ContactContainer} style={{ backgroundImage: `url(${contactpics.background})` }}>
      <div className={styles.mainsection

      }>
      <div className={styles.navbar}>
         <ContactNavbar />
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactSection2}>
          <div className={styles.contactInfo}>
            <h2>Contact us</h2>
            <p>
              This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </p>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16" style={{marginRight:'20px'}}>
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
           </svg>
              <a href="mailto:kashifhurmat893@gmail.com">kashifhurmat893@gmail.com</a></p>
            <p>Phone: <a href="tel:+923025058413">+92 302 5058 413</a></p>
          </div>
          <div className={styles.formContainer}>
            <h3>We’d love to hear from you!<br />Let’s get in touch</h3>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <input type="text" placeholder="Name" className={styles.input} />
                <input type="text" placeholder="User" className={styles.input} />
              </div>
              <div className={styles.formRow}>
                <input type="email" placeholder="Email" className={styles.input} />
                <input type="tel" placeholder="Phone number" className={styles.input} />
              </div>
              <input type="password" placeholder="Password" className={styles.input} />
              <textarea placeholder="Type here" className={styles.textarea}></textarea>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;
