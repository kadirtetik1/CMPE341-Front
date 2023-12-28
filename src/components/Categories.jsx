import React, { useState } from 'react';
import styles from './Categories.module.css'

const Categories = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
    <button onClick={toggleDropdown}>
      Categories
    </button>
    {isOpen && (
      <div className={styles.options}>
        <option className={styles.option} value="kategori1">Engineering</option>
        <option className={styles.option} value="kategori2">Architecture</option>
        <option className={styles.option} value="kategori3">Science</option>
        <option className={styles.option} value="kategori3">Software</option>
        <option className={styles.option} value="kategori3">Design</option>
        <option className={styles.option} value="kategori3">Music</option>
        <option className={styles.option} value="kategori3">Photograph And Video</option>
        <option className={styles.option} value="kategori3">Business</option>
      </div>
    )}
  </div>
  )
}

export default Categories
