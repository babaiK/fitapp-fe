<template>
  <div class="mt-5">
    <b-card :title="id + '. gyakorlat szerkesztése'">

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

      <button type="button" class="btn btn-outline-success m-1 fload-end" @click="save">Mentés</button>
      <button type="button" class="btn btn-outline-warning m-1 fload-end"  @click=goBack()>Vissza</button>
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
      muscleGroupId: ""
      
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
      console.log("get by id-ba benne vagyunk")
      

      axios.get("exercise/" + this.id, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+ token
             }            
        })
        .then((response) => {

          console.log(response);
          //this.id = response.data.id;
          this.name = response.data.name;
          this.muscleGroupId = response.data.muscleGroupId
          
        })
        .catch(() => {
          alert("Hiba: nem létező azonosító");
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
      console.log("ez már az update metodus");

      axios.put("exercise/update/" + this.id,params,
         {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then(() => {
          alert("A gyakorlat sikeresen módosítva!");
          this.$router.push("/exercise");
        })
        .catch(() => {
          alert("Hiba");
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