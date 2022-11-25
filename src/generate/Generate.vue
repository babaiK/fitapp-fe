<template>

    <div class="mt-5">
  
    <button type="button" class="btn btn-secondary m-1 fload-end" id="show-modal" @click=ppl() >Push/ Pull/ Leg</button>  
    <button type="button" class="btn btn-secondary m-1 fload-end" id="show-modal" @click=ublb() >Felsőtest - Alsótest</button> 
    <button type="button" class="btn btn-secondary m-1 fload-end" id="show-modal" @click=bs() >Bro Split</button>    
  
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
              <tr v-for="exercise in exercise" v-bind:key = "exercise.id">
                  <!--<td>{{exercise.id}}</td>--><!-- id oszlop -->
                  <td>{{exercise.name}}</td>
                  <td>
                      <button type="button" class="btn btn-light mr-1" @click="edit(exercise.id)">Szerkesztés</button>
                       <button type="button" class="btn btn-light mr-1" @click="deleteExercise(exercise.id)">Törlés</button>
                  </td>               
  
              </tr>
          </tbody>
     </table>
    </div>
</template>
<script>
    export default {
        methods:{
            ppl(){
                this.$router.push("ppl")
            },
            ublb(){
                this.$router.push("ublb")
            },
            bs(){
                this.$router.push("bs")
            }
        }
    };

</script>