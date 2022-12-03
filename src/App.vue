<template>
  <div id="app">
    <!--<Nav :username ="username"/>--> 
    <Nav/>

    <div class="auth-wrapper">
        <div class="auth-inner">
          
            <router-view />
        </div>
    </div>
  </div>

</template>

<script>
import Nav from './components/Nav.vue'
import axios from 'axios';
export default {
  name: 'App',
  components:{
    Nav    
  }
}
</script>

