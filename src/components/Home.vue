<template>
<div class="container my-4 text-center">
    <div class="mt-5 btn-group-vertical col-md-7 text-center" v-if="!email">

        <button type="button" class="btn btn-secondary m-1 fload-end" @click=login() >Login </button>
        <button type="button" class="btn btn-secondary m-1 fload-end" @click=registration() >Registration </button>

    </div>

    <div class="mt-5 btn-group-vertical col-md-7 text-center" v-if="email">

        <button type="button" class="btn btn-secondary m-1 fload-end" @click=crud() >Create your gym plan</button>

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
        crud(){
            this.$router.push("mainCrud")
        },
        plan(){
            this.$router.push("plan")
        }
    }
    
}


</script>