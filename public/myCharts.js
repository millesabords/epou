function loadCharts() {

var chart1 = AmCharts.makeChart( "chartdiv1", {
  "type": "pie",
//  "theme": "light",
  "titles": [ {
    "text": "Visitors countries",
    "size": 16
  } ],
  "dataProvider": [ {
    "country": "United States",
    "visits": 7252
  }, {
    "country": "China",
    "visits": 3882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "United Kingdom",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 414
  }, {
    "country": "India",
    "visits": 384
  }, {
    "country": "Spain",
    "visits": 211
  } ],
  "valueField": "visits",
  "titleField": "country",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "export": {
    "enabled": true
  }
} );

var chart2 = AmCharts.makeChart( "chartdiv2", {
  "type": "pie",
//  "theme": "light",
  "titles": [ {
    "text": "Visitors countries",
    "size": 16
  } ],
  "dataProvider": [ {
    "country": "United States",
    "visits": 7252
  }, {
    "country": "China",
    "visits": 3882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "United Kingdom",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 414
  }, {
    "country": "India",
    "visits": 384
  }, {
    "country": "Spain",
    "visits": 211
  } ],
  "valueField": "visits",
  "titleField": "country",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "export": {
    "enabled": true
  }
} );

var chart3 = AmCharts.makeChart( "chartdiv3", {
  "type": "pie",
  "theme": "light",
  "titles": [ {
    "text": "Visitors countries",
    "size": 16
  } ],
  "dataProvider": [ {
    "country": "United States",
    "visits": 7252
  }, {
    "country": "China",
    "visits": 3882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "United Kingdom",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 414
  }, {
    "country": "India",
    "visits": 384
  }, {
    "country": "Spain",
    "visits": 211
  } ],
  "valueField": "visits",
  "titleField": "country",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  //"minRadius": 40,
  "radius": 40,
  "fontSize": 8,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  //"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "export": {
    "enabled": true
  }/*,//different colors for label fonts
  "listeners": [{
    "event": "init",
    "method": function(event) {
      // apply slice colors to their labels
      var chart = event.chart;
      if (chart.labelColorField === undefined)
        chart.labelColorField = "labelColor";
      for(var i = 0; i < chart.chartData.length; i++) {
        chart.dataProvider[i][chart.labelColorField] = chart.chartData[i].color;
      }
      chart.validateData();
      chart.animateAgain();
    }
  }]*/
} );

}
