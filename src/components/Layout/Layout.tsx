

import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import TopNavbar from '../TopNavbar/TopNavbar';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.layout}>
      <Sidebar
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
        isMobile={isMobile}
        drawerOpen={drawerOpen}
        onToggleDrawer={() => setDrawerOpen(!drawerOpen)}
        onCloseDrawer={() => setDrawerOpen(false)}
      />
      <TopNavbar  />
      <main
        className={styles.mainContent}
        style={{
          marginLeft: isMobile ? 0 : isCollapsed ? 60 : 240,
          marginTop: 60,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
