(function() {
  $(function() {
    var drawExample2, drawExample3, example1Data;
    drawExample2 = function() {
      var chart, data, h, largest, w, x, y;
      data = _.map(_.range(7), function() {
        return {
          value: (Math.random() * 20) + 2
        };
      });
      largest = 0;
      _.each(data, function(tick) {
        if (tick.value > largest) {
          return largest = tick.value;
        }
      });
      w = 20;
      h = 55;
      x = d3.scale.linear().domain([0, 1]).range([0, w]);
      y = d3.scale.linear().domain([0, largest]).range([0, h]);
      $('#example-1').empty();
      chart = d3.select('#example-1').append('svg').attr('class', 'simple-bar-chart').attr('width', '100%').attr('height', h);
      chart.selectAll('rect').data(data).enter().append('rect').attr('x', function(d, i) {
        return (i * (100 / 7)) + '%';
      }).attr('height', function(d) {
        return y(d.value);
      }).attr('y', function(d) {
        return h - y(d.value) - 0.5;
      }).attr('width', (100 / 7) + '%');
      return chart.append('line').attr('x1', 0).attr('x2', '100%').attr('y1', h - 0.5).attr('y2', h - 0.5).style('stroke', 'rgba(245, 229, 205, 0.5)');
    };
    drawExample2();
    example1Data = _.map(_.range(7), function() {
      return {
        value: (Math.random() * 20) + 2
      };
    });
    drawExample3 = function() {
      var chart, h, largest, w, x, y;
      example1Data.splice(0, 1);
      example1Data.push({
        value: Math.random() * 20
      });
      largest = 0;
      _.each(example1Data, function(tick) {
        if (tick.value > largest) {
          return largest = tick.value;
        }
      });
      w = 20;
      h = 55;
      x = d3.scale.linear().domain([0, 1]).range([0, w]);
      y = d3.scale.linear().domain([0, largest]).range([0, h]);
      $('#example-2').empty();
      chart = d3.select('#example-2').append('svg').attr('class', 'simple-bar-chart').attr('width', '100%').attr('height', h);
      chart.selectAll('rect').data(example1Data).enter().append('rect').attr('x', function(d, i) {
        return (i * (100 / 7)) + '%';
      }).attr('height', function(d) {
        return y(d.value);
      }).attr('y', function(d) {
        return h - y(d.value) - 0.5;
      }).attr('width', (100 / 7) + '%');
      return chart.append('line').attr('x1', 0).attr('x2', '100%').attr('y1', h - 0.5).attr('y2', h - 0.5).style('stroke', 'rgba(245, 229, 205, 0.5)');
    };
    setInterval(function() {
      return drawExample3();
    }, 1000);
    drawExample3();
    $(window).resize(function() {
      var zoom;
      zoom = Math.min(1, $(window).width() / 800);
      return $('.iframe-example').each(function() {
        var $body, $iframe;
        $iframe = $(this).find('iframe');
        $body = $iframe.contents().find('body');
        $(this).css({
          height: Math.ceil(zoom * $body.outerHeight()),
          width: Math.ceil(zoom * $body.outerWidth())
        });
        return $iframe.css({
          '-webkit-transform': 'scale(' + zoom + ')',
          '-moz-transform': 'scale(' + zoom + ')'
        });
      });
    });
    $(window).resize();
    return $('.iframe-example iframe').load(function() {
      $(this).css('opacity', 1);
      return $(window).resize();
    });
  });
}).call(this);
