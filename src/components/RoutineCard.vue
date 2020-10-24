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
              <v-spacer></v-spacer>
              <v-btn color="white" text @click="dialog2 = false">
                Cancel
              </v-btn>
              <v-btn color="white" text  @click="editRoutine" >
                Create Routine
              </v-btn>
            </v-card-actions>  
          </v-card>
        </v-dialog>
        </template>
        <script>
        import {RoutinesApi} from '@/routines'
        export default {
            props: {
              routine: Object
            },
    data: () => ({
        dialog2: false,
         links: [
          { icon: 'name', text: 'Name', route: '/exercises'},
          { icon: 'Body section', text: 'Body section', route: '/'},
          { icon: 'Instensity', text: 'Intensity', route: '/'},
        ],
        routin: null,
        isPublic: null,
        cats: [],
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
    mounted(){
      this.routin = this.routine;
      this.cats = this.routin.categories;
      this.isPublic = this.routin.isPublic;
      this.category = this.routin.category.id;
      this.difficulty = this.routin.difficulty;
      this.routineName = this.routin.name;
      this.routineDetail = this.routin.detail;
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
          RoutinesApi.updateRoutine(parseInt(this.routin.id) ,data);
          window.alert(JSON.stringify(data));
          this.dialog2 = false;
       }
    }
        }
    </script>