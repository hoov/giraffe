var graphite_url = "http://graphite.dexilab.acrobat.com";  // enter your graphite url, e.g. http://your.graphite.com

var dashboards = 
[
  { "name": "Demo",  // give your dashboard a name (required!)
    "refresh": 1000,  // each dashboard has its own refresh interval (in ms)
    // add an (optional) dashboard description. description can be written in markdown / html.
    "description": "#Demo",
    "metrics":  // metrics is an array of charts on the dashboard
    [
      {
        "alias": "Timer 0",
        "targets": ["alias(stats.timers.fakedata.timer_0.total.lower, 'timer_0.lower')",  // targets array is also supported
                    "alias(stats.timers.fakedata.timer_0.total.mean, 'timer_0.mean')",   // see below for more advanced usage
                    "alias(stats.timers.fakedata.timer_0.total.upper_90, 'timer_0.upper_90')"],
        "renderer": "area",  // use any rickshaw-supported renderer
        "interpolation": "cardinal",
        "unstack": true  // other parameters like unstack, interpolation, stroke, min, height are also available (see rickshaw documentation for more info)
      },
      {
        "alias": "Timer 1",
        "targets": ["stats.timers.fakedata.timer_1.total.lower",  // targets array is also supported
                    "stats.timers.fakedata.timer_1.total.mean",   // see below for more advanced usage
                    "stats.timers.fakedata.timer_1.total.upper_90"],
        "renderer": "area",  // use any rickshaw-supported renderer
        "interpolation": "cardinal",
        "unstack": true  // other parameters like unstack, interpolation, stroke, min, height are also available (see rickshaw documentation for more info)
      },
    ]
  },
];

//dashboards = [];
var scheme = [
              '#423d4f',
              '#4a6860',
              '#848f39',
              '#a2b73c',
              '#ddcb53',
              '#c5a32f',
              '#7d5836',
              '#963b20',
              '#7c2626',
              ].reverse();

function relative_period() { return (typeof period == 'undefined') ? 1 : parseInt(period / 7) + 1; }
function entire_period() { return (typeof period == 'undefined') ? 1 : period; }
function at_least_a_day() { return entire_period() >= 1440 ? entire_period() : 1440; }
