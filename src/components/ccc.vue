<template>
   <div class="">
        <div id="circle1"></div>
        <div id="shadowring"></div>
        <div id="circle2"></div>
        <canvas height="200" width="200" id="counter"/> 
   </div>
</template>

<script>
export default {
    data(){
        return{
            no: 0,// Starting Point
            pointToFill : 4.72,//Point from where you want to fill the circle,
            diff: null,
            fill: null,
        }
    },
    mounted(){
        var counter = document.getElementById('counter').getContext('2d');
        var cw = counter.canvas.width;  //Return canvas width
        var ch = counter.canvas.height; //Return canvas height
        this.fill = setInterval(this.fillCounter(counter,cw,ch), 500); 
    },
    methods:{
        fillCounter(counter,cw,ch){
            this.diff = ((this.no/100) * Math.PI*2*10);
            
            counter.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call
            
            counter.lineWidth = 15;     // size of stroke
            
            counter.fillStyle = '#fff';     // color that you want to fill in counter/circle
            
            counter.strokeStyle = '#F5E0A9';    // Stroke Color
            
            counter.textAlign = 'center';
            
            counter.font = "25px monospace";    //set font size and face
            
            counter.fillText(this.no+'%',100,110);       //fillText(text,x,y);
            
            counter.beginPath();
            counter.arc(100,100,90,this.pointToFill,this.diff/10+this.pointToFill);    //arc(x,y,radius,start,stop)
            
            counter.stroke();   // to fill stroke
            
            // now add condition
            
            if(this.no >= 80)
            {
              clearTimeout(this.fill);     //fill is a variable that call the function fillcounter()
            }
            this.no++;
        }
    }
}
</script>

<style scoped>
.ccc{
    position: relative;
}
#counter{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 9;
}
#circle1{
    height: 165px;
    width: 165px;
    background-color:#696878;
    border-radius: 50%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 1;
}
#shadowring{
    height: 165px;
    width: 165px;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(0,0,0,.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
}
#circle2{
    height: 196px;
    width: 196px;
    background-color:#BBD9DB;
    border-radius: 50%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
}
</style>