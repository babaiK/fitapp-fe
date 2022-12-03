<template>
<div class="container my-4 text-center">
    <div class="mt-5 btn-group-vertical col-md-7 text-center" v-if="!email">

        <button type="button" class="btn btn-outline-success m-1 fload-end" @click=login() >Bejelentkezés </button>
        <button type="button" class="btn btn-outline-success m-1 fload-end" @click=registration() >Regisztráció </button>

    </div>

    <div class="mt-5 btn-group-vertical col-md-7 text-center" v-if="email">

        <button type="button" class="btn btn-outline-success m-1 fload-end" @click=generate() >Edzésterv létrehozása</button>
        <button type="button" class="btn btn-outline-success m-1 fload-end" @click=exercise() >Gyakorlatok szerkesztése</button>

    </div>
    
</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'Home',
    computed: {
        ...mapGetters(['email'])
    },
    methods:{
        login(){
            this.$router.push("login")
        },
        registration(){
            this.$router.push("registration")
        },
        generate(){
            this.$router.push("generate")
        },
        exercise(){
            this.$router.push("exercise")
        },
        plan(){
            this.$router.push("plan")
        }
    }
    
}


</script>