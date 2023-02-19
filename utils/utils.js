import { BRANCHES, CTC, COMPANY_NAME } from "./vars.js";
import { COLORS } from "./vars.js";
// Returns last placement's year
export function getLastPlacementYear() {
  var now = new Date();
  if (now.getMonth() > 4) {
    return now.getFullYear();
  }
  return now.getFullYear() - 1;
}
// gets maximum ctc for a given branch in a given year
export function getMaximumCTCForBranch(data, branch, year) {
  var maxCTC = 0;
  var companyName = "";
  for (var i = 1; i < data[year].length - 1; i++) {
    const ctc = parseInt(data[year][i]["CTC"]);
    const placed = data[year][i][BRANCHES[branch]];
    if (placed > 0 && ctc > maxCTC) {
      maxCTC = ctc;
      companyName = data[year][i][COMPANY_NAME];
    }
  }
  return {
    maxCTC: maxCTC,
    companyName: companyName,
  };
}
export function getMinimumCTCForBranch(data, branch, year) {
  var minCTC = Infinity;
  var companyName = "";
  for (var i = 1; i < data[year].length - 1; i++) {
    const ctc = parseInt(data[year][i][CTC]);
    const placed = data[year][i][BRANCHES[branch]];
    if (placed > 0 && ctc < minCTC) {
      minCTC = ctc;
      companyName = data[year][i][COMPANY_NAME];
    }
  }
  return {
    minCTC: minCTC,
    companyName: companyName,
  };
}
export function getAverageCTCForBranch(data, branch, year) {
  var averageCTC = 0;
  var totalPlaced = 0;
  for (var i = 1; i < data[year].length - 1; i++) {
    const ctc = parseInt(data[year][i][CTC]);
    const placed = data[year][i][BRANCHES[branch]];
    averageCTC += ctc * placed;
    totalPlaced += placed;
  }
  return Math.ceil(averageCTC / totalPlaced);
}
export function getTotalPlacementsForBranch(data, branch, year) {
  return data[year].slice(-1)[0][branch];
}
export function placementBarGraphByYear(data, year) {
  const branches = Object.keys(BRANCHES);

  const maxCTC = branches.map((branch) => {
    return getMaximumCTCForBranch(data, branch, year);
  });
  const averageCTC = branches.map((branch) => {
    return getAverageCTCForBranch(data, branch, year);
  });

  const barGraph = {
    options: {
      responsive: true,
      aspectRatio: 1.5,
      plugins: {
        label: {
          display: true,
        },
        legend: {
          display: true,
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              if (tooltipItem.datasetIndex === 0) {
                return `${maxCTC[tooltipItem.dataIndex].companyName||maxCTC[tooltipItem.dataIndex].name}: ${
                  maxCTC[tooltipItem.dataIndex].maxCTC
                }`;
              } else {
                return `${averageCTC[tooltipItem.dataIndex]} LPA`;
              }
            },
          },
        },
        title: {
          display: true,
          text: `Maximum and average CTC offered in ${year}`,
        },
      },
    },
    data: {
      labels: branches,
      datasets: [
        {
          label: "Maximum CTC in LPA",
          backgroundColor: COLORS.GREEN,
          data: maxCTC.map((branch) => {
            return branch.maxCTC;
          }),
        },
        {
          label: "average CTC in LPA",
          backgroundColor: COLORS.ORANGE,
          data: averageCTC.map((branch) => {
            return branch;
          }),
        },
      ],
    },
  };
  return barGraph;
}
export function getPlacementPieChartByYear(data, year) {
  const branches = Object.keys(BRANCHES);
  const pieChart = {
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Number of Offers recieved by the branches in " + year,
        },
      },
    },
    data: {
      labels: branches,
      datasets: [
        {
          label: "Number of Students Placed",
          backgroundColor: [
            COLORS.BLUE,
            COLORS.LIGHT_GREEN,
            COLORS.ORANGE,
            COLORS.PURPLE,
            COLORS.YELLOW,
          ],
          data: branches.map((branch) => {
            return getTotalPlacementsForBranch(data, branch, year);
          }),
        },
      ],
    },
  };
  return pieChart;
}
export function getNumberOfRecruitersBarGraph(data) {
  const noOfRecruiters = [];
  for (const [key, value] of Object.entries(data)) {
    noOfRecruiters.push(value.length - 2);
  }
  const barGraph = {
    options: {
      options: {
        responsive: true,
        aspectRatio: 3,
        plugins: {
          label: {
            display: true,
          },
          legend: {
            display: true,
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.yLabel} Recruiters`;
              },
            },
          },
          title: {
            display: true,
            text: `No of Recruiters`,
          },
        },
      },
    },
    data: {
      labels: Object.keys(data),
      datasets: [
        {
          label: "No of Recruiters",
          backgroundColor: COLORS.BLUE,
          data: noOfRecruiters,
        },
      ],
    },
  };
  return barGraph;
}
export function getBreadCrumbs(route) {
  const breadCrumbs = [];
  const routeArray = route.split("/");
  if (routeArray[routeArray.length - 1] === "") {
    routeArray.pop();
  }

  for (let i = 0; i < routeArray.length; i++) {
    if (routeArray[i] === "") {
      breadCrumbs.push({
        name: "Home",
        route: "/",
      });
    } else {
      breadCrumbs.push({
        name: routeArray[i],
        route: routeArray.slice(0, i + 1).join("/"),
      });
    }
  }
  return breadCrumbs;
}
export function getData(fs, path, excelToJson) {
  var data = {};
  const EXCEL_PATHS = [];
  fs.readdirSync("./excel", { withFileTypes: true }).forEach((file) => {
    if (file.name.endsWith(".xlsx")) {
      EXCEL_PATHS.push(file.name);
    }
  });
  EXCEL_PATHS.forEach((excelPath) => {
    const dir = path.resolve("./excel/" + excelPath);
    const excelData = excelToJson({
      sourceFile: dir,
      columnToKey: {
        "*": "{{columnHeader}}",
      },
    });
    excelData[`${excelPath.split(".")[0]}`] = excelData.Sheet1;
    delete excelData.Sheet1;
    data = { ...data, ...excelData };
  });
  return data;
}
export function getImages(fs,path,folderName) {
  var IMAGE_PATHS = [];
  fs.readdirSync(path, {
    withFileTypes: true,
  }).forEach((file) => {
    IMAGE_PATHS.push(folderName+ file.name);
  });
  return IMAGE_PATHS;
}
export async function submitHandler(e, messageRef, emailRef) {
  e.preventDefault();
  try {
    const res = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messageRef.current.value,
        email: emailRef.current.value,
      }),
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    const res = err;
    console.log(res);
  }
}
