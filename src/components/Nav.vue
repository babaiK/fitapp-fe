<template>

  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top py-0">

      <div class="container"> 

        <router-link to="/" class="navbar-brand"> FITT-APP </router-link>

        <div class="collapse navbar-collapse">

          <ul class="navbar-nav ml-auto" v-if="email">

            <li class="nav-item">
              <a href="javascript:void(0)" @click="handleClick" class="nav-link">Logout</a>
            </li>       
            
          </ul>         

        </div>
      
      </div>

   </nav>
    
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name:'Nav',
    
    methods: {
      handleClick(){
        localStorage.removeItem('email');
        localStorage.removeItem('password');

        this.$store.dispatch('email', null);
        
        this.$router.push('/').catch(() => {});
      }
    },
    computed: {
      ...mapGetters(['email'])
    }
}
</script>
