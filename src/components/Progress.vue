<template>
   <progress-bar
        :options="options"
        :value="value"
        />
</template>

<script>
//https://github.com/larsmars/vuejs-progress-bar
export default {
  props: {
    layout:{type:String, default:'line'},/* bar, line, circle or cylinder */
    value: {type:Number, default:0},
    fontSize: {type:Number, default:14},
    width: {type:Number, default:140},
    height: {type:Number, default:35},
  },
  computed:{
    options(){
      return {
        text: {
            color: this.value >= 50? '#fff' : '#000',
            shadowEnable: false,
            shadowColor: '#fff',
            fontSize: this.fontSize,
            fontFamily: 'Helvetica',
            dynamicPosition: false,
            hideText: false
        },
        progress: {
            color: '#294D9C',
            backgroundColor: '#DEDEDE'
        },
        layout: {
            height: this.height,
            width: this.width,
            verticalTextAlign: 61,
            horizontalTextAlign: 43,
            zeroOffset: 0,
            strokeWidth: 30,
            progressPadding: 0,
            type: this.layout
        }
      }
    }
  },
  data(){
    return {
      line:{

      }
    }
  }
}
</script>

<style>

</style>