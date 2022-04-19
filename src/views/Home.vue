<template>
  <div class="container">
    <div class="jumbotron mt-2">
      <h1 class="display-4">Bem-vindo!</h1>
      <p>Aplição disponível para listagem dos gerentes do nosso banco.</p>
     
     <router-link :to="{ name: 'novo.usuario' }">
                Cadastre-se aqui!
            </router-link> </div>
    
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
