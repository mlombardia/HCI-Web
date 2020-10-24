<template>
    <v-dialog v-model="dialog4" width="500">
        <template v-slot:activator="{ on, attrs }">  
            <v-btn class="my-6" color="#2d4059" margin=auto dark width="450px" height="100px" elevation="2" v-bind="attrs" v-on="on" rounded @click="dialog5 = true">      
                <v-row>
                    <v-col>{{ exercise.name }}</v-col>
                    <v-col>{{ exercise.detail }}</v-col>
                    <v-col>{{ exercise.type }}</v-col>
                    <!-- <v-col>{{ exercise.duration }}</v-col> -->
                    <!-- <v-col>{{ exercise.repetitions }}</v-col> -->
                    <v-dialog v-model="dialog5" width="500" :visible="false">
                        <v-card color="#2d4059">
                            <v-card-title  color="white" >
                            <span class="white--text">
                                <span class="headline">Exercice Details
                                </span>
                            </span>
                            </v-card-title>
                            <body>
                            <v-container>
                            <v-row>
                                <v-col cols="12">
                                <v-number-field label="Duration" required>
                                </v-number-field>
                                </v-col>
                                <v-col cols="12">
                                <v-number-field label="Repetition" required>
                                </v-number-field>
                                </v-col>
                            </v-row>
                            </v-container>
                            </body>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="white" text @click="dialog5 = false">
                                Cancel
                            </v-btn>
                            <v-btn color="white" text @click="dialog5 = false ; " >
                                Accept
                            </v-btn>
                            </v-card-actions>  
                        </v-card>
                    </v-dialog>
                </v-row>
            </v-btn>
        </template>
    </v-dialog>
</template>

<script>
import {ExercisesApi} from '@/exercises'
        export default {
            props:{
                exercise: Object
            },
            data: () => ({
            dialog5: false,
        }),
         mounted(){
              this.exerc = this.exercise;
              this.cats = this.routin.categories;
              this.isPublic = this.routin.isPublic;
              this.category = this.routin.category.id;
              this.difficulty = this.routin.difficulty;
              this.exerciseName = this.exerc.name;
              this.exerciseDetail = this.exerc.detail;
            },
            methods: {
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
                  ExercisesApi.updateExercise(parseInt(this.routin.id) ,data);
                  window.alert(JSON.stringify(data));
                  this.dialog2 = false;
              }
            }
        }
        
</script>