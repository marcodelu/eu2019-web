loadFiles()

// Update JSON files every 30 secs
setInterval(loadFiles, 30000)

// Universal settings
Chart.defaults.scale.ticks.BeginAtZero = true;

var countryCtx = document.getElementById('countryChart').getContext('2d'); // bind with HTML

var countryChart = new Chart(countryCtx, {
    // The type of chart we want to create
    type: 'doughnut',

    // Data and labels are first declared empty
    data: {
      labels: [],
      datasets: [{
          label: '# of countries',
          data: [],
          borderColor: [
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 255, 255, 1)'
          ],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(91, 192, 235, 1)',
              'rgba(253, 231, 76, 1)',
              'rgba(155, 197, 61, 1)',
              'rgba(229, 89, 52, 1)',
              'rgba(250, 121, 33, 1)',
              'rgba(23, 18, 25, 1)'
          ],
          borderWidth: 2
      }]
  },
  options: {
      maintainAspectRatio: false,
      title: {
            display: true,
            text: '# of tweets per country'
        }
  }
});

// CHART METHODS
// Update chart with data and labels from the file
function drawCountryChart(data) {
  console.log(data);

  countryChart.data.labels = data.map(function (x) {
    return x["country"]
  });

  countryChart.data.datasets[0].data = data.map(function (x) {
    return x["value"]
  });

  countryChart.update();
}

// JSON LOADER
function loadFiles() {
  // async call to load the file
  fetch("exported_tweets_countries.json")
    .then(response => response.json())
    .then(jsonResponse => drawCountryChart(jsonResponse));
}
