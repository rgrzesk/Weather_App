<template>
<main>
<the-header></the-header>

<router-view >
  
</router-view>

</main>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default{

components:{
    TheHeader
}
}
</script>

<style>

* {
  box-sizing: border-box;
}

html {
  font-family: "Monsterrat", sans-serif;
}

body{
    margin: 0;
}
#app{
  background-image: url('././background.png');
  background-size:cover;
  background-position:bottom;
  transition:0.7s ease-out;
  min-height:100vh;
}

</style>