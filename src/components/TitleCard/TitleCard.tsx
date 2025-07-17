import React from "react";
import styles from "./TitleCard.module.scss";
import { IconType } from "react-icons";

interface TitleCardProps {
  icon: IconType;
  label: string;
 
}

const TitleCard: React.FC<TitleCardProps> = ({ icon: Icon, label }) => {
  return (
    <div className={`${styles.titleItem}`}>
      <Icon className={styles.icon} />
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default TitleCard;
