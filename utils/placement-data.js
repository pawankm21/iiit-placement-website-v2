export const BAR_DATA_2022 = {
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Placement Record",
      },
    },
  },
  data: {
    labels: ["CSE", "IT", "CE", "ETC", "EEE"],
    datasets: [
      {
        label: "Maximum CTC in LPA",
        backgroundColor: "#009B32",
        data: [18, 25, 25, 18, 18],
      },
      {
        label: "Minimum CTC in LPA",
        backgroundColor: "#F78C67",
        data: [3.5, 3.5, 3.5, 3.5, 3.5],
      },
    ],
  },
};
export const PIE_DATA_2022 = {
  options: {

    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Offers",
      },
    },
  },
  data: {
    labels: ["CSE", "IT", "CE", "ETC", "EEE"],
    datasets: [
      {
        label: "Number of Students Placed",
        backgroundColor: [
          "#F78C67",
          "#B8E873",
          "#C791E9",
          "#FFCF56",
          "#6EBADD",
        ],
        data: [114, 113, 101, 97, 67],
      },
    ],
  },
};
export const PAST_RECRUITERS = {
  options: {
    responsive: true,
    plugins: {
        label: {
          display:false,
      },
      title: {
        display: true,
        text: "On campus recruiters",
      },
    },
  },
  data: {
    labels: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013],
      datasets: [{
        label: "Number of recruiters",
        backgroundColor: "#6EBADD",
        data: [
            57,44,28,19,20,23,15,12],
    },]
  },
};