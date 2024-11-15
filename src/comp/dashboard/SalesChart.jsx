// ColorfulBarChart.js
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ColorfulBarChart = () => {
  // Sample data with different colors for each bar
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [1500, 2300, 1800, 3500, 2100, 2900, 3800],
        backgroundColor: [
          "#FF6384", // Pink
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Green
          "#9966FF", // Purple
          "#FF9F40", // Orange
          "#FF6384", // Pink again
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue Overview",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ColorfulBarChart;
