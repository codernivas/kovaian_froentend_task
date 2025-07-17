import React from "react";
import styles from "./NotesSection.module.scss";
import { FaSortDown } from "react-icons/fa";

const NotesSection: React.FC = () => {
  return (
    <div className={styles.notesContainer}>
      <div className={styles.header}>
        <span className={styles.title}>Notes</span>
        <div className={styles.dropdownWrapper}>
          <span className={styles.sortText}>Recent Last</span>
          <FaSortDown className={styles.dropdownIcon} size={14} />
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <input type="text" placeholder="Add a note" className={styles.input} />
      </div>
    </div>
  );
};

export default NotesSection;
