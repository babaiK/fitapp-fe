<template>
  <div class="mt-5">
    <b-card title="Gyakorlat hozzáadása">
      <b-form-input class="mb-2" v-model="name" placeholder="A gyakorlat neve"></b-form-input>
      <select required class="mb-2 form-control" v-model="muscleGroupId">
        <option value="" disabled seleced hidden>Válassz egy izomcsoportot!</option>
        <option value="2">Mell</option>
        <option value="3">Hát</option>
        <option value="4">Elülső váll</option>
        <option value="5">Oldalsó váll</option>
        <option value="6">Hátsó váll</option>
        <option value="7">Bicepsz</option>
        <option value="8">Tricepsz</option>
        <option value="9">Comb</option>
        <option value="1">Vádli</option>
      </select>

      <br/>
      <button  class="btn btn-outline-primary m-1 fload-end" type="button" variant="success" @click="save">Mentés</button>
      <button  class="btn btn-outline-warning m-1 fload-end" type="button"  @click=goBack()>Vissza</button>
    </b-card>
  </div>
</template>
 
<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: "",
      muscleGroupId:""      
      
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