import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Using icons for a cleaner look
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  // State for individual dropdown sections
  const [openSections, setOpenSections] = useState({});
  // State to toggle the entire sidebar filter visibility
  const [showFilter, setShowFilter] = useState(true);

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section],
    });
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.filterToggleHeader}>
        <h3 className={styles.itemCount}>3425 ITEMS</h3>
        
        {/* Toggle Button */}
        <div 
          className={styles.filterToggle} 
          onClick={() => setShowFilter(!showFilter)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
        >
          {showFilter ? (
            <>
              <FaChevronLeft size={10} /> 
              <span>HIDE FILTER</span>
            </>
          ) : (
            <>
              <FaChevronRight size={10} /> 
              <span>SHOW FILTER</span>
            </>
          )}
        </div>
      </div>

      {/* Conditionally render the filters based on showFilter state */}
      {showFilter && (
        <div className={styles.filterContent}>
          {/* Customizable Filter */}
          <div className={styles.filterGroup}>
            <label className={styles.customizable}>
              <input type="checkbox" /> CUSTOMIZABLE
            </label>
          </div>

          {/* Dropdown Sections */}
          {[
            'Ideal For',
            'Occasion',
            'Work',
            'Fabric',
            'Segment',
            'Suitable For',
            'Raw Materials',
            'Pattern',
          ].map((section) => (
            <div className={styles.filterGroup} key={section}>
              <div
                className={styles.filterHeader}
                onClick={() => toggleSection(section)}
              >
                <span>{section.toUpperCase()}</span>
                <span>{openSections[section] ? '▲' : '▼'}</span>
              </div>
              
              {openSections[section] && (
                <div className={styles.filterOptions}>
                  <p className={styles.allText}>All</p>
                  <button className={styles.unselectLink}>Unselect all</button>
                  <div className={styles.checkboxList}>
                    <label><input type="checkbox" /> Men</label>
                    <label><input type="checkbox" /> Women</label>
                    <label><input type="checkbox" /> Baby & Kids</label>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;