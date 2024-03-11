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
function generateRandomIntArray(length, min, max) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    randomArray.push(randomInt);
  }
  return randomArray;
}
var population = generateRandomIntArray(11, 10000, 90000000)
var chartLabel = "Average Population in 2010 - 2020";

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
      data: population,
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
      data: population,
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
      data: population,
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
          labelString: "No of Persons",
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

function updateCharts(action){
  charts = [lineChart, barChart , dougnutChart , pieChart];
  population = generateRandomIntArray(11, 10000, 90000000);
  charts.forEach((chart) => {
    chart.data.datasets.forEach((dataset)=> {
      var startYear = parseInt(dataset.label.match(/\d+/)[0]);
      if (action==="ago"){
        startYear -= 10;
      }else{
        startYear += 10;
      }
      dataset.label = `Average Population in ${startYear} - ${startYear+10}`;
      dataset.data = population;
    });
    chart.update();
  });
};


