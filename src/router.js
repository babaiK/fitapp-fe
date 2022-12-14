import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Registration from './components/Registration.vue';

import Exercise from './exercise/Exercise.vue';
import AddExercise from './exercise/AddExercise.vue';
import EditExercise from './exercise/EditExercise.vue';

import Generate from './generate/Generate.vue';
import Ppl from './generate/Ppl.vue';
import Ublb from './generate/Ublb.vue';
import Bs from './generate/Bs.vue';

import AllPlan from './AllPlan.vue';

Vue.use(Router);

export default new Router({
   // mode: 'history',
    routes: [
        {path: '/', component: Home },
        {path: '/login', component: Login},
        {path: '/registration', component: Registration},
        
        {path: "/editExercise/:id", name: "EditExercise", component: EditExercise },
        {path: "/addExercise", name: "AddExercise", component: AddExercise },  
        {path: "/exercise",name: "Exercise", component: Exercise},

        {path: "/generate",name: "Generate", component: Generate},
        {path: "/ppl",name: "Ppl", component: Ppl},
        {path: "/ublb",name: "Ublb", component: Ublb},
        {path: "/bs",name: "Bs", component: Bs},

        {path: "/allplan",name: "allplan", component: AllPlan},

        
    ]
})