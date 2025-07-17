import React from "react";
import styles from "./ActivitiesCard.module.scss";
import { FiChevronDown } from "react-icons/fi";
import { FiActivity } from "react-icons/fi";
import TitleCard from "../TitleCard/TitleCard";

interface Activity {
  id: number;
  icon: React.ReactNode;
  title: string;
  colorClass: string;
}

const activities: Activity[] = [
  {
    id: 1,
    icon: <span className={styles.ticket}>🎟</span>,
    title: "Correct discount amount",
    colorClass: styles.red,
  },
  {
    id: 2,
    icon: <span className={styles.cart}>🛒</span>,
    title: "Handing the order to the shipping Provider",
    colorClass: styles.yellow,
  },
  {
    id: 3,
    icon: <span className={styles.cart}>💳</span>,
    title: "Payment issue check",
    colorClass: styles.green,
  },

  {
    id: 4,
    icon: <span className={styles.bag}>👜</span>,
    title: "Prepare product presentation",
    colorClass: styles.purple,
  },
  {
    id: 5,
    icon: <span className={styles.clipboard}>📋</span>,
    title: "Review & approve marketing budget",
    colorClass: styles.blue,
  },
];

const ActivitiesCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <TitleCard icon={FiActivity} label="My Activities" />

        <button className={styles.viewAll}>View all</button>
      </div>

      <div className={styles.list}>
        {activities.map((activity) => (
          <div className={styles.item} key={activity.id}>
            <>
            <div className={`${styles.icon} ${activity.colorClass}`}>
              {activity.icon}
            </div>
            <div className={styles.title}>{activity.title}</div>
            <FiChevronDown className={styles.chevron} />
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesCard;
