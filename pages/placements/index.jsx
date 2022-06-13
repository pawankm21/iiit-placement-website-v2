import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { getData } from "../../utils/utils";
import PlacementStatistics from "../../components/placement-statistics";
export default function Placements({ data }) {
  const NAV_LINKS = Object.keys(data).reverse();
  return (
    <div className=" w-100 h-100">
      <h1 className="my-5">Past placement statistics</h1>
      <h2>BTech</h2>
      <Tabs
        defaultActiveKey={NAV_LINKS[0]}
        id="placements-by-year"
        className="mb-3"
      >
        {NAV_LINKS.map((year) => (
          <Tab key={year} eventKey={year} title={`${year-4}-${year}`} className="text-center">
            <PlacementStatistics data={data} year={year} />
          </Tab>
        ))}
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
