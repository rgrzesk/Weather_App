<template>
    <teleport to="body">
        <div v-if="showErr" class="background">
            <dialog open v-if="showErr">
                <h2>{{problem}}</h2>
                <section>
                    <slot></slot>
                </section>
                <section>
                    <button @click="closeErr">Close</button>
                </section>
            </dialog>
        </div>
    </teleport>
</template>


<script>
export default {
  props: {
    showErr: {
      type: Boolean,
      required: true,
    },
    problem: {
      type: String,
      required: false,
    },
  },
  emits: ['close'],
  methods:{
      closeErr(){
          this.$emit('close');
      }
  }
};
</script>

<style scoped>
.background{
    position:fixed;
    top:0;
    right:0;
    height:100vh;
    width:100%;
    background-color: rgba(0, 0, 0, 0.75)
}
dialog{
    position:fixed;
    top:25vh;
    height:25vh;
    width:30%;
    border-radius: 10px;
    border:red;
    overflow:hidden;
    background-color:rgb(255, 255, 255);
    transition:0.5s ease-out;
}
section button {
    margin-top:20px;
    position:absolute;
    top:80%;
    left:90%;

}
h2{
    margin:10px;
}

</style>