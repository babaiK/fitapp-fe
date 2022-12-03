<template>
<form class="mt-5" @submit.prevent="handleSubmit">

<div class="container my-4 text-center ">
    <h3 class="py-4"> Regisztráció </h3>

    <div class="form-group text-md-left">
        <label> Vezetéknév </label>
        <input type="firstName" class="form-control" v-model="firstName" placeholder="firstName" />
    </div>

    <div class="form-group text-md-left">
        <label> Keresztnév </label>
        <input type="lastName" class="form-control" v-model="lastName" placeholder="lastName" />
    </div>

    <div class="form-group text-md-left">
        <label> E-mail cím </label>
        <input type="email" class="form-control" v-model="email" placeholder="Email" />
    </div>

    <div class="form-group text-md-left">
        <label> Jelszó </label>
        <input type="password" class="form-control" v-model="password" placeholder="Password" />
    </div>    

    <button class=" mt-5 btn btn-outline-success btn-block" @click=handleSubmit()>Registration </button>


</div>
    
</form> 

</template>

<script>
import axios from 'axios'

export default {
    name: 'Registration',
    data(){
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
           
        }
    },
    methods:{
        async handleSubmit(){
           
            await axios.post('auth/registration', {
                firstName: this.firstName,
                lastName: this.lastName,
                    email: this.email,
                    password: this.password
                
            });

            this.$router.push('/login');
           
        },
         goBack(){
            this.$router.push("/")
        }
    }
}
</script>