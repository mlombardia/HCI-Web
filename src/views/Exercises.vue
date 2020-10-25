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
</style>
<template>
  <body>
    <div class="exercises">
      <h1 align="center" style="margin-top: 15px">Exercises</h1>
      <v-row>
        <v-col cols="12" sm="6">
          <v-select v-model="filterCriteria" :items="criteria" label="Filter By" required style="margin-left: 500px"></v-select>
        </v-col>
      </v-row>
    </div>

    <v-col cols="12" md="3">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="white--text"
            style="margin-left: 1100px"
            color="#F06292"
            elevation="2"
            rounded
            v-bind="attrs"
            v-on="on"
            >New exercise
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card color="#2d4059">
          <v-card-title color="white">
            <span class="white--text">
              <span class="headline">Add new exercise </span>
            </span>
          </v-card-title>

          <v-card-text class="white--text">
            <v-container>
              <v-row> </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="exerciseName"
                    label="Name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="exerciseDetail"
                    label="Detail"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="exerciseType"
                    :items="types"
                    label="Type"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="exerciseDuration"
                    label="Duration"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="exerciseRepetitions"
                    label="Repetitions"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="white" text @click="dialog = false"> Cancel </v-btn>
            <v-btn color="white" text @click="addExercise"> Accept </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>

    <div align="center">
      <!-- { "id": 2, "name": "Crunches", "detail": "Crunches", "type": "exercise", "duration": 30, "repetitions": 0, "order": 2 } -->

      <v-btn
        v-for="exercise in exercises"
        :key="exercise.id"
        class="my-6"
        color="#2d4059"
        dark
        width="1000px"
        height="100px"
        elevation="2"
        v-bind="attrs"
        v-on="on"
        rounded
        @click="opendialog(exercise)"
      >
        <v-row>
          <v-col>{{ exercise.name }}</v-col>
          <v-col>{{ exercise.detail }}</v-col>
          <v-col>{{ exercise.type }}</v-col>
          <v-col>{{ exercise.duration }}</v-col>
          <v-col>{{ exercise.repetitions }}</v-col>
        </v-row>
      </v-btn>
      <v-dialog v-model="dialog2" width="500">
        <v-card color="#2d4059">
          <v-card-title color="white">
            <v-row>
              <v-col cols="12" sm="7">
                <span class="white--text">
                  <span class="headline">Exercise details</span>
                </span>
                <v-btn icon color="pink">
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
              </v-col>
              <v-card-actions>
                <v-btn color="white" text @click="deleteExercise">
                  Delete Exercise
                </v-btn>
              </v-card-actions>
            </v-row>
          </v-card-title>

          <v-card-text class="white--text">
            <v-container>
              <v-row> </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="exerciseModiName"
                    label="Name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="exerciseModiDetail"
                    label="Detail"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="exerciseModiType"
                    :items="types"
                    label="Type"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="exerciseModiDuration"
                    label="Duration"
                    required
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="exerciseModiRepetitions"
                    label="Repetitions"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="white" text @click="dialog2 = false"> Cancel </v-btn>
            <v-btn color="white" text @click="editExercise"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!--<div align="center">
    <v-btn class="my-6" v-for="(i,j) in slides" :key="i" rounded color="#2d4059" dark width="1000px" height="100px">
      <v-row>
      <v-col>{{i}}</v-col>
      <v-col>{{bodyparts[j]}}</v-col>
      <v-col>{{workout_type[j]}}</v-col>
      <v-col>{{workout_level[j]}}</v-col>
      <v-btn icon color="pink" >
              <v-icon>mdi-heart</v-icon>
      </v-btn>
      </v-row>
    </v-btn>
  </div>-->
  </body>
</template>

