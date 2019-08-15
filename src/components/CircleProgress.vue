<template>
  <div class="circle-progress" :style="{width: getWith, height: getHeight}">
      <div class="c1" :style="{ borderWidth:getStroke, borderColor: bgcolor, }"></div>
      <canvas class="canvas" ref="myCanvas" :width="width" :height="height"></canvas>
      <div class="text-content">{{getText}}</div>
  </div>
</template>

<script>
export default {
 name:'CircleProgress',
 props:{
   width:{type: Number, default: 100}, 
   height:{type: Number, default: 100},
   stroke:{type: Number, default: 10},
   percent:{type: Number, default: 15},
   bgcolor:{type: String, default: "#DEDEDE"},
   color:{type: String, default: "#294D9C"},
   textNo:{type: Boolean, default: false},
 },
 data(){
  return {
    canvas: null  
  }
 },
 computed: {
    getWith(){
        return this.width+"px"
    },
    getHeight(){
        return this.height+"px"
    },
    getStroke(){
        return this.stroke+"px"
    },
    getX(){
        return this.width/2
    },
    getY(){
        return this.height/2
    },
    getRadious(){
       return ((this.width/2) - this.stroke/2) 
    },
    getText(){
        return this.textNo ? '' : this.percent+"%"
    },
    getAngle(){
        return this.percent*2*Math.PI/100
    }
 },
 mounted(){
    this.canvas = this.$refs['myCanvas'];
    this.createArc()
 },
 methods:{
    createArc(){
        var ctx = this.canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.getX, this.getY, this.getRadious, 0, this.getAngle);
        ctx.fillStyle = 'transparent';
        ctx.fill();
        ctx.lineWidth = this.stroke;
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }
 }
}
</script>

<style>
.circle-progress{
    position: relative;
}
.circle-progress .c1{
    width: 100%;
    height: 100%;
    border-style: solid;
    border-radius: 50%;
}
.circle-progress .canvas{
    top: 0;
    left: 0;
    position: absolute;
}
.circle-progress .text-content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
</style>