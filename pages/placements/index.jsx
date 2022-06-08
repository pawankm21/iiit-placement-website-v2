import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import PlacementStatistics from "../../components/placement-statistics";
export default function Placements({ data }) {
  const NAV_LINKS = Object.keys(data);
  return (
    <div className="pt-5 w-100 h-100">
      <h1>Past Statistics</h1>
      <Tabs
        defaultActiveKey={NAV_LINKS[0]}
        id="placements-by-year"
        className="mb-3"
      >
        {NAV_LINKS.map((year) => (
          <Tab key={year} eventKey={year} title={year} className="text-center">
            <PlacementStatistics data={data} year={year} />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
export async function getServerSideProps(context) {
  const data = await fetch("http://localhost:3000/api/data");
  const dataJSON = await data.json();
  return {
    props: {
      data: dataJSON,
    },
  };
}
