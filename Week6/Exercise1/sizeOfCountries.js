//Data to be represented as charts
var countries = [
  "Russia",
  "Antarctica",
  "Canada",
  "China",
  "United States",
  "Brazil",
  "Australia",
  "India",
  "Argentina",
  "Kazakhstan",
  "Algeria",
];
var areaInSqKm = [
  17098246, 14000000, 9984670, 9596961, 9525067, 8515767, 7692024, 3287263,
  2780400, 2724900, 2381741,
];
var chartLabel = "Size in square km";

//chart elements on html file
var lineChartElement = document
  .getElementById("sizeOfCountriesLineChart")
  .getContext("2d");
var barChartElement = document
  .getElementById("sizeOfCountriesBarChart")
  .getContext("2d");
var doughnutChartElement = document
  .getElementById("sizeOfCountriesDoughnutChart")
  .getContext("2d");
var pieChartElement = document
  .getElementById("sizeOfCountriesPieChart")
  .getContext("2d");

// The data for our dataset representation as Line chart
var lineChartData = {
  labels: countries,
  datasets: [
    {
      label: chartLabel,
      data: areaInSqKm,
      backgroundColor: "#49A9EA",
    },
  ],
};

// The data for our dataset representation as Bar chart
var barChartData = {
  labels: countries,
  datasets: [
    {
      label: chartLabel,
      data: areaInSqKm,
      backgroundColor: [
        "rgb(50, 168, 82, 0.5)",
        "rgb(218, 232, 14, 0.5)",
        "rgb(61, 14, 232, 0.5)",
        "rgb(6, 102, 65, 0.5)",
        "rgb(191, 132, 224, 0.5)",
        "rgb(89, 97, 78, 0.5)",
        "rgb(75, 235, 206, 0.5)",
        "rgb(247, 139, 7, 0.5)",
        "rgb(133, 27, 0, 0.5)",
        "rgb(207, 5, 252, 0.5)",
      ],
      borderColor: [
        "rgb(50, 168, 82)",
        "rgb(218, 232, 14)",
        "rgb(61, 14, 232)",
        "rgb(6, 102, 65)",
        "rgb(191, 132, 224)",
        "rgb(89, 97, 78)",
        "rgb(75, 235, 206)",
        "rgb(247, 139, 7)",
        "rgb(133, 27, 0)",
        "rgb(207, 5, 252)",
      ],
      borderWidth: 1,
    },
  ],
};

// The data for our dataset representation as Doughnut chart
var doughnutChartData = {
  labels: countries,
  datasets: [
    {
      label: chartLabel,
      data: areaInSqKm,
      backgroundColor: [
        "rgb(50, 168, 82, 0.8)",
        "rgb(218, 232, 14, 0.8)",
        "rgb(61, 14, 232, 0.8)",
        "rgb(6, 102, 65, 0.8)",
        "rgb(191, 132, 224, 0.8)",
        "rgb(89, 97, 78, 0.8)",
        "rgb(75, 235, 206, 0.8)",
        "rgb(247, 139, 7, 0.8)",
        "rgb(133, 27, 0, 0.8)",
        "rgb(207, 5, 252, 0.8)",
      ],
      borderColor: "#0f0f0f",
      borderWidth: 0.5,
    },
  ],
};

// Configuration options go here
var graphChartOptions = {
  layout: {
    padding: {
      left: 50,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Country",
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
          labelString: "Sq Km",
        },
      },
    ],
  },
};

// Configuration options go here
var chartOptions = {
  layout: {
    padding: {
      left: 50,
      right: 0,
      top: 0,
      bottom: 0,
    },
  },
};
// new Chart(x, y) creates a new chart object where:
// x is the object for the html element.
// y is JSON object of type {a,b,c} see below.
var lineChart = new Chart(lineChartElement, {
  type: "line",
  data: lineChartData,
  options: graphChartOptions,
});

var barChart = new Chart(barChartElement, {
  type: "bar",
  data: barChartData,
  options: graphChartOptions,
});

var dougnutChart = new Chart(doughnutChartElement, {
  type: "doughnut",
  data: doughnutChartData,
  options: chartOptions,
});

var pieChart = new Chart(pieChartElement, {
  type: "pie",
  data: doughnutChartData,
  options: chartOptions,
});
