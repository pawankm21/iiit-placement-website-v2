import Table from "react-bootstrap/Table";
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
  return (
    <Container>
      <h1>Placement Statistics {year} </h1>
      <Container className="row align-middle mb-5">
        <div className="col">
          <Bar {...placementBarGraphByYear(data, year)} />
        </div>
        <div className="col">
          <Pie {...getPlacementPieChartByYear(data, year)} />
        </div>
      </Container>
      <Table striped bordered hover>
        <thead>
          {Object.keys(data[year][0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
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
            <td></td>
            <td></td>
            {Object.values(data[year][data[year].length - 1]).map(
              (value, index) => (
                <td className="fw-bolder" key={index}>
                  {value}
                </td>
              )
            )}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
