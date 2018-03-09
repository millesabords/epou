function loadCharts() {

var chart1 = AmCharts.makeChart( "chartdiv1", {
  "type": "pie",
//  "theme": "light",
  "titles": [ {
    //"text": "Visitors countries",
    "text": "Software skills",
    "size": 16
  } ],
  "dataProvider": [ {
    "technology": "C++",
    "experience": 7000
  }, {
    "technology": "C",
    "experience": 4000
  }, {
    "technology": "Linux / Bash",
    "experience": 3000
  }, {
    "technology": "Java",
    "experience": 2000
  }, {
    "technology": "Git / SVN",
    "experience": 2000
  }, {
    "technology": "Python",
    "experience": 1500
  } ],
  "valueField": "experience",
  "titleField": "technology",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "fontSize": 13,
  "export": {
    "enabled": true
  }
} );

var chart2 = AmCharts.makeChart( "chartdiv2", {
  "type": "pie",
//  "theme": "light",
  "titles": [ {
    //"text": "Visitors countries",
    "text": "Web Development skills",
    "size": 16
  } ],
  "dataProvider": [ {
    "technology": "Node.Js",
    "experience": 4000
  }, {
    "technology": "PHP",
    "experience": 3000
  }, {
    "technology": "pgSQL",
    "experience": 2500
  }, {
    "technology": "Wordpress",
    "experience": 2500
  }, {
    "technology": "Javascript",
    "experience": 2500
  }, {
    "technology": "HTML5",
    "experience": 2000
  }, {
    "technology": "CSS3",
    "experience": 2000
  } ],
  "valueField": "experience",
  "titleField": "technology",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  "innerRadius": "50%",
  "depth3D": 10,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 15,
  "fontSize": 13,
  "export": {
    "enabled": true
  }
} );

var chart3 = AmCharts.makeChart( "chartdiv3", {
  "type": "pie",
  "theme": "light",
  "titles": [ {
    //"text": "Visitors countries",
    "text": "Methodologies",
    "size": 16
  } ],
  "dataProvider": [ {
    "technology": "English / Communication",
    "experience": 3500
  }, {
    "technology": "Availability and reliability",
    "experience": 3500
  }, {
    "technology": "Support / Teamplay",
    "experience": 3000
  }, {
    "technology": "Collaborative-Versionning tools",
    "experience": 2000
  }, {
    "technology": "Planning, specifications, documentation",
    "experience": 2000
  }, {
    "technology": "Class and Database modelization",
    "experience": 1500
  } ],
  "valueField": "experience",
  "titleField": "technology",
  "startEffect": "elastic",
  "startDuration": 2,
  "labelRadius": 15,
  //"minRadius": 40,
  "radius": 40,
  "fontSize": 13,
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
