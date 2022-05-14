import ReactApexChart from "react-apexcharts";
import { useEffect, useState } from "react";
import { fetchPieChart } from "../../helpers/fetchData";

function PieChart() {
  useEffect(() => {
    const data = fetchPieChart();
    var labels = [];
    var series = [];
    data.map((item) => {
      labels.push(" " + item.name + " - " + item.value + " ");
      series.push(item.percent);
    });
    setLabel(labels);
    setSeries(series);
  }, []);
  const [label, setLabel] = useState([]);
  const [series, setSeries] = useState([]);
  return (
    <>
      <ReactApexChart
        options={{
          labels: label,
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 320,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        }}
        type="pie"
        series={series}
        height="380"
      />
    </>
  );
}

export default PieChart;
