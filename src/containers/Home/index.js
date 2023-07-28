import React from "react";
import BarChart from "../../components/BarChart";
import CustomTable from "../../components/Table";
import { useHomeHook } from "./hook";
import "./style.css";
import Loader from "../../components/Loader";

const Home = () => {
  const { loading, chartData, tableData } = useHomeHook();

  if (loading) return <Loader />;

  return (
    <div className="home-container">
      <div>
        <BarChart chartData={chartData} />
      </div>
      <div>
        <h2>Table</h2>
        <h5>Sales by product</h5>
        <CustomTable rows={tableData} />
      </div>
    </div>
  );
};

export default Home;
