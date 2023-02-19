import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import {
  placementBarGraphByYear,
  getPlacementPieChartByYear,
} from "../../utils/utils";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { BRANCHES } from "../../utils/vars";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
export default function PlacementStatistics({ data, year }) {
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  useEffect(() => {
    if (Object.keys(data[year][0]).length > Object.keys(BRANCHES).length) {
      setIsDataAvailable(true);
    }
  }, [data, year]);
  const PIECHART = <Pie {...getPlacementPieChartByYear(data, year)} />;
  const BARGRAPH = <Bar {...placementBarGraphByYear(data, year)} />;
  return (
    <Container>
      <h1>Placement Statistics {year} </h1>
      {isDataAvailable ? (
        <Container className="row align-middle mb-5">
          <div className="col">{PIECHART}</div>
          <div className="col">{BARGRAPH}</div>
        </Container>
      ) : (
        <></>
      )}

      <Table striped bordered hover responsive>
        <thead>
          <tr>

          {Object.keys(data[year][0]).map((key, index) => (
            <th key={index}>{key}</th>
            ))}
            </tr>
        </thead>
        <tbody>
          {data[year].slice(1, -1).map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
          <tr>
  
            {Object.values(data[year][data[year].length - 1]).map(
              (value, index) => (
                <td className="fw-bolder" key={index}>
                  {value!="Total"?value:""}
                </td>
              )
            )}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
