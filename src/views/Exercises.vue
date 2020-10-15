<template>
  <body>
    <div class="exercises">
      <h1>This is Exercises page</h1>  
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
    <v-row class="text-center" justify="center">
    <v-col
      cols="12"
      md="3"
    >
      <div
        class="pa-4 secondary text-no-wrap rounded-pill"
      >
        New exercises
      </div>
    </v-col>
  </v-row>
  <div align="center">
    <v-btn class="my-6" v-for="(i,j) in slides" :key="i" rounded color="primary" dark width="1000px" height="100px">
      <v-row>
      <v-col>{{i}}</v-col>
      <v-col>{{bodyparts[j]}}</v-col>
      <v-col>{{workout_type[j]}}</v-col>
      <v-col>{{workout_level[j]}}</v-col>
      </v-row>
    </v-btn>
  </div>
  </body>
</template>

<script>
  export default {
    data () {
      return {
       /* colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],*/
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
         links: [
      { icon: 'name', text: 'Name', route: '/exercises'},
      { icon: 'Body section', text: 'Body section', route: '/'},
      { icon: 'Instensity', text: 'Intensity', route: '/'},
    ],
      }
    },
  }
</script>

