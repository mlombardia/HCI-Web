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
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <!-- <v-btn text slot="activator"> -->
          <v-btn style="margin-left: 400px" text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Filter by</span>
          </v-btn>
        </template>
        <v-list>
          <!-- v-list-tile is changed to v-list-item -->
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
                <v-col cols="12" >
                  <v-text-field v-model="exerciseName" label="Name" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="exerciseDetail" label="Detail" required> </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="exerciseType" label="Type" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="exerciseDuration" label="Duration" required> </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="exerciseRepetitions" label="Repetitions" required></v-text-field>
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
          <v-col>{{ exercise.id }}</v-col>
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
            <span class="white--text">
              <span class="headline">Exercise details</span>
            </span>
            <v-btn icon color="pink">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="white--text">
            <v-container>
              <v-row> </v-row>
              <v-row>
                <v-col cols="12" >
                  <v-text-field v-model="exerciseModiName" label="Name" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="exerciseModiDetail" label="Detail" required> </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="exerciseModiType" label="Type" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="exerciseModiDuration" label="Duration" required> </v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="exerciseModiRepetitions" label="Repetitions" required></v-text-field>
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
      slides: ["Squats", "Planks", "Burpees", "Crunches", "Sit Ups"],
      bodyparts: ["20 Reps", "30 Secs", "10 Reps", "10 Reps", "25 Reps"],
      workout_type: ["Legs", "Abs", "Legs", "Abs", "Arms"],
      workout_level: [
        "Begginer",
        "Intermediate",
        "Expert",
        "Intermediate",
        "Expert",
      ],
      links: [
        { icon: "name", text: "Name", route: "/exercises" },
        { icon: "Body section", text: "Body section", route: "/" },
        { icon: "Instensity", text: "Intensity", route: "/" },
      ],
    };
  },
  updated(){
    ExercisesApi.getExercises().then((data) => {
      //eslint-disable-next-line
      console.log("data results", data.results);
      this.routine = data;
      this.exercises = data.results;
    });
  },
  created() {
    //this.addExercise();
    //this.deleteExercise(2);
    //const result = ExercisesApi.getExercises();
    //window.alert(Api.token);
    //window.alert(JSON.stringify(ExercisesApi.getExercises()));}

    ExercisesApi.getExercises().then((data) => {
      //eslint-disable-next-line
      console.log("data results", data.results);
      this.routine = data;
      this.exercises = data.results;
    });
    /*var data = UserApi.get();
       UserApi.get().then(data=>{
         this.user = data;
        window.alert(JSON.stringify(this.user));
       });*/

    /*if (data != null){
        for(var i=0; i < data[0].totalCount; i++){
          this.exercises.push(data[0].results[i]);
        }
      }*/

    /*var response = UserApi.get();
      this.user = response
      window.alert(JSON.stringify(this.user));*/
    /*UserApi.get().then(data=>{
         this.user = data;
        window.alert(JSON.stringify(this.user));
       });*/

    /*var response = UserApi.get();
      UserApi.get().then(window.alert(JSON.stringify()))
      window.alert(JSON.stringify(UserApi.get()));*/
  },
  methods: {
    addExercise() {
      //eslint-disable-next-line
      console.log("LOS DATOS SON ", this.exerciseName, this.exerciseDetail, this.exerciseType, this.exerciseDuration, this.exerciseRepetitions);
      ExercisesApi.add(this.exerciseName, this.exerciseDetail, this.exerciseType, parseInt(this.exerciseDuration), parseInt(this.exerciseRepetitions));
      this.dialog = false;
    },
    /*editExercise(){
        ExercisesApi.udpateExercise()
      }*/
    deleteExercise(id) {
      ExercisesApi.deleteExercise(id);
    },
    opendialog(exercise) {
      this.dialog2 = true;
      //eslint-disable-next-line
      console.log("EJERCICIO", exercise.id);
    },
    editExercise(){
         var data = {
            name: this.exerciseModiName,
            detail: this.exerciseModiDetail,
            type: this.exerciseModiType,
            duration: parseInt(this.exerciseModiDuration),
            repetitions: parseInt(this.exerciseModiRepetitions)
          }
          ExercisesApi.updateExercise(3, data);
          window.alert(JSON.stringify(data));
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

<!--

FORMATO DEL JSON :

{
  "name": "Jumping Jacks",
  "detail": "Jumping Jacks",
  "type": "exercise",
  "duration": 30,
  "repetitions": 0
}

 -->


 <!--

ANTES DE EJECUTARSE: jj, cr, asd

AGREGO asd (ya esta)

MODIFICAR ALGUN EJ

 -->