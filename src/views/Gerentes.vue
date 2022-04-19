<template>

  <div class="container">
    <h1>Gerentes</h1>
    <div class="row align-items-start">
      <Gerente class="col-6 col-sm-3 mt-2" v-for="gerente in gerentes" :key="gerente.numero" :gerente="gerente" />
    </div>
  </div>
</template>

<script>
import Gerente from '@/components/Gerente.vue'

export default {
  components: {
    Gerente
  },
  data() {
    return {
      gerentes: []
    }
  },


mounted () {
  this.$http.get('gerentes')
  .then(response => this.gerentes = response.data)
  .catch(erro => console.log(erro))
}
}








</script>


<style>

.card:hover {

transform: scale(1.1);
transition: 0.5s

}




</style>