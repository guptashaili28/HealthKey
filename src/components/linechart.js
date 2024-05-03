import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "../variables/data";
import { Box } from "@chakra-ui/react";

const LineChart = () => {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData(lineChartData);
    setChartOptions(lineChartOptions);
  }, []);

  return (
    <Box width= "100" height="80">
    <ReactApexChart
      options={chartOptions}
      series={chartData}
      type="area"
      width="100%"
      height="100%"
    />
    </Box>
  );
};

export default LineChart;

