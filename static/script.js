var svg = d3
  .select("#pie-container")
  .append("svg")
  .classed("h-full w-3/4 m-auto block", true)
  .append("g")

svg.append("g").attr("class", "slices")
svg.append("g").attr("class", "labels")
svg.append("g").attr("class", "lines")

var width = (window.innerWidth + window.innerHeight) / 2.5,
  height = window.innerWidth / 3.4,
  radius = Math.min(width, height) / 2

console.log(width)

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function(d) {
    return d.value
  })

var arc = d3.svg
  .arc()
  .outerRadius(radius * 0.8)
  .innerRadius(radius * 0.2)

var outerArc = d3.svg
  .arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9)

const widthTranslation = width > 500 ? width / 2.8 : width / 2.9

svg.attr("transform", "translate(" + widthTranslation + "," + height / 2 + ")")

var key = function(d) {
  return d.data.label
}

var color = d3.scale
  .ordinal()
  .domain(["In Person", "Online", "Undecided"])
  .range(["#4B9B8D", "#0A2342", "#A82433"])

function randomData() {
  var labels = color.domain()
  const values = {
    "In Person": 118,
    Online: 54,
    Undecided: 224,
  }
  return labels.map(function(label) {
    return {
      label: label,
      value: values[label],
    }
  })
}

change(randomData())

d3.select(".randomize").on("click", function() {
  change(randomData())
})

function change(data) {
  /* ------- PIE SLICES -------*/
  var slice = svg
    .select(".slices")
    .selectAll("path.slice")
    .data(pie(data), key)

  slice
    .enter()
    .insert("path")
    .style("fill", function(d) {
      return color(d.data.label)
    })
    .attr("class", "slice")

  slice
    .transition()
    .duration(1000)
    .attrTween("d", function(d) {
      this._current = this._current || d
      var interpolate = d3.interpolate(this._current, d)
      this._current = interpolate(0)
      return function(t) {
        return arc(interpolate(t))
      }
    })

  slice.exit().remove()

  /* ------- TEXT LABELS -------*/

  var text = svg
    .select(".labels")
    .selectAll("text")
    .data(pie(data), key)

  text
    .enter()
    .append("text")
    .attr("dy", ".35em")
    .text(function(d) {
      return d.data.label
    })

  function midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2
  }

  text
    .transition()
    .duration(1000)
    .attrTween("transform", function(d) {
      this._current = this._current || d
      var interpolate = d3.interpolate(this._current, d)
      this._current = interpolate(0)
      return function(t) {
        var d2 = interpolate(t)
        var pos = outerArc.centroid(d2)
        pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1)
        return "translate(" + pos + ")"
      }
    })
    .styleTween("text-anchor", function(d) {
      this._current = this._current || d
      var interpolate = d3.interpolate(this._current, d)
      this._current = interpolate(0)
      return function(t) {
        var d2 = interpolate(t)
        return midAngle(d2) < Math.PI ? "start" : "end"
      }
    })

  text.exit().remove()

  /* ------- SLICE TO TEXT POLYLINES -------*/

  var polyline = svg
    .select(".lines")
    .selectAll("polyline")
    .data(pie(data), key)

  polyline.enter().append("polyline")

  polyline
    .transition()
    .duration(1000)
    .attrTween("points", function(d) {
      this._current = this._current || d
      var interpolate = d3.interpolate(this._current, d)
      this._current = interpolate(0)
      return function(t) {
        var d2 = interpolate(t)
        var pos = outerArc.centroid(d2)
        pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1)
        return [arc.centroid(d2), outerArc.centroid(d2), pos]
      }
    })

  polyline.exit().remove()
}
