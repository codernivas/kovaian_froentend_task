import React from "react";
import styles from "./ActivityPanel.module.scss";

interface ActivityPanelProps {
  title: string;
  actionText?: string;
  onActionClick?: () => void;
  children?: React.ReactNode;
}

const ActivityPanel: React.FC<ActivityPanelProps> = ({
  title,
  actionText,
  onActionClick,
  children,
}) => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {actionText && (
          <button className={styles.actionButton} onClick={onActionClick}>
            {actionText}
          </button>
        )}
      </div>
      <div className={styles.content}>
        {children || <p className={styles.noRecords}>No records found</p>}
      </div>
    </div>
  );
};

export default ActivityPanel;
