<template>
  <div class="mt-5">
    <b-card title="Add new">
      <b-form-input class="mb-2" v-model="name" placeholder="Enter name"></b-form-input>

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
      name: "",
      muscleGroupId:1      
      
    };
  },
  methods: {
    save() {
      const email = localStorage.getItem('email');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64');

      let params = {
        name: this.name,
        muscleGroupId: this.muscleGroupId       
      }
 
      axios.post("exercise",params,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then(() => {
          alert("success");
          this.$router.push("exercise");
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