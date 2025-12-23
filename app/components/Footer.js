import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from our store.</p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@yourstore.com</p>
          <h3>CURRENCY</h3>
          <p className={styles.currency}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
              alt="USD" 
              className={styles.flag} 
            />+ USD
          </p>
          <span>Transactions will be completed in Euros and a currency reference is available on hover.</span>
        </div>
      </div>

      <hr className={styles.separator} />

      <div className={styles.footerBottom}>
        <div className={styles.column}>
          <h3>Your Store</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
              alt="Instagram" 
              className={styles.icon} 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" 
              alt="LinkedIn" 
              className={styles.icon} 
            />
          </div>
          <h3>Accepted Payment Methods</h3>
          <div className={styles.paymentIcons}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" 
              alt="Google Pay" 
              className={styles.icon} 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className={styles.icon} 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/d/da/American_Express_logo_%282018%29.svg" 
              alt="American Express" 
              className={styles.icon} 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
              alt="Apple Pay" 
              className={styles.icon} 
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
              alt="PayPal" 
              className={styles.icon} 
            />
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2023 yourstore.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
