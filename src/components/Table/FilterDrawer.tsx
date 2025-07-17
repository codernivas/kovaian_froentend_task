import React, { useState } from 'react';
import styles from './FilterDrawer.module.scss';

interface FilterProps {
  onClose: () => void;
  onApply: (filters: any) => void;
}

const FilterDrawer: React.FC<FilterProps> = ({ onClose, onApply }) => {
    
  const [status, setStatus] = useState('');
  const [source, setSource] = useState('');
  const [size, setSize] = useState('');

  const applyFilters = () => {
    onApply({ status, source, size });
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h3>Filter Leads</h3>
          <button onClick={onClose}>✖</button>
        </div>

        <div className={styles.body}>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>

          <label>Source</label>
          <select value={source} onChange={(e) => setSource(e.target.value)}>
            <option value="">All</option>
            <option value="Organic">Organic</option>
            <option value="Referral">Referral</option>
          </select>

          <label>Size</label>
          <div className={styles.radioGroup}>
            <label>
              <input type="radio" name="size" value="-270" onChange={() => setSize('-270')} />
              -$270.00
            </label>
            <label>
              <input type="radio" name="size" value="100" onChange={() => setSize('100')} />
              $100.00
            </label>
            <label>
              <input type="radio" name="size" value="" onChange={() => setSize('')} />
              All
            </label>
          </div>
        </div>

        <div className={styles.footer}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={applyFilters}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
