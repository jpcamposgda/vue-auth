<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-bytebank mb-5">
      <a class="navbar-brand" href="#">Connect</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img src="../img/options.svg" alt="options">
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gerentes" class="nav-link">
              Gerentes
            </router-link>

          </li>
          
          <li class="nav-item">
            <router-link to="/Login" class="nav-link">
              Login
            </router-link>

          </li>
          
          
          <li class="nav-item">

            <a 
            href="#"
            class="nav-link"
            @click.prevent="efetuarLogout">Logout</a>

          </li>
            
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  
methods:{
  efetuarLogout () {
    localStorage.removeItem('token') 
    this.$router.push({name: 'login'})
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
