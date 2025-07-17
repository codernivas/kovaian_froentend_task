import React, { useEffect, useRef, useState } from "react";
import styles from "./TopNavbar.module.scss";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";

const TopNavbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <header className={styles.topNavbar}>
      <div className={styles.right}>
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>
            <IoSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
        <div className={styles.themeToggle} onClick={toggleTheme}>
          <div
            className={`${styles.toggleSwitch} ${
              theme === "dark" ? styles.active : ""
            }`}
          >
            <div className={styles.icon}>
              {theme === "dark" ? <FaMoon /> : <FaSun />}
            </div>
          </div>
        </div>

        <FiHelpCircle className={styles.icon} />
        <div className={styles.notificationWrapper}>
          <FaBell className={styles.icon} />
          <span className={styles.redDot}></span>
        </div>
        <div
          className={styles.profileWrapper}
          ref={dropdownRef}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img src="/assets/user-avatar.png" alt="Profile" />
          <div>
            <p className={styles.name}>User</p>
            <p className={styles.role}>Developer</p>
          </div>
          <IoIosArrowDown />

          {dropdownOpen && (
            <div className={styles.dropdownMenu}>
              <button onClick={handleLogout}>
                <RiLogoutCircleRLine className={styles.logouticon} />
                <p>Logout</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
