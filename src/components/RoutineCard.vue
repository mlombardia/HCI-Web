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
            <span class="headline">Routine details</span>
            </span>
            <v-btn icon color="pink" >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-title>
          
          <v-card-text class="white--text" >
            <v-container>
              <v-row>
              </v-row>
              <v-row>
                <v-col cols="12" sm="4" >
                  <v-select v-model="workout_type" :items="workout_type" label="Workout type" required ></v-select>
                </v-col>
                <v-col cols="12" sm="4" >
                  <v-text-field label="Qty." required>
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="4" >
                  <v-select :items="['Time', 'Reps']" label="Type of exercise*" required >
                  </v-select>
                </v-col>
                <v-col cols="12">
                  <v-select :items="workout_level" label="Difficulty" required >
                  </v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Add image" required>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Add description" required>
                  </v-text-field>
                </v-col>
                
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="white" text @click="dialog2 = false" >
              Cancel
            </v-btn>
            <v-btn color="white" text @click="dialog2 = false" >
              Accept
            </v-btn>
          </v-card-actions>  
        </v-card>
        </v-dialog>
        </template>
        <script>
        export default {
            props:{
                routine: {}
            },
    data: () => ({
        dialog2: false,
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
      
    })
        }
    </script>