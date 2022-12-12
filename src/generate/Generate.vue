<template>
<div class="container my-4 text-center">
    <div class="mt-5 btn-group-vertical col-md-3 text-center">  
        <button type="button" class="btn btn-outline-success m-1 fload-end" id="show-modal" @click=ppl() >Push Pull Leg</button>  
        <button type="button" class="btn btn-outline-success m-1 fload-end" id="show-modal" @click=ublb() >Felsőtest - Alsótest</button> 
        <button type="button" class="btn btn-outline-success m-1 fload-end" id="show-modal" @click=bs() >Bro Split</button>  
        <button type="button" class="btn btn-outline-warning m-1 fload-end" @click=goBack()>Vissza</button>    
  </div>
  

</div>
   
</template>
<script>
    export default {
        methods:{
            ppl(){
                this.$router.push("ppl")
            },
            ublb(){
                this.$router.push("ublb")
            },
            bs(){
                this.$router.push("bs")
            },
            goBack(){
            this.$router.push("/")
            }
        }
    };

</script>