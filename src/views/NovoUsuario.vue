<template>
    <div class="container rounded text-center shadow-lg w-75 p-5" id="jp">
        <h1>Novo Usuario</h1>
        <form @submit.prevent="enviarFormulario" >
            <div class="form-group pt-3">
               
                <input type="text" class="form-control" v-model="usuario.username" placeholder="Username" >
            </div>
            <div class="form-group">
                
                <input type="email" class="form-control" v-model="usuario.email" placeholder="Email">
            </div>
            <div class="form-group">
                
                <input type="password" class="form-control" v-model="usuario.password" placeholder="Password" >
            </div>
            <button class="btn btn-primary" type="submit">Criar</button>
        </form>
    </div>
</template>

<script>


export default {

data: function() {
    return {
        usuario: {
            username: '',
            password:'',
            email:''
        }
    }
},

methods: {
        enviarFormulario() {
          this.$http.post("/users", this.usuario)
            .then(resposta => { 
                console.log(resposta)
                this.$router.push({ name: 'login' })
            })
            .catch(erro => console.log(erro))
        }

}

}
</script>


<style>

/* @media (max-width: 1399.98px) { 

#jp{
    max-width: 400px;
    margin-top: 200px;
   
}


} */




</style>
