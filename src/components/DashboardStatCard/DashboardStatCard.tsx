import React from 'react';
import styles from './DashboardStatCard.module.scss';

interface DashboardStatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
}

const DashboardStatCard: React.FC<DashboardStatCardProps> = ({ title, value, subtitle, icon, color }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className={styles.content}>
        <h4>{title}</h4>
        <h2>{value}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default DashboardStatCard;
