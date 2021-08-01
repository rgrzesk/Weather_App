<template>
<div class='block'>
<slot></slot>
</div>
</template>

<style scoped>
.block {
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  padding: 1rem;
  margin: 1rem auto;
  max-width: 40rem;
  background-image: linear-gradient(to bottom, rgba(255,255,0,0.2), rgba(70, 86, 230, 0.2) );
 text-align:center;

}
</style>