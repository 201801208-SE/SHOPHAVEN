import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="info">
      <div className="content">
        <div className="head">
          <h1>Favourite Brands & Hottest Trends</h1>
          <p>Great deals, Big Discounts and many more</p>

          <Link to="/products">
            <button>Shop now</button>
          </Link>
        </div>
      </div>
      <div className="pic"></div>
    </div>
  );
}
