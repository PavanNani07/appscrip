import React, { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  // Define state for language dropdown and selected language
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setLanguageDropdown(false); // Close dropdown after selecting a language
  };

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div className={styles.logoSection}>
          <img src="https://via.placeholder.com/50" alt="Logo" className={styles.logoImage} />
          <span className={styles.logoText}>LOGO</span>
        </div>

        <div className={styles.rightSection}>
          <img src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="Search" className={styles.icon} />
          <img src="https://img.icons8.com/ios/50/000000/like.png" alt="Favorites" className={styles.icon} />
          <img src="https://img.icons8.com/ios/50/000000/shopping-bag--v1.png" alt="Cart" className={styles.icon} />
          <img src="https://img.icons8.com/ios/50/000000/user.png" alt="User" className={styles.icon} />
          
          <div className={styles.languageSection}>
            {/* Toggle language dropdown */}
            <div className={styles.language} onClick={() => setLanguageDropdown(!languageDropdown)}>
              {selectedLanguage} ▼
            </div>

            {/* Render language dropdown options if dropdown is active */}
            {languageDropdown && (
              <div className={styles.languageDropdown}>
                <div onClick={() => handleLanguageChange('ENG')}>ENG</div>
                <div onClick={() => handleLanguageChange('SPA')}>SPA</div>
                <div onClick={() => handleLanguageChange('FRE')}>FRE</div>
                <div onClick={() => handleLanguageChange('GER')}>GER</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className={styles.nav}>
        <a href="#shop">SHOP</a>
        <a href="#skills">SKILLS</a>
        <a href="#stories">STORIES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
      </nav>
    </header>
  );
};

export default Header;
