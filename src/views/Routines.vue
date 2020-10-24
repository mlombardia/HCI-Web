<style>
  .v-label { 
    color: white !important;
  }
  .v-select__selection {
    color: white !important;
  }
  input {
    color: white !important;
  }

  * {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
    font-family: sans-serif;
  }

.exercise-container {
    /* margin: auto; */
    position: relative;
    /* padding: 1.5rem 2rem; */
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    border-radius: 35px;
}

.flecha {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    font-weight: 900;
}

/* 
==============
LADO IZQUIERDO
==============
*/

.all-excercises-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.all-excercises-container p {
    margin-bottom: 1rem;
}

.all-exercises {
    width: 500px;
    height: 500px;
    border-radius: 35px;
    background-color: whitesmoke;
    margin-bottom: 4rem;
    overflow-y:scroll;
    overflow-x:hidden;
}

.cancel-btn {
    padding: .5rem 2rem;
    background-color: whitesmoke;
    color: black;
    width: 30%;
    border-radius: 35px;
    outline: none;
    cursor: pointer;
    border: none;
}

/* 
============
LADO DERECHO
============
*/

.added-exercises-container {
    width: 50%;
    height: 100%;
    border-radius: 35px;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
}

.added-exercises-container p {
    margin-bottom: 1rem;
}

.added-exercises {
    width: 500px;
    height: 500px;
    border-radius: 35px;
    background-color: whitesmoke;
    margin-bottom: 4rem;
}

.create-btn {
    padding: .5rem 1rem;
    background-color: whitesmoke;
    color: black;
    width: 35%;
    outline: none;
    cursor: pointer;
    border-radius: 35px;
    border: none;
    white-space: nowrap;
}
</style>
<template>
  <div class="routines">
    <h1 align="center" style="margin-top: 15px;">Routines</h1>
    <div align="center">
    <div style="width: 1000px;">
      <div style="margin-top: 20px; float: left;">
          <v-menu offset-y>
              <template v-slot:activator="{ on }">
              <!-- <v-btn text slot="activator"> -->
              <v-btn text v-on="on">
                <v-icon left>expand_more</v-icon>
                <span>Filter by</span>
              </v-btn>
              </template>
              <v-list>
                <!-- v-list-tile is changed to v-list-item -->
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                  <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
          </v-menu> 
        </div>
      <div style="float: right; margin-right: 70px; margin-top: 5px;">
        <v-col cols="12" md="3">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="white--text" color="#F06292" elevation="2" rounded v-bind="attrs" v-on="on" >New routine
              <v-icon >mdi-plus</v-icon>
            </v-btn>
          </template>
        <v-card color="#2d4059">
            <v-card-title  color="white" >
              <span class="white--text">
                <span class="headline">Add new routine
                </span>
              </span>
            </v-card-title>
            <v-card-text class="white--text" >
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="routineName" label="New Routine" required>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="routineDetail" label="Detail" required>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                  <label for="public" style="margin-right: 20px;">Public</label>
                  <input type="radio" value="true" v-model="isPublic" style="top: 2px; position: relative;">
                  <label for="private" style="margin-left: 100px; margin-right: 20px;">Private</label>
                  <input type="radio" value="false" v-model="isPublic" style="top: 2px; position: relative;">
                  </v-col>
                  <v-col cols="12">
                    <v-select v-model="category" :items="categories" item-value="id" item-text="name" label="Category">
                    </v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select v-model="difficulty" :items="difficulties" label="Difficulty" required >
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" text @click="dialog = false">
                Cancel
              </v-btn>
              <v-btn color="white" text  @click="createRoutine" >
                Create Routine
              </v-btn>
            </v-card-actions>  
          </v-card>
          </v-dialog>
        </v-col>
      </div>
      <div style="float: right; margin-right: 70px; margin-top: 5px;">
        <v-col cols="12" md="3">
        <v-dialog v-model="dialog3" width="1200" :visible="false">
        <v-card color="#2d4059">
            <v-card-title  color="white" >
              <span class="white--text">
                <span class="headline">Add exercices
                </span>
              </span>
            </v-card-title>
            <template>
              <v-container fluid>
                <v-row align="center">
                  <v-col cols="6">
                    <v-subheader>
                      Custom items
                    </v-subheader>
                  </v-col>

                  <v-col cols="6">
                    <v-select
                      v-model="select"
                      :hint="`${select.state}, ${select.abbr}`"
                      :items="items"
                      item-text="state"
                      item-value="abbr"
                      label="Select"
                      persistent-hint
                      return-object
                      single-line
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </template>
            <body>
              <div class="exercise-container">
                <div class="all-excercises-container">
                  <p>All Exercises</p>
                  <div class="all-exercises">
                      <!-- aca van los ejercicios -->
                      <v-flex v-for="exercise in allExercises" :key="exercise.id" :data="{duration: exercise.duration, repetitions: exercise.repetitions}">
                        <ExerciseCard v-bind:exercise="exercise"></ExerciseCard>
                      </v-flex>
                  </div>
                </div>
                <span class="flecha">- ></span>
                <div class="added-exercises-container">
                    <p>Added Exercises</p>
                    <div class="added-exercises">
                        <!-- aca van los ejercicios AGREGADOS -->
                        <v-flex v-for="exercise in addedExercises" :key="exercise.id" :data="{duration: exercise.duration, repetitions: exercise.repetitions}">
                        <ExerciseCard v-bind:exercise="exercise"></ExerciseCard>
                      </v-flex>
                    </div>
                </div>
              </div>
            </body>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" text @click="dialog3 = false">
                Cancel
              </v-btn>
              <v-btn color="white" text @click="dialog3 = false" >
                Accept
              </v-btn>
            </v-card-actions>  
          </v-card>
          </v-dialog>
        </v-col>
      </div>
      <br style="clear: both;">
      <v-flex  v-for="routine in routines" :key="routine.id" >
      <RoutineCard :routine="routine"></RoutineCard>
      </v-flex>
    </div>
    </div>
  </div>
  
