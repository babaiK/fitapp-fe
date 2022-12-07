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
                  Gyakorlat 
              </th>               
              <th></th>                
          </tr>
      </thead>
      <tbody>
          <tr v-for="(ppl, i) in ppl.slice().reverse()" v-bind:key = "ppl.id">
              <!--<td>{{exercise.id}}</td>--><!-- id oszlop -->
              <td>{{(i+1)}}. nap</td>
              <td>{{ppl.ex1}}</td>
              <td>{{ppl.ex2}}</td>
              <td>{{ppl.ex3}}</td>
              <td>{{ppl.ex4}}</td>
              <td>{{ppl.ex5}}</td>
              <td>{{ppl.ex6}}</td>
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
        ppl: []
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

      axios.get('generate/ppl', { headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }});

     axios.get('pplview/list', { headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }}).then((response) => {
                 this.ppl = response.data;
             });
    },
    goBack(){
            this.$router.push("/generate")
        }
  },
};
</script>