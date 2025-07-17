import RecentOrders from "../../components/RecentOrders/RecentOrders";
import SalesChart from "../../components/Chart/SalesChart/SalesChart";
import DashboardStatCard from "../../components/DashboardStatCard/DashboardStatCard";
import TitleCard from "../../components/TitleCard/TitleCard";
import { BiBarChartSquare } from "react-icons/bi";
import { FaDollarSign, FaUser, FaEye } from "react-icons/fa";
import styles from "./Dashboard.module.scss";
import ResponsiveDonutChart from "../../components/Chart/ResponsiveChart/ResponsiveDonutChart";
import ActivitiesCard from "../../components/ActivitiesCard/ActivitiesCard";
import { HiDocumentReport } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {/* <TitleCard icon={BiBarChartSquare} label="Leads" /> */}
      <div className={styles.stats}>
        <DashboardStatCard
          title="Revenue"
          value="$3,503.26"
          subtitle="+10.5% since last month"
          icon={<FaDollarSign />}
          color="#1677ff"
        />
        <DashboardStatCard
          title="Customers"
          value="34"
          subtitle="-2.8% since last month"
          icon={<FaUser />}
          color="#00b894"
        />
        <DashboardStatCard
          title="Shop Views"
          value="683"
          subtitle="+17.9% since last month"
          icon={<FaEye />}
          color="#6c5ce7"
        />
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <SalesChart />
          <RecentOrders />
        </div>
        <div className={styles.right}>
          
          <div className={styles.cardView}>
            <TitleCard icon={HiDocumentReport} label="Sales Report" />
            <ResponsiveDonutChart />
          </div>

          <ActivitiesCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
