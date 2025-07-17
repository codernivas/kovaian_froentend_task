import React, { useState } from "react";
import styles from "./EmailPanel.module.scss";
import ActivityPanel from "../ActivityPanel/ActivityPanel";

const EmailsPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Mail");
  const tabs = ["Mail", "Draft", "Scheduled"];

  return (
    <ActivityPanel title="Emails" actionText="ComposeEmail">
      <div className={styles.emailTabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.activeTab : ""
            }`}
            onClick={() => {setActiveTab(tab);console.log(`Switched to ${tab} tab`)}}
          >
            {tab}
          </button>
        ))}
      </div>
      <p className={styles.noRecords}>No records found</p>
    </ActivityPanel>
  );
};

export default EmailsPanel;
