var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

Date.prototype.getMonthName = function() {
  return months[this.getMonth()];
};

function getNextMonth(currentMonth) {
  if (currentMonth == "Dec") {
    return "Jan";
  } else {
    return months[months.indexOf(currentMonth) + 1];
  }
}

function getMonthsToDisplay() {
  var d = new Date();
  var thisMonth = new Date().getMonthName();
  var monthsDisplay = [];
  for (var i = 1; i <= 12; i++) {
    var thisMonth = getNextMonth(thisMonth);
    monthsDisplay.push(thisMonth);
  }

  for (var i = 11; i >= 0; i--) {
    var currentData = monthsDisplay[i];

    if (
      typeof yearAdd == "undefined" ||
      yearAdd == d.getFullYear().toString()
    ) {
      if (i < 11 && monthsDisplay[i] == "Dec") {
        var yearAdd = (d.getFullYear() - 1).toString();
      } else {
        var yearAdd = d.getFullYear().toString();
      }
    }

    monthsDisplay[i] = currentData + " " + yearAdd;
  }

  return monthsDisplay;
}

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#292b2c";

// Area Chart Example
var ctx = document.getElementById("myAreaChart");

var myLineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: getMonthsToDisplay(),
    datasets: [
      {
        label: "Price ($USD)",
        lineTension: 0.3,
        backgroundColor: "rgba(2,117,216,0.2)",
        borderColor: "rgba(2,117,216,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(2,117,216,1)",
        pointBorderColor: "rgba(255,255,255,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 50,
        pointBorderWidth: 2,
        data: [225, 223, 218, 426, 519, 312, 128, 158, 214, 224, 256, 243]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          time: {
            unit: "date"
          },
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 7
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 550,
            maxTicksLimit: 5
          },
          gridLines: {
            color: "rgba(0, 0, 0, .125)"
          }
        }
      ]
    },
    legend: {
      display: false
    }
  }
});
