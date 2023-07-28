import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total products sold by category",
            },
            legend: {
              display: false,
            },
          },
          aspectRatio: 1.3,
        }}
      />
    </div>
  );
};

export default BarChart;
