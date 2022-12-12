<template>
    <div class="mt-5">
     <!--
  
  <button type="button" class="btn btn-secondary m-1 fload-end" id="show-modal" @click=addPage() >Új gyakorlat hozzáadása</button>  
  <button type="button" class="btn btn-secondary m-1 fload-end" @click=goBack()>Vissza</button>
  --> 
  
  
   <table class="table table-striped mt-3">
        <thead>
            <tr>                
                <th>
                    Felsőtest - Alsótest edzésterv 
                </th>               
                <th></th>                
            </tr>
        </thead>
        <tbody>
            <tr v-for="(ublb, i) in ublb.slice().reverse()" v-bind:key = "ublb.id">
                <!--<td>{{exercise.id}}</td>--><!-- id oszlop -->
                <td>{{(i+1)}}</td>
                <td>{{ublb.ex1}}</td>
                <td>{{ublb.ex2}}</td>
                <td>{{ublb.ex3}}</td>
                <td>{{ublb.ex4}}</td>
                <td>{{ublb.ex5}}</td>
                <td>{{ublb.ex6}}</td>
            </tr>
        </tbody>
    </table>
    <button type="button" class="btn btn-outline-warning m-1 fload-end" @click=goBack()>Vissza</button>
 
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        ublb: []
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
  
        axios.get('generate/ublb', { headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+token
               }});
  
       axios.get('ublbview/list', { headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+token
               }}).then((response) => {
                   this.ublb = response.data;
               });
      },
      goBack(){
              this.$router.push("/generate")
          }
    },
  };
  </script>