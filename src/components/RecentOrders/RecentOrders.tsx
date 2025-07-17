import React from "react";
import styles from "./RecentOrders.module.scss";
import { MdOutlineRecentActors } from "react-icons/md";
import TitleCard from "../TitleCard/TitleCard";

const orders = [
  { name: "Maxima Smalls", price: "$23.22", status: "Shipping" },
  { name: "Andrew Robocop", price: "$23.76", status: "Shipping" },
  { name: "Minu Xander", price: "$19.76", status: "On Hold" },
  { name: "Lau Baker", price: "$21.00", status: "Shipped" },
  { name: "Ragnar Walls", price: "$55.40", status: "Canceled" },
];

const RecentOrders: React.FC = () => {
  return (
    <div className={styles.orders}>
      <TitleCard icon={MdOutlineRecentActors} label="Recent Orders" />
      {orders.map((order, i) => (
        <div key={i} className={styles.row}>
          <div>{order.name}</div>
          <div>{order.price}</div>
          <div>
            <div
              className={`${styles.status} ${
                styles[order.status.toLowerCase()]
              }`}
            >
              {order.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentOrders;
