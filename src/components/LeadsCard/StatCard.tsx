import React, { useEffect, useState } from "react";
import styles from "./StatCard.module.scss";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";

interface StatCardProps {
  title: string;
  value: number;
  percentage: number;
  isPositive?: boolean;
  icon: React.ReactNode;
  iconBgColor?: string;
  timeFrame?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  percentage,
  isPositive = true,
  icon,
  iconBgColor = "#e6f9f0",
  timeFrame = "this month",
}) => {

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 480);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
  };
  const isMobile = useIsMobile();

  return (
    <div className={isMobile ? styles["card-mobile"] : styles.card}>
      {isMobile ? (
        <>
          <div
            className={styles.iconContainer}
            style={{ backgroundColor: iconBgColor }}
          >
            {icon}
          </div>
          <div className={styles.content}>
            <span className={styles.title}>{title}</span>
            <div className={styles.value}>{value.toLocaleString()}</div>
          </div>
          <span className={styles.divider}></span>

          <div className={styles.footer}>
            <div>
              <span
                className={`${styles.arrowIcon} ${
                  isPositive ? styles.positive : styles.negative
                }`}
              >
                {isPositive ? <IoMdTrendingUp size={20}/> : <IoMdTrendingDown size={20}/>}
              </span>
              <span
                className={`${styles.percentage} ${
                  isPositive ? styles.positive : styles.negative
                }`}
              >
                {isPositive ? "+" : "-"}
                {Math.abs(percentage).toFixed(2)}%
              </span>
            </div>

            <span className={styles.footerText}>{timeFrame}</span>
          </div>
        </>
      ) : (
        <>
          <div className={styles.header}>
            <span className={styles.title}>{title}</span>
            <div
              className={styles.iconContainer}
              style={{ backgroundColor: iconBgColor }}
            >
              {icon}
            </div>
          </div>
          <div className={styles.value}>{value.toLocaleString()}</div>
          <div className={styles.footer}>
            <span
              className={`${styles.arrowIcon} ${
                isPositive ? styles.positive : styles.negative
              }`}
            >
                {isPositive ? <IoMdTrendingUp size={20}/> : <IoMdTrendingDown size={20}/>}
            </span>
            <span
              className={`${styles.percentage} ${
                isPositive ? styles.positive : styles.negative
              }`}
            >
              {isPositive ? "+" : "-"}
              {Math.abs(percentage).toFixed(2)}%
            </span>
            <span className={styles.footerText}>{timeFrame}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default StatCard;
