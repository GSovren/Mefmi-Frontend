
import React from 'react'
import { Bar, Doughnut, Line } from "react-chartjs-2";

function BarChart({ data, selectedCountry, selectedMetric }) {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Country Data",
        data: data.map((item) => item.value), // or your data field
        backgroundColor: data.map((item) => {
          if (
            (selectedCountry && item.name === selectedCountry) ||
            (selectedMetric && item.public_debt === selectedMetric)
          ) {
            return "red";
          }
          return "blue"; // default color
        }),
      },
    ],
  };

  return <Bar data={chartData} />;
}
