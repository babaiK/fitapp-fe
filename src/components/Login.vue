<template>
<form class="mt-5" @submit.prevent="handleSubmit">
    
    <div class="container my-4 text-center ">

        <h3> Bejelentkezés </h3>
        <div class="form-group mt-3 text-md-left">
            <label > E-mail cím </label>
            <input type="email" class="form-control" v-model="email" placeholder="E-mail cím" />
        </div>

        <div class="form-group text-md-left">
            <label> Jelszó </label>
            <input type="password" class="form-control" v-model="password" placeholder="Jelszó" />
        </div>

        <button type="button" class="btn btn-outline-success m-1 fload-end" @click=handleSubmit()>Bejelentkezés</button>
        <button type="button" class="btn btn-outline-warning m-1 fload-end" @click=goBack()>Vissza</button>

    </div>

</form>

</template>

<script>

import axios from 'axios'

export default {
    name: 'Login',
    data(){
        return {
            email: '',
            password: ''           
        }
    },
    methods:{
        async handleSubmit(){
            const response = await axios.post('auth/login', {
                email: this.email,                
                password: this.password
                
            });

            localStorage.setItem('email',response.data.email);
            localStorage.setItem('password',response.data.password);

            console.log(response);
            
            this.$store.dispatch('email', response.data.email);
        
            this.$router.push('/');
  
        },
        goBack(){
            this.$router.push('/');
        }
    }
}
</script>