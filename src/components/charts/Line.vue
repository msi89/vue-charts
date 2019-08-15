<template>
   <line-chart :data="chartData" :colors="chartColors" legend="bottom"/>
</template>

<script>
export default {
 props:{
   chartData:{type:Array},
   chartColors:{type:Array},
 },
 
}
</script>

<style>

</style>