<template>
  <div>
    <h1>Here is a simple Plot.ly plot</h1>
    <div id="gd"></div>
  </div>
</template>

<script>
  var Plotly = require('plotly.js');

  export default {
    name: 'plot',
    data() {
      return {
        data: [{ x: [0, 1], y: [0, 1] }]
      }
    },
    methods: {
    },
    mounted: function() {
      Plotly.plot("gd", [{ x: [0, 1], y: [0, 1] }]);
    }
  }
</script>

<style scoped>

</style>


