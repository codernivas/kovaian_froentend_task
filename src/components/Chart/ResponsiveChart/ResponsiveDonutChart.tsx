import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./ResponsiveDonutChart.module.scss";


ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Electronics", "Clothing", "Home Decor", "Sports"],
  datasets: [
    {
      label: "Category Sales",
      data: [300, 200, 100, 150],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right" as const,
labels: {
            color: "#A1A9B8",
          },
    },
  },
};

const ResponsiveDonutChart: React.FC = () => {
  return (
    <div className={styles.chartWrapper}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ResponsiveDonutChart;
