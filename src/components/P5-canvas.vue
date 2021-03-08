<template>
  <div id="vue-canvas" class="mt-32 mx-auto"></div>
</template>

<script>
export default {
  name: "VueCanvas",
  mounted() {
    const script = function(p5) {
      var speed = 2;
      var posX = 35;

      // NOTE: Set up is here
      p5.setup = _ => {
        const canvas = p5.createCanvas(500, 500);
        canvas.parent("vue-canvas");
      };
      // NOTE: Draw is here
      p5.draw = _ => {
        p5.background(245);
        const degree = p5.frameCount * 3;
        const y = p5.sin(p5.radians(degree)) * 50;

        p5.push();
        p5.translate(0, p5.height / 2);
        p5.fill(66, 184, 131);
        p5.stroke(53, 73, 94);
        p5.strokeWeight(5);
        p5.ellipse(posX, y, 50, 50);
        p5.pop();
        posX += speed;

        if (posX > p5.width - 35 || posX < 35) {
          speed *= -1;
        }
      };
    };
    // NOTE: Use p5 as an instance mode
    const P5 = require("p5");
    new P5(script);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#vue-canvas {
  display: block;
  /* margin: 0 auto; */
  padding: 0;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
}
</style>
