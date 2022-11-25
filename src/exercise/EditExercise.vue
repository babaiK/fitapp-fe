<template>
  <div class="mt-5">
    <b-card :title="'Edit with id of ' + id">

      <b-form-input class="mb-2" v-model="name" placeholder="Enter name"></b-form-input>
      <b-form-input class="mb-2" v-model="muscleGroupId" placeholder="Enter muscleGroupId"></b-form-input>

      <br/> 

      <button  class="btn btn-secondary m-1 fload-end" type="button" variant="success" @click="save">Save</button>
      <button  class="btn btn-secondary m-1 fload-end" type="button"  @click=goBack()>Back</button>
    </b-card>
  </div>
</template>

<script>
 
import axios from 'axios';
export default {
  

  data() {
    return {
      id: null,
      name: "",
      muscleGroupId: null
      
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getById();    

  },
  methods: {
    getById() {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');

      axios.get("exercise/" + this.id, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then((response) => {

          console.log(response);

          this.name = response.data.name;
          this.muscleGroupId = response.data.muscleGroupId
          
        })
        .catch(() => {
          alert("failed");
        });
    },
    save() {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64'); 

      let params = {
        id: this.id,
        name: this.name,
        muscleGroupId: this.muscleGroupId
       
      }

      axios.put("exercise/update/" + this.id,params,
         {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then(() => {
          alert("success");
          this.$router.push("/exercise");
        })
        .catch(() => {
          alert("failed");
        });
    },
    goBack(){
            this.$router.push("/exercise")
        }
  },
};
</script>

<style lang="scss" scoped>
</style>