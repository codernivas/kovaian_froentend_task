
import StatCard from "../../components/LeadsCard/StatCard";
import Table from "../../components/Table/Table";
import { FiDownload, FiUserCheck, FiTrendingUp, FiUserX } from "react-icons/fi";
import TitleCard from "../../components/TitleCard/TitleCard";
import { BiBarChartSquare } from "react-icons/bi";
import { useState } from "react";
import styles from "./Leads.module.scss"; 

const Leads = () => {
  return (
    <div>
      <TitleCard icon={BiBarChartSquare} label="Leads" />
      <div className={styles.statCardRow}>
        <StatCard
          title="New Leads"
          value={158}
          percentage={17.03}
          isPositive={true}
          icon={<FiDownload color="#007bff" />}
          iconBgColor="#e0f0ff"
          timeFrame="today"
        />
        <StatCard
          title="Follow Up"
          value={29318}
          percentage={6.08}
          isPositive={true}
          icon={<FiUserCheck color="#f2994a" />}
          iconBgColor="#fff3e0"
        />
        <StatCard
          title="Total Closed"
          value={156}
          percentage={15.03}
          isPositive={true}
          icon={<FiTrendingUp color="#fbbc04" />}
          iconBgColor="#fff9e6"
        />
        <StatCard
          title="Lost"
          value={33671}
          percentage={0.03}
          isPositive={false}
          icon={<FiUserX color="#ff4d4f" />}
          iconBgColor="#ffe6e6"
        />
        <StatCard
        title="New Leads"
          value={300}
          percentage={17.03}
          isPositive={true}
          icon={<FiDownload color="#007bff" />}
          iconBgColor="#e0f0ff"
          timeFrame="this month"
        />
      </div>
      <div style={{width:"99%", justifyContent:"center", alignItems:"center"}}>
      <Table />

      </div>
    </div>
  );
};

export default Leads;
