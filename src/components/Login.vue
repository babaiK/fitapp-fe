<template>
<form class="mt-5" @submit.prevent="handleSubmit">
    
    <div class="container my-4 text-center ">

        <h3 class="py-4"> Login </h3>
        <div class="form-group mt-3 text-md-left">
            <label > email </label>
            <input type="email" class="form-control" v-model="email" placeholder="email" />
        </div>

        <div class="form-group text-md-left">
            <label> Password </label>
            <input type="password" class="form-control" v-model="password" placeholder="Password" />
        </div>

        
        <button class="mt-5 btn btn-secondary btn-block">Login </button>
        
        

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
            password: '',
           
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
            //visszadob az home-ba
            this.$router.push('/');




           
        }
    }
}
</script>