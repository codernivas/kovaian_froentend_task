import React, { useRef, useState } from "react";
import styles from "./AttachmentsSection.module.scss";
import { FaSortDown } from "react-icons/fa";
import { IoIosAttach } from "react-icons/io";

const AttachmentsSection: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.attachmentsContainer}>
      <div className={styles.header}>
        <span className={styles.title}>Attachments</span>
        <div className={styles.attachWrapper} onClick={handleAttachClick}>
          <span className={styles.attachText}>Attach</span>
          <IoIosAttach className={styles.dropdownIcon} size={18} />
        </div>
        <input
          type="file"
          ref={fileInputRef}
          multiple
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      <div className={styles.fileList}>
        {files.length === 0 ? (
          <p className={styles.noAttachments}>No Attachments</p>
        ) : (
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AttachmentsSection;
