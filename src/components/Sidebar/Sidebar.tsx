import React from "react";
import styles from "./Sidebar.module.scss";
import { FaBars, FaCog } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { BsLayoutSidebar } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";  
import { BiBarChartSquare } from "react-icons/bi";

interface SidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobile: boolean;
  drawerOpen: boolean;
  onToggleDrawer: () => void;
  onCloseDrawer: () => void;
}

const items = [
  { icon: <HiOutlineHome />, label: "Dashboard", path: "/dashboard" },
  { icon: <BiBarChartSquare />, label: "Leads", path: "/leads" },
  { icon: <FaCog />, label: "Settings", path: "/settings" },
];
const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
  isMobile,
  drawerOpen,
  onToggleDrawer,
  onCloseDrawer,
}) => {
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (path: string) => {
    navigate(path);
    if (isMobile) onCloseDrawer();
  };
  return (
    <>
      {/* Mobile top bar */}
      {isMobile && (
        <div className={styles.mobileTopBar}>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src="/assets/logo.png" alt="Logo" className={styles.logo} />
            <p className={styles.logotext}>Kovaion</p>
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
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
            <button className={styles.toggleButton} onClick={onToggleDrawer}>
              <FaBars />
            </button>
          </div>
        </div>
      )}

      <div
        className={`${styles.sidebar} ${
          isMobile
            ? drawerOpen
              ? styles.open
              : styles.closed
            : isCollapsed
            ? styles.collapsed
            : ""
        }`}
      >
        {!isMobile && (
          <div className={styles.header}>
            {!isCollapsed && (
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src="/assets/logo.png"
                  alt="Logo"
                  className={styles.logo}
                />
                <p className={styles.logotext}>Kovaion</p>
              </div>
            )}

            <button className={styles.toggleButton} onClick={onToggleCollapse}>
              <BsLayoutSidebar />
            </button>
          </div>
        )}
        
        <ul className={styles.menu}>
          {items.map((item, idx) => {
const isActive = location.pathname.startsWith(item.path);
            return (
              <li
                key={idx}
                className={`${styles.menuItem} ${
                  isActive ? styles.activeToggle : ""
                }`}
                onClick={() => handleNavigation(item.path)}
              >
                <span className={styles.icon}>{item.icon}</span>
                {!isCollapsed && (
                  <span className={styles.label}>{item.label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {isMobile && drawerOpen && (
        <div className={styles.backdrop} onClick={onCloseDrawer}></div>
      )}
    </>
  );
};

export default Sidebar;
