
<template>

  <div class="mt-5">

  <button type="button" class="btn btn-outline-success m-1 fload-end" id="show-modal" @click=addPage() >Új gyakorlat hozzáadása</button>  
  <button type="button" class="btn btn-outline-warning m-1 fload-end" @click=goBack()>Vissza</button>
 
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
            <tr v-for="(exercise, index) in exercise.slice().reverse()" v-bind:key = "exercise.id">
                <!--<td>{{exercise.id}}</td>--><!-- id oszlop -->
                <td>{{index+1}}.</td>
                <td>{{exercise.name}}</td>
                <td>
                    <button type="button" class="btn btn-outline-primary mr-1" @click="edit(exercise.id)">Szerkesztés</button>
                     <button type="button" class="btn btn-outline-danger mr-1" @click="deleteExercise(exercise.id)">Törlés</button>
                </td>               

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
      exercise: []
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

     axios.get('exercise/list', { headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }}).then((response) => {
                 this.exercise = response.data;
             });
    },
    edit(id) {
      this.$router.push("editExercise/" + id)
    },
    deleteExercise(id) {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');
      
      axios.delete("exercise/" + id,{ headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+ token
             }})
        .then(() => {
          this.updateList();
          alert("success");
        })
        .catch(() => {
          alert("failed");
        });
    },
    addPage(){
      this.$router.push("addExercise")
    },
    goBack(){
            this.$router.push("/")
        }
  },
};
</script>

<style lang="scss" scoped>
</style>