</template>

<script>
  // import {RoutinesApi} from '@/routines'
  import {UserApi} from '@/user'
  import {CategoriesApi} from '@/categories'
  import {RoutinesApi} from '@/routines'
  import {ExercisesApi} from '@/exercises'
  import RoutineCard from '../components/RoutineCard.vue'
  import ExerciseCard from '../components/ExerciseCard.vue'
  export default {
    name: 'Routines',
    components: {
      'RoutineCard': RoutineCard,
      'ExerciseCard': ExerciseCard
    },
    data: () => ({
     
        dialog: false,
        dialog2: false,
        dialog3: false,
        dialog5: false,
        routines: [],
        allExercises: [],
        addedExercises: [],
        user: null,
        isPublic: null,
        cant: 0,
        cantExercises: 0,
         links: [
          { icon: 'name', text: 'Name', route: '/exercises'},
          { icon: 'Body section', text: 'Body section', route: '/'},
          { icon: 'Instensity', text: 'Intensity', route: '/'},
        ],
        categories: [],
        category: null,
        difficulties: ['rookie', 'beginner', 'intermediate', 'advanced', 'expert'],
        difficulty: null,
        routineName: null,
        routineDetail: null,


        slides: [
          'Squats',
          'Planks',
          'Burpees',
          'Crunches',
          'Sit Ups',
        ],
        bodyparts: [
          '20 Reps',
          '30 Secs',
          '10 Reps',
          '10 Reps',
          '25 Reps',
        ],
        workout_type: [
          'Legs',
          'Abs',
          'Legs',
          'Abs',
          'Arms'
        ],
        workout_level: [
          'Begginer',
          'Intermediate',
          'Expert',
          'Intermediate',
          'Expert'
        ],
      
    }),
    methods: {
      getAllExercises(){
        ExercisesApi.getExercises().then(data=>{
          window.alert(data.totalCount);
          this.allExercises = data.results;
        });
      },
      getRoutines(){
        UserApi.getUserRoutines().then(data=>{
            this.routines = data.results;
            this.routines.forEach(routine=> routine["categories"] = this.categories);
        });
      },
      getAllRoutines(){
        RoutinesApi.getRoutines().then(data=>{
          //window.alert(data.totalCount);
          this.routines = data.results;
        });
      },

      getCategories(){
        CategoriesApi.get().then(data=>{
          if(data.totalCount <= 0){
            CategoriesApi.add({"name": "Full Body", "detail": "Full Body"});
            CategoriesApi.add({"name": "Legs", "detail": "Legs"});
            CategoriesApi.add({"name": "Middle Body", "detail": "Middle Body"});
            CategoriesApi.add({"name": "Upper Body", "detail": "Upper Body"});
          } else {
            for(var j = 0; j < data.totalCount; j++){
              this.categories.push({name: data.results[j].name, id: data.results[j].id});
            }
          }
        });
      },

      createRoutine(){
        var data = {
          name: this.routineName,
          detail: this.routineDetail,
          isPublic: this.isPublic,
          difficulty: this.difficulty,
          category: {
            id: parseInt(this.category)
          }
        }
        RoutinesApi.add(data);
        this.dialog = false;
        this.dialog3 = true;
      }
    },
    created(){
      
      // UserApi.getuser(1).then(data=>{
      //   this.user = data;
      //   window.alert(JSON.stringify(this.user));
      // });
      //this.getRoutines();
      // for(var x = 0; x < 200; x++){
      //   CategoriesApi.del(x);
      // }
      // CategoriesApi.add({"name": "Full Body", "detail": "Full Body"});
      // CategoriesApi.add({"name": "Legs", "detail": "Legs"});
      // CategoriesApi.add({"name": "Middle Body", "detail": "Middle Body"});
      // CategoriesApi.add({"name": "Upper Body", "detail": "Upper Body"});
      this.getCategories();
      this.getRoutines();
      this.getAllExercises();
      
      
    },
    updated(){
      this.getCategories();
      this.getRoutines();
      //window.alert(this.routines.length);
    }
  }
  const dialog5=false;
  export {dialog5}
</script>