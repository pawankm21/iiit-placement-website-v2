import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { getData } from "../../utils/utils";
import PlacementStatistics from "../../components/placement-statistics";
export default function Placements({ data }) {
  const NAV_LINKS = Object.keys(data).reverse();
  const CHARTS = NAV_LINKS.map((year) => (
    <Tab
      key={year}
      eventKey={year}
      title={year}
      className="text-center"
      mountOnEnter={true}
    >
      <PlacementStatistics data={data} year={year} />
    </Tab>
  ));
  return (
    <div className=" w-100 h-100">
      <h1 className="my-5 fw-bolder">Past placement statistics</h1>
      <h2>BTech Batches</h2>
      <Tabs
        defaultActiveKey={NAV_LINKS[0]}
        id="placements-by-year"
        className="mb-3"
        mountOnEnter={true}
      >
        {CHARTS.map((chart) => chart)}
      </Tabs>
    </div>
  );
}

export async function getStaticProps(context) {
  const path = require("path");
  const fs = require("fs");
  const excelToJson = require("convert-excel-to-json");

  return {
    props: {
      data: getData(fs, path, excelToJson),
    },
  };
}
