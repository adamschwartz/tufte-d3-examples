$ ->

    drawExample2 = ->
        data = _.map(_.range(7), -> { value: (Math.random() * 20) + 2 })

        largest = 0
        _.each data, (tick) -> largest = tick.value if tick.value > largest

        w = 20
        h = 55

        x = d3.scale.linear()
            .domain([ 0, 1 ])
            .range([ 0, w ])

        y = d3.scale.linear()
            .domain([ 0, largest ])
            .range([ 0, h ])

        $('#example-1').empty()

        chart = d3.select('#example-1').append('svg')
            .attr('class', 'simple-bar-chart')
            .attr('width', '100%')
            .attr('height', h)

        chart.selectAll('rect').data(data)
            .enter().append('rect')
                .attr('x', (d, i) -> (i * (100 / 7)) + '%')
                .attr('height', (d) -> y(d.value))
                .attr('y', (d) -> h - y(d.value) - 0.5)
                .attr('width', (100 / 7) + '%')

        chart.append('line')
            .attr('x1', 0)
            .attr('x2', '100%')
            .attr('y1', h - 0.5)
            .attr('y2', h - 0.5)
            .style('stroke', 'rgba(245, 229, 205, 0.5)')

    drawExample2()

    example1Data = _.map(_.range(7), -> { value: (Math.random() * 20) + 2 })

    drawExample3 = ->
        example1Data.splice(0, 1)
        example1Data.push { value: Math.random() * 20 }

        largest = 0
        _.each example1Data, (tick) -> largest = tick.value if tick.value > largest

        w = 20
        h = 55

        x = d3.scale.linear()
            .domain([ 0, 1 ])
            .range([ 0, w ])

        y = d3.scale.linear()
            .domain([ 0, largest ])
            .range([ 0, h ])

        $('#example-2').empty()

        chart = d3.select('#example-2').append('svg')
            .attr('class', 'simple-bar-chart')
            .attr('width', '100%')
            .attr('height', h)

        chart.selectAll('rect').data(example1Data)
            .enter().append('rect')
                .attr('x', (d, i) -> (i * (100 / 7)) + '%')
                .attr('height', (d) -> y(d.value))
                .attr('y', (d) -> h - y(d.value) - 0.5)
                .attr('width', (100 / 7) + '%')

        chart.append('line')
            .attr('x1', 0)
            .attr('x2', '100%')
            .attr('y1', h - 0.5)
            .attr('y2', h - 0.5)
            .style('stroke', 'rgba(245, 229, 205, 0.5)')

    setInterval ->
        drawExample3()
    , 1000

    drawExample3()

    $(window).resize ->
        zoom = Math.min(1, $(window).width() / 800)
        $('.iframe-example').each ->
            $iframe = $(this).find('iframe')
            $body = $iframe.contents().find('body')

            $(this).css
                height: Math.ceil(zoom * $body.outerHeight())
                width: Math.ceil(zoom * $body.outerWidth())

            $iframe.css
                '-webkit-transform': ('scale(' + zoom + ')')
                '-moz-transform': ('scale(' + zoom + ')')

    $(window).resize()

    $('.iframe-example iframe').load ->
        $(this).css('opacity', 1)
        $(window).resize()