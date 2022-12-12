<template>
    <div class="mt-5">
      <button type="button" class="btn btn-outline-warning m-1 fload-end" @click=goBack()>Vissza</button>
       
    <table class="table table-striped mt-3">
            <tbody v-for="(allplan, index) in allplan.slice().reverse()" v-bind:key = "allplan.id">

                <tr>
                    <tr v-if="(allplan.planType === 3 && allplan.fk % 5 === 1)"> 
                      <h4 :style="{visibility: showMore ? 'visible' : 'hidden'}"> {{(x=1)}} </h4>
                      <h4>Bro split</h4> 
                    </tr> 
                    <tr v-if="(allplan.planType === 2 && allplan.fk % 2 === 1)"> 
                      <h4 :style="{visibility: showMore ? 'visible' : 'hidden'}"> {{(x=1)}} </h4>
                      <h4>Upper body - Lower body</h4>
                    </tr> 
                    <tr v-if="(allplan.planType === 1 && allplan.fk % 3 === 1)"> 
                      <h4 :style="{visibility: showMore ? 'visible' : 'hidden'}"> {{(x=1)}} </h4>
                      <h4>Push Pull Leg</h4>
                    </tr> 
                    <!--<td>{{exercise.id}}</td>--><!-- id oszlop -->
                    <!--<td v-if="(allplan.planType === 3)">{{((index%5)+1)}}. nap</td>-->
                    <!--<td v-if="(allplan.planType === 2)">{{((x)+1)}}. nap</td>-->
                    <!--<td v-if="(allplan.planType === 1)">{{((index%3)+1)}}. nap</td>-->
                    <!--<td>{{allplan.id}}</td>-->
                    <!--<td>{{allplan.fk}}</td>-->
                    <!--<td>{{allplan.planType}}</td>-->
                    <td>{{(x++)}}. nap</td>
                    <td>{{allplan.ex1}}</td>
                    <td>{{allplan.ex2}}</td>
                    <td>{{allplan.ex3}}</td>
                    <td>{{allplan.ex4}}</td>
                    <td>{{allplan.ex5}}</td>
                    <td>{{allplan.ex6}}</td>                    
                </tr>
                <h4 :style="{visibility: showMore ? 'visible' : 'hidden'}"> {{(allRecords = index)}}{{(check=true)}}</h4>
            </tbody>
            <tr v-if="check">Összes rekord: {{(allRecords+1)}}</tr>
        </table>
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        allplan: [],
        x:0,
        allRecords:0,
        check:false,
        showMore:""
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
  
       axios.get('allplan', { headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+token
               }}).then((response) => {
                   this.allplan = response.data;
               });
      },
      goBack(){
              this.$router.push("/")
          }
    },
  };
  </script>