<script>
//import {SportApi} from '@/sport'
//import {Api} from '@/api'
import { ExercisesApi } from "@/exercises";
import { RoutinesApi } from "@/routines";
//import {UserApi} from '@/user'
export default {
  data() {
    return {
      /* colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],*/
      dialog: false,
      dialog2: false,
      routine: null,
      exercises: null,
      currentId: null,
      total_routines: null,
      total_cycles: null,
      total_exercises: null,
      total_total_exercises: null,
      id_routine: null,
      id_cycle: null,
      filterCriteria: "id",
      slides: ["Squats", "Planks", "Burpees", "Crunches", "Sit Ups"],
      bodyparts: ["20 Reps", "30 Secs", "10 Reps", "10 Reps", "25 Reps"],
      workout_type: ["Legs", "Abs", "Legs", "Abs", "Arms"],
      types: ["exercise", "rest"],
      workout_level: [
        "Begginer",
        "Intermediate",
        "Expert",
        "Intermediate",
        "Expert",
      ],
      criteria: ["id", "name", "detail", "type", "duration", "repetitions"],
    };
  },
  updated() {
    ExercisesApi.getExercises(this.id_routine, this.id_cycle, this.filterCriteria).then((data) => {
          //eslint-disable-next-line
          console.log("data results", data.results);
          this.routine = data;
          this.exercises = data.results;
    });
  },
  created() {
    /*
    ------------------CODIGO DE DEMO PARA MOSTRAR SOLUCION PENSADA-------------------------
    ------------------PARA LEVANTAR TODOS LOS EJERCICIOS CREADOS POR USUARIO---------------
    RoutinesApi.getCurrentUserRoutines().then((data) => {
      this.total_routines = data.results;
      data.results.forEach((routine) => {
        RoutinesApi.getCycles(routine.id).then((cycles) => {
          this.total_cycles = cycles.results;
          cycles.forEach((cycle) => {
            ExercisesApi.getExercises(routine.id, cycle.id).then(
              (exercises) => {  
                this.total_exercises = exercises.results;
                this.total_total_exercises.push(exercises);
              }
            );
          });
        });
      });
    });*/

    RoutinesApi.getCurrentUserRoutines().then((data) => {
      this.id_routine = data.results[0].id;
      RoutinesApi.getCycles(this.id_routine).then((data) => {
        this.id_cycle = data.results[0].id;
        ExercisesApi.getExercises(this.id_routine, this.id_cycle, this.filterCriteria).then((data) => {
          //eslint-disable-next-line
          console.log("data results", data.results);
          this.routine = data;
          this.exercises = data.results;
    });
      })
    });

    /*ExercisesApi.getExercises(1, 1).then((data) => {
      //eslint-disable-next-line
      console.log("data results", data.results);
      this.routine = data;
      this.exercises = data.results;
    });*/
  },
  methods: {
    addExercise() {
      //eslint-disable-next-line
      console.log(
        "LOS DATOS SON ",
        this.exerciseName,
        this.exerciseDetail,
        this.exerciseType,
        this.exerciseDuration,
        this.exerciseRepetitions
      );
      ExercisesApi.add(
        this.id_routine, this.id_cycle,
        this.exerciseName,
        this.exerciseDetail,
        this.exerciseType,
        parseInt(this.exerciseDuration),
        parseInt(this.exerciseRepetitions)
      );
      this.dialog = false;
    },
    /*editExercise(){
        ExercisesApi.udpateExercise()
      }*/
    deleteExercise() {
      ExercisesApi.deleteExercise(this.id_routine, this.id_cycle, this.currentId);
      this.dialog2 = false;
    },
    opendialog(exercise) {
      this.currentId = exercise.id;
      ExercisesApi.getExercise(this.id_routine, this.id_cycle, parseInt(this.currentId)).then((data) => {
        //eslint-disable-next-line
        console.log("data results", data.results);
        this.exerciseModiName = data.name;
        this.exerciseModiDetail = data.detail;
        this.exerciseModiType = data.type;
        this.exerciseModiDuration = data.duration;
        this.exerciseModiRepetitions = data.repetitions;
      });
      this.dialog2 = true;
      //eslint-disable-next-line
      console.log("EJERCICIO", exercise.id);
    },
    editExercise() {
      var data = {
        name: this.exerciseModiName,
        detail: this.exerciseModiDetail,
        type: this.exerciseModiType,
        duration: parseInt(this.exerciseModiDuration),
        repetitions: parseInt(this.exerciseModiRepetitions),
      };
      ExercisesApi.updateExercise(this.id_routine, this.id_cycle, parseInt(this.currentId), data);
      this.dialog2 = false;
    },
    /*modifyExercise(){
      //eslint-disable-next-line
      console.log("LOS DATOS SON ",this.exerciseModiName, this.exerciseModiDetail, this.exerciseModiType, this.exerciseModiDuration, this.exerciseModiRepetitions);
      ExercisesApi.update(3,this.exerciseModiName, this.exerciseModiDetail, this.exerciseModiType, parseInt(this.exerciseModiDuration), parseInt(this.exerciseModiRepetitions)).then((data)=>{
        var i;
        for (i = 0; i < this.exercises.length; i++) {
          if (this.exercises[i].id == 3){
            this.exercises[i] = data;
          }
        } 
      });
      this.dialog2 = false;
    }*/
  },
};
</script>