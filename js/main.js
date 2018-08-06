  $(document).ready(function(){

        var speedCanvas = document.getElementById("speedChart");
        Chart.defaults.global.legend.display = false;

        Chart.defaults.global.defaultFontFamily = "Noto Sans";
        // Chart.defaults.global.defaultFontSize = 18;

        var speedData = {
          labels: ["","Mon", "Tue", "Wed",  "Thu", "Fri",  "Sat", ""],

          datasets: [{
           
            data: [5, 5, 10 ,8, 15, 10, 4, 25, 15, 4, 12, 8, 5],
            backgroundColor: [
                'rgba(201,232,241, 1)',
                
            ],
            borderWidth: 2,
            borderColor: [
               'rgba(78,179,211, 1)',
            ],
            pointRadius: 0,
          }]
        };

        var chartOptions = {
            legend: {
                display: false,
            },

           layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 20,
                    bottom: 0
                }
             },

            scales: {
                xAxes: [{
                            gridLines: {
                                display:false
                            },

                        }],
                yAxes: [{
                            gridLines: {
                                display:false
                            }  ,

                            ticks: {
                                max: 25,
                                min: 0,
                                stepSize: 5,
                                 
                            }

                        }]
            },

        };

        var lineChart = new Chart(speedCanvas, {
          type: 'line',
          data: speedData,
          options: chartOptions
        });

        // chart 2

         var speedCanvas = document.getElementById("speedChart2");
        Chart.defaults.global.legend.display = false;

        Chart.defaults.global.defaultFontFamily = "Noto Sans";
        // Chart.defaults.global.defaultFontSize = 18;

        var speedData = {
          labels: ["","Mon", "Tue", "Wed",  "Thu", "Fri",  "Sat", ""],

          datasets: [{
           
            data: [5, 5, 10 ,8, 15, 10, 4, 25, 15, 4, 12, 8, 5],
            backgroundColor: [
                'rgba(201,232,241, 1)',
                
            ],
            borderWidth: 2,
            borderColor: [
               'rgba(78,179,211, 1)',
            ],
            pointRadius: 0,
          }]
        };

        var chartOptions = {
            legend: {
                display: false,
            },

           layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 20,
                    bottom: 0
                }
             },

            scales: {
                xAxes: [{
                            gridLines: {
                                display:false
                            },

                        }],
                yAxes: [{
                            gridLines: {
                                display:false
                            }  ,

                            ticks: {
                                max: 25,
                                min: 0,
                                stepSize: 5,
                                 
                            }

                        }]
            },

        };

        var lineChart = new Chart(speedCanvas, {
          type: 'line',
          data: speedData,
          options: chartOptions
        });
    
    });