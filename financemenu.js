import React, { useEffect, useState } from "react";
import { fetchFinanceItems } from "../api/financeAPI";
import "./FinanceMenu.css";

const FinanceMenu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchFinanceItems().then((data) => setItems(data));
  }, []);

  return (
    <div className="finance-menu">
      {items.map((item, index) => (
        <div className="finance-item" key={index}>
          <span className="finance-name">{item.name}</span>
          <span className="finance-value">{item.value}</span>
          <span className={`finance-change ${item.change.startsWith("+") ? "up" : "down"}`}>
            {item.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FinanceMenu;
