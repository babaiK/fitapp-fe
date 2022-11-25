<template>
<div class="container my-4 text-center">
<div class="mt-5 btn-group-vertical col-md-7 text-center ">
<button type="button" class="btn btn-secondary m-1 fload-end" @click=exercise() >Exercise</button>
<button type="button" class="btn btn-secondary m-1 fload-end" @click=goBack()>Back</button>
</div>
</div>
 
</template>

<script>

export default {
    name: 'MainCrud',
    methods:{
        exercise(){
            this.$router.push("/exercise");
        },
       
        goBack(){
            this.$router.push("/")
        }
    }
}
</script>
