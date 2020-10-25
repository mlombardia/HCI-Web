<style>
  

</style>
<template>
<v-dialog v-model="dialog2" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="my-6" color="#2d4059" dark width="1000px" height="100px" elevation="2" v-bind="attrs" v-on="on" rounded>
              <v-row>
                <v-col>{{routine.category.name}}</v-col>
                <v-col>{{routine.difficulty}}</v-col>
                <v-col>{{routine.name}}</v-col>
                <v-col>{{routine.averageRating}}</v-col>
              </v-row>
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
                    <v-text-field v-model="routineName" label="Routine Name" required>
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
                    <v-select v-model="category" :items="cats" item-value="id" item-text="name" label="Category">
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
            <v-col cols="12">
              <v-row>
              <v-btn color="white" text @click="dialog4 = true">
                Add exercices
              </v-btn>
              </v-row>
              <v-row>
              <v-btn color="white" text @click="dialog2 = false">
                Cancel
              </v-btn>
              <v-spacer></v-spacer>
              
              <v-btn color="red" text @click="dialog3 = true">
                Delete Routine
              </v-btn>
              <v-dialog v-model="dialog3" width="530">
                <v-card color="#2d4059" >
                  <v-card-title>
                    <span class="white--text headline">Are you sure you want to delete this routine?</span>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn color="white" text  @click="dialog3 = false" >
                      Cancel
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="red" text  @click="deleteRoutine" >
                      Delete
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-btn color="white" text  @click="editRoutine" >
                Save Routine
              </v-btn>
              </v-row>
              </v-col>
            </v-card-actions>  
          </v-card>
          <div style="float: right; margin-right: 70px; margin-top: 5px;">
        <v-col cols="12" md="3">
        <v-dialog v-model="dialog4" width="1200" :visible="false">
        <v-card color="#2d4059">
            <v-card-title  color="white" >
              <span class="white--text">
                <span class="headline">Add exercices
                </span>
              </span>
            </v-card-title>
            <v-col cols="12">
                <v-select v-model="cycle" :items="cycles" item-value="id" item-text="name" label="Cycle">
                </v-select>
              </v-col>
            <body>
              <div class="exercise-container">
                <div class="all-excercises-container">
                  <p color="white">All Exercises</p>
                  <div class="all-exercises">
                      <!-- aca van los ejercicios -->
                      <v-flex v-for="exercise in allExercises" :key="exercise.id">
                        <v-btn @click="addExercice(exercise)" style="width:450px; height:100px; margin:10px; border-radius:30px;">
                        <ExerciseCard v-bind:exercise="exercise"></ExerciseCard>
                        </v-btn>
                      </v-flex>
                  </div>
                </div>
                <span class="flecha">- ></span>
                <div class="added-exercises-container">
                    <p>Added Exercises</p>
                    <div class="added-exercises" v-if="cycle == cycles[0].id">
                        <!-- aca van los ejercicios AGREGADOS -->
                        <v-flex  v-for="exercise in addedExercisesWarmup" :key="exercise.id" >
                        <v-btn @click="removeExerciseW(exercise)" style="width:450px; height:100px; margin:10px; border-radius:30px;">
                        <ExerciseCard v-bind:exercise="exercise"></ExerciseCard>
                        </v-btn>
                        </v-flex>
                    </div>
                    <div class="added-exercises" v-if="cycle == cycles[1].id">
                        <!-- aca van los ejercicios AGREGADOS -->
                        <v-flex  v-for="exercise in addedExercisesExercise" :key="exercise.id" >
                        <v-btn @click="removeExerciseE(exercise)" style="width:450px; height:100px; margin:10px; border-radius:30px;">
                        <ExerciseCard v-bind:exercise="exercise"></ExerciseCard>
                        </v-btn>
                        </v-flex>
                    </div>
                    <div class="added-exercises" v-if="cycle == cycles[2].id">
                        <!-- aca van los ejercicios AGREGADOS -->
                        <v-flex  v-for="exercise in addedExercisesCooldown" :key="exercise.id" >
                        <v-btn @click="removeExerciseC(exercise)" style="width:450px; height:100px; margin:10px; border-radius:30px;">
                        <ExerciseCard v-bind:exercise="exercise"></ExerciseCard>
                        </v-btn>
                        </v-flex>
                    </div>
                </div>
              </div>
            </body>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" text @click="dialog4 = false">
                Cancel
              </v-btn>
              <v-btn color="white" text @click="addExercisesToCycles" >
                Accept
              </v-btn>
            </v-card-actions>  
          </v-card>
          </v-dialog>
        </v-col>
      </div>
        </v-dialog>
        </template>
  <script>
            import ExerciseCard from './ExerciseCard'
            import {RoutinesApi} from '@/routines'
            import {CyclesApi} from '@/cycles'
            import {UserApi} from '@/user'
            import {ExercisesApi} from '@/exercises'
            export default {
                props: {
                  routine: Object
                },
                components: {
                  'ExerciseCard': ExerciseCard
                },
            data: () => ({
                dialog2: false,
                dialog3: false,
                dialog4: false,
                cycle:null,
                links: [
                  { icon: 'name', text: 'Name', route: '/exercises'},
                  { icon: 'Body section', text: 'Body section', route: '/'},
                  { icon: 'Instensity', text: 'Intensity', route: '/'},
                ],
                routin: null,
                isPublic: null,
                cycles: [],
                cats: [],
                category: null,
                difficulties: ['rookie', 'beginner', 'intermediate', 'advanced', 'expert'],
                difficulty: null,
                routineName: null,
                routineDetail: null,
                addedExercisesWarmup: [],
                addedExercisesExercise: [],
                addedExercisesCooldown: [],
                allExercises: [],
                id_routine: null,
                id_cycle: null,

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
            mounted(){
              //window.alert(parseInt(1));
              this.routin = this.routine;
              UserApi.getUserRoutines().then((data) => {
                this.id_routine = parseInt(data.results[0].id);
                RoutinesApi.getCycles(parseInt(this.id_routine)).then((dat) => {
                  this.id_cycle = parseInt(dat.results[0].id);
                  ExercisesApi.getExercises(this.id_routine, this.id_cycle).then(da=>{
                  this.allExercises = da.results;
                 });
                });
               
              });
              this.cats = this.routin.categories;
              this.isPublic = this.routin.isPublic;
              this.category = this.routin.category.id;
              this.difficulty = this.routin.difficulty;
              this.routineName = this.routin.name;
              this.routineDetail = this.routin.detail;
              this.getCycles();
              

            },
            methods: {
              hola(){
                window.alert("hola");
              },
              removeExerciseW(exercise){
                ExercisesApi.deleteExercise(parseInt(this.routin.id), parseInt(this.cycles[0].id), parseInt(exercise.id));
                //window.alert(this.addedExercisesWarmup.indexOf(exercise));
                this.addedExercisesWarmup.splice(this.addedExercisesWarmup.indexOf(exercise),1);
              },
              removeExerciseE(exercise){
                ExercisesApi.deleteExercise(parseInt(this.routin.id), parseInt(this.cycles[1].id), parseInt(exercise.id));
                this.addedExercisesExercise.splice(this.addedExercisesExercise.indexOf(exercise),1);
              },
              removeExerciseC(exercise){
                ExercisesApi.deleteExercise(parseInt(this.routin.id), parseInt(this.cycles[2].id), parseInt(exercise.id));
                this.addedExercisesCooldown.splice(this.addedExercisesCooldown.indexOf(exercise),1);
              },
              addExercice(exercise){
                   if(this.cycle == this.cycles[0].id){
                        exercise.add = true;
                        this.addedExercisesWarmup.push(exercise);
                   }
                   else if(this.cycle == this.cycles[1].id){
                     exercise.add = true;
                     this.addedExercisesExercise.push(exercise);
                   }
                   else{
                     exercise.add = true;
                    this.addedExercisesCooldown.push(exercise);
                   }
               },
              addExercisesToCycles(){
                this.addedExercisesWarmup.forEach(element => {if(element.add){ ExercisesApi.add(parseInt(this.routin.id), parseInt(this.cycles[0].id), element.name, element.detail, element.type, element.duration, element.repetitions); element.add = false;}});
                this.addedExercisesExercise.forEach(element => {if(element.add){ ExercisesApi.add(parseInt(this.routin.id), parseInt(this.cycles[1].id), element.name, element.detail, element.type, element.duration, element.repetitions); element.add = false;}});
                this.addedExercisesCooldown.forEach(element => {if(element.add){ ExercisesApi.add(parseInt(this.routin.id), parseInt(this.cycles[2].id), element.name, element.detail, element.type, element.duration, element.repetitions); element.add = false;}});
                this.dialog4 = false;
              },
              editRoutine(){
                var data = {
                    name: this.routineName,
                    detail: this.routineDetail,
                    isPublic: this.isPublic == "true" ? true : false,
                    difficulty: this.difficulty,
                    category: {
                      id: parseInt(this.category)
                    }
                  }
                  RoutinesApi.updateRoutine(parseInt(this.routin.id) ,data);
                  // window.alert(JSON.stringify(data));
                  this.dialog2 = false;
              },
              deleteRoutine(){
                this.cycles.forEach(cycle=>{
                  ExercisesApi.getExercises(parseInt(this.routin.id), parseInt(cycle.id)).then(data=>{
                    var exers = data.results;
                    exers.forEach(ex=> ExercisesApi.deleteExercise(parseInt(this.routin.id), parseInt(cycle.id), parseInt(ex.id)));
                  });
                  CyclesApi.deleteCycle(parseInt(this.routin.id), parseInt(cycle.id));
                });
                RoutinesApi.deleteRoutine(parseInt(this.routin.id));
                this.dialog3 = false;
                this.dialog2 = false;
              },
              getCycles(){
                CyclesApi.getRoutineCycles(parseInt(this.routin.id)).then(data=>{
                  if(data.totalCount <= 0){
                    CyclesApi.add(parseInt(this.routin.id),{"name": "Warmup", "detail": "Fast Warmup", "type": "warmup", "order": 1, "repetitions": 1}).then(firstcycle=>{
                      this.cycles.push(firstcycle);
                    });
                    CyclesApi.add(parseInt(this.routin.id),{"name": "Exercise", "detail": "Exercise", "type": "exercise", "order": 2, "repetitions": 1}).then(secondcycle=>{
                      this.cycles.push(secondcycle);
                    });
                    CyclesApi.add(parseInt(this.routin.id),{"name": "Cooldown", "detail": "Cooldown", "type": "cooldown", "order": 3, "repetitions": 1}).then(thirdcycle=>{
                      this.cycles.push(thirdcycle);
                    });
                  } else {
                    this.cycles = data.results;
                  }
                  this.cycle = parseInt(this.cycles[0].id);
                  this.cycles.forEach(element => ExercisesApi.getExercises(parseInt(this.routin.id), parseInt(element.id)).then(data => { 
                  if(this.cycles[0].id == element.id){
                    this.addedExercisesWarmup = data.results;
                    this.addedExercisesWarmup.forEach(elem=> elem["add"]=false)
                  }
                  else if(this.cycles[1].id == element.id){
                    this.addedExercisesExercise = data.results;
                    this.addedExercisesExercise.forEach(elem=> elem["add"]=false)
                  }
                  else {
                    this.addedExercisesCooldown = data.results;
                    this.addedExercisesCooldown.forEach(elem=> elem["add"]=false)
                  }
                  //window.alert(this.addedExercisesWarmup.length);
                }));
                });
              }
            }
            }
  </script>