import React from 'react';
import styles from './LoginPage.module.css';
import { Loginpics } from '../../assets/LoginPicture';
import LoginNavbar from './LoginNavbar';



const LoginPage = () => {
  return (
    <div className={styles.loginContainer} style={{ backgroundImage: `url(${Loginpics.background})` }}>
      <div className={styles.loginBox}>
        <LoginNavbar/>

        <div className={styles.content}>
          <div className={styles.formContainer}>
            <div className={styles.tabs}>
              <span className={styles.signIn}>Sign in</span>
              <span className={styles.signUp}>Sign up</span>
            </div>
            <form className={styles.form}>
              <input type="text" placeholder="Username" className={styles.input} />
              <input type="password" placeholder="Password" className={styles.input} />
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <a href="#" className={styles.forgotPassword}>Forgot password</a>
              <button type="submit" className={styles.loginButton}>Login</button>
              </div>
            </form>
            <div className={styles.orContainer}>
                <div style={{display:'flex',gap:'20px',justifyContent:'space-between'}}>
                    <hr style={{width:'12vw'}}/>
                   <span>OR</span>
                   <hr style={{width:'13vw'}}/>
                </div>
              <div className={styles.socialIcons}>
                <img src={Loginpics.google} alt="Google" className={styles.icon} />
                <img src={Loginpics.facebook} alt="Facebook" className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={Loginpics.material} alt="Products" className={styles.productImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
