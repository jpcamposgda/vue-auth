<template>
    <div class="container rounded text-center shadow-lg w-75 p-5" id="jp" >
        <h3 class="py-2">Login</h3>
        <form @submit.prevent="efetuarLogin">
            <div class="form.group py-3 " >
                
                <input type="email" class="form-control" v-model="usuario.email" placeholder="Email">
            </div>
            <div class="form.group">
                
                <input type="password" class="form-control" v-model="usuario.password" placeholder="Password">
            </div>
            <div class="form.group pt-4">
            <button type='submit' class="btn btn-primary brn-block mb-2"> 
                Login
            </button>
            <div> <router-link :to="{ name: 'novo.usuario' }">
                Não possui um cadastro, cadastre-se aqui!
            </router-link> </div>
            </div>
        </form>
    </div>
</template>

<script>


export default {
    data () {
        return {
            usuario: {}
        }
    },


methods: {
    efetuarLogin () {
      this.$http.post('auth/login', this.usuario)
             .then(response => {
                 console.log(response)
                 localStorage.setItem('token', response.data.access_token)
                 this.$router.push({ name: 'gerentes' })

             })
             .catch(erro => console.log(erro))
    }
}
}
    
</script> 


<style>

@media (max-width: 1920px) { 

#jp{
    max-width: 400px;
    margin-top: 100px;
    
}


}




</style>