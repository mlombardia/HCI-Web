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
                  <p>All Exercises</p>
                  <div class="all-exercises">
                      <!-- aca van los ejercicios -->
                      <v-flex v-for="exercise in allExercises" :key="exercise.id">
                        <ExerciseCard v-bind:exercise="exercise"></ExerciseCard>
                      </v-flex>
                  </div>
                </div>
                <span class="flecha">- ></span>
                <div class="added-exercises-container">
                    <p>Added Exercises</p>
                    <div class="added-exercises" v-if="cycle == cycles[0].id">
                        <!-- aca van los ejercicios AGREGADOS -->
                        <v-flex  v-for="exercise in addedExercisesWarmup" :key="exercise.id" :data="{duration: exercise.duration, repetitions: exercise.repetitions}">
                        <ExerciseCard v-bind:exercise="exercise"></ExerciseCard>
                        </v-flex>
                    </div>
                    <div class="added-exercises" v-if="cycle == cycles[1].id">
                        <!-- aca van los ejercicios AGREGADOS -->
                        <v-flex  v-for="exercise in addedExercisesExercise" :key="exercise.id" :data="{duration: exercise.duration, repetitions: exercise.repetitions}">
                        <ExerciseCard v-bind:exercise="exercise"></ExerciseCard>
                        </v-flex>
                    </div>
                    <div class="added-exercises" v-if="cycle == cycles[2].id">
                        <!-- aca van los ejercicios AGREGADOS -->
                        <v-flex  v-for="exercise in addedExercisesCooldown" :key="exercise.id" :data="{duration: exercise.duration, repetitions: exercise.repetitions}">
                        <ExerciseCard v-bind:exercise="exercise"></ExerciseCard>
                        </v-flex>
                    </div>
                    <div class="added-exercises" v-if="cycle == null">
                        <!-- aca van los ejercicios AGREGADOS -->
                    </div>
                </div>
              </div>
            </body>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" text @click="dialog4 = false">
                Cancel
              </v-btn>
              <v-btn color="white" text @click="dialog4 = false" >
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
            import ExerciseCard from '../components/ExerciseCard.vue'
            import {RoutinesApi} from '@/routines'
            import {CyclesApi} from '@/cycles'
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
              this.routin = this.routine;
              this.cats = this.routin.categories;
              this.isPublic = this.routin.isPublic;
              this.category = this.routin.category.id;
              this.difficulty = this.routin.difficulty;
              this.routineName = this.routin.name;
              this.routineDetail = this.routin.detail;
              this.getCycles();
              this.getAllExercises();
            },
            methods: {
              getAllExercises(){
              ExercisesApi.getExercises().then(data=>{
              window.alert(data.totalCount);
              this.allExercises = data.results;
        });
      },
              editRoutine(){
                var data = {
                    name: this.routineName,
                    detail: this.routineDetail,
                    isPublic: this.isPublic,
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

                RoutinesApi.deleteRoutine(this.routin.id);
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
                });
              }
            }
            }
  </script>