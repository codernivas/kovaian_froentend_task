import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import styles from "./SalesChart.module.scss";
import TitleCard from "../../TitleCard/TitleCard";
import { BiBarChartSquare } from "react-icons/bi";

const data = [
  { week: "Week 1", actual: 3000, projected: 1000 },
  { week: "Week 2", actual: 3000, projected: 2000 },
  { week: "Week 3", actual: 4000, projected: 1000 },
  { week: "Week 4", actual: 2000, projected: 1500 },
  { week: "Week 5", actual: 3000, projected: 2500 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const actual = payload.find((p: any) => p.dataKey === "actual");
    const projected = payload.find((p: any) => p.dataKey === "projected");
    const total = (actual?.value || 0) + (projected?.value || 0);

    return (
      <div className={styles.customTooltip}>
        <div className={styles.label}>{label}</div>
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={`${styles.dot} ${styles.actual}`}></div>
            <span>Actual</span>
          </div>
          <span>${actual?.value.toLocaleString()}</span>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={`${styles.dot} ${styles.projected}`}></div>
            <span>Projected</span>
          </div>
          <span>${projected?.value.toLocaleString()}</span>
        </div>
        <div className={styles.total}>
          <span>Total</span>
          <span>${total.toLocaleString()}</span>
        </div>
      </div>
    );
  }
  return null;
};

const SalesChart: React.FC = () => {
  const [barSize, setBarSize] = useState<number>(32);

  const updateBarSize = () => {
    const width = window.innerWidth;
    if (width < 480) setBarSize(14);
    else if (width < 768) setBarSize(20);
    else if (width < 1024) setBarSize(26);
    else setBarSize(32);
  };

  useEffect(() => {
    updateBarSize(); 
    window.addEventListener("resize", updateBarSize);
    return () => window.removeEventListener("resize", updateBarSize);
  }, []);

  return (
    <div className={styles.salesChartContainer}>
                  <TitleCard icon={BiBarChartSquare} label="Sales" />

      <ResponsiveContainer width="100%" height={390}>
        <BarChart data={data} barSize={barSize} barGap={8}>
          <CartesianGrid vertical={false} stroke="#f1f2f6" />
          <XAxis
            dataKey="week"
            tick={{
              fontSize: window.innerWidth < 768 ? 10 : 12,
            }}
            angle={window.innerWidth < 768 ? -25 : 0}
            dy={window.innerWidth < 768 ? 10 : 0}
            interval="preserveStartEnd"
            
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#636e72" }}
            tickFormatter={(val) => `$${val / 1000}k`}
            axisLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(0,0,0,0.04)" }}
          />
          <Legend
            iconType="circle"
            verticalAlign="top"
            align="right"
            wrapperStyle={{ fontSize: "12px", marginTop: -40 }}
          />
          <Bar
            dataKey="actual"
            stackId="sales"
            fill="#1677ff"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="projected"
            stackId="sales"
            fill="#dfe6e9"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
