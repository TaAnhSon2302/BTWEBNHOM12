
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "21 Mar",
          "22 Mar",
          "24 Mar",
          "25 Mar",
          "26 Mar",
          "27 Mar",
          "28 Mar",
        ],
        datasets: [
          {
            label: "Total Visited",
            data: [100, 70, 80, 200, 150, 37, 87],
            backgroundColor: "rgba(153,205,1,0.6)",
          },
        ],
      },
    });

//

    window.onload = function () {

      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
          text: "WEB Vising"
        },
        axisX:{
          valueFormatString: "DD MMM",
          crosshair: {
            enabled: true,
            snapToDataPoint: true
          }
        },
        axisY: {
          title: "Number of Visits",
          includeZero: true,
          crosshair: {
            enabled: true
          }
        },
        toolTip:{
          shared:true
        },  
        legend:{
          cursor:"pointer",
          verticalAlign: "bottom",
          horizontalAlign: "left",
          dockInsidePlotArea: true,
          itemclick: toogleDataSeries
        },
        data: [{
          type: "line",
          showInLegend: true,
          name: "Total Visit",
          markerType: "square",
          xValueFormatString: "DD MMM",
          color: "#F08080",
          dataPoints: [
            { x: new Date(0, 2,21), y: 100 },
            { x: new Date(0, 2,22), y: 70 },
            { x: new Date(0, 2,23), y: 80 },
            { x: new Date(0, 2,24), y: 200 },
            { x: new Date(0, 2,25), y: 150 },
            { x: new Date(0, 2,26), y: 37 },
            { x: new Date(0, 2,27), y: 87 },
          ]
        },
        {
          type: "line",
          showInLegend: true,
          name: "Unique Visit",
          lineDashType: "dash",
          dataPoints: [
            { x: new Date(0, 2,21), y: 50 },
            { x: new Date(0, 2,22), y: 22 },
            { x: new Date(0, 2,23), y: 34 },
            { x: new Date(0, 2,24), y: 45 },
            { x: new Date(0, 2,25), y: 79 },
            { x: new Date(0, 2,26), y:17 },
            { x: new Date(0, 2,27), y: 22 },
          ]
        }]
      });
      chart.render();
      
      function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else{
          e.dataSeries.visible = true;
        }
        chart.render();
      }
      
    }

    var ctx2 = document.getElementById("myChart2").getContext("2d");
    var myChart2 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: [
          "21 Mar",
          "22 Mar",
          "24 Mar",
          "25 Mar",
          "26 Mar",
          "27 Mar",
          "28 Mar",
        ],
        datasets: [
          {
            label: "Total Minutes Spend",
            data: [500, 430, 678, 444, 345, 784, 333],
            backgroundColor: "rgba(206, 99, 167, 0.7)",
          },
        ],
      },
    });