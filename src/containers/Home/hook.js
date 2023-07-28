import { useEffect, useState } from "react";
import { BAR_CHART_COLOR_SET } from "../../utils/constants";

export const useHomeHook = () => {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("https://blob-internal.goblitz.ai/quickdump/sales-data")
      .then((res) => res.json())
      .then((data) => {
        const chartRes = {};
        const tableRows = [];
        data.forEach((val, index) => {
          if (chartRes[val["PRODUCTLINE"]]) {
            chartRes[val["PRODUCTLINE"]] += val.QUANTITYORDERED;
          } else {
            chartRes[val["PRODUCTLINE"]] = val.QUANTITYORDERED;
          }
          tableRows.push({
            id: index + 1,
            productName: val.PRODUCTCODE,
            category: val.PRODUCTLINE,
            sales: val.SALES,
            customerName: val.CUSTOMERNAME,
            country: val.COUNTRY,
          });
        });
        const finalChartRes = {
          labels: Object.keys(chartRes),
          datasets: [
            {
              data: Object.values(chartRes),
              backgroundColor: BAR_CHART_COLOR_SET,
            },
          ],
        };
        setChartData(finalChartRes);
        setTableData(tableRows);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    chartData,
    tableData,
  };
};
