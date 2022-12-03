<template>
    <div class="mt-5">
     <!--
  
  <button type="button" class="btn btn-secondary m-1 fload-end" id="show-modal" @click=addPage() >Új gyakorlat hozzáadása</button>  
  <button type="button" class="btn btn-secondary m-1 fload-end" @click=goBack()>Vissza</button>
  --> 
  
  
   <table class="table table-striped mt-3">
        <thead class="thead-dark">
            <tr>                
                <th>
                    Gyakorlat 
                </th>               
                <th></th>                
            </tr>
        </thead>
        <tbody>
            <tr v-for="bs in bs.slice().reverse()" v-bind:key = "bs.id">
                <!--<td>{{exercise.id}}</td>--><!-- id oszlop -->
                <td>{{bs.ex1}}</td>
                <td>{{bs.ex2}}</td>
                <td>{{bs.ex3}}</td>
                <td>{{bs.ex4}}</td>
                <td>{{bs.ex5}}</td>
                <td>{{bs.ex6}}</td>
                             
  
            </tr>
        </tbody>
    </table>
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        bs: []
      };
    },
    created() {
      this.updateList();
    },
    methods: {
      updateList() {
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');
        const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');
  
        axios.get('generate/brosplit', { headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+token
               }});
  
       axios.get('bsview/list', { headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+token
               }}).then((response) => {
                   this.bs = response.data;
               });
      },
      goBack(){
              this.$router.push("/generate")
          }
    },
  };
  </script>