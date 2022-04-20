<template>
    <nav class="navbar navbar-expand-lg navbar-bytebank mb-5">
      <a class="navbar-brand" href="#">Connect</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img src="./../../img/options.svg" alt="options">
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <BarraNavIn v-if="usuarioestaLogado"/>
       <BarraNavOut v-else/>

       </div>
    </nav>
</template>


<script>

import BarraNavIn from './BarraNavIn';
import BarraNavOut from './BarraNavOut';

export default {

  components:{
    BarraNavIn,
    BarraNavOut,
   

},


computed: {
  usuarioestaLogado() {

return Boolean(localStorage.getItem('token'))

    }
   }
  }

</script>


<style>
.navbar {
  background: #140083;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}

</style>