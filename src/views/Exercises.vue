<template>
  <body>
    <div class="exercises">
      <h1>This is Exercises page</h1>  
      <h2>BORRAR Y EDITAR EJERCICIOS</h2>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
        <!-- <v-btn text slot="activator"> -->
        <v-btn style="margin-left: 400px;" text v-on="on">
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
  
   <v-col cols="12" md="3">
     <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn style="margin-left: 1100px;" color="#F06292" elevation="2" rounded v-bind="attrs" v-on="on" >New exercise</v-btn>
      </template>
     <v-card color="#2d4059">
        <v-card-title  color="white" >
          <span class="white--text">
            <span class="headline">Add new exercise</span>
          </span>
        </v-card-title>
        
        <v-card-text class="white--text" >
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" >
                <v-select  :items="['Upper body', 'Middle body', 'Lower mody', 'maxi sos gay?']" label="Body area*" required ></v-select>
              </v-col>
              <v-col cols="12" sm="6" >
                <v-select :items="['Time', 'Reps']" label="Type of exercise*" required >
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
          <v-btn color="white" text @click="dialog = false" >
            Cancel
          </v-btn>
          <v-btn color="white" text @click="dialog = false" >
            Accept
          </v-btn>
        </v-card-actions>  
      </v-card>
      </v-dialog>
   </v-col>

  <div align="center">
    <v-btn class="my-6" v-for="(i,j) in slides" :key="i" rounded color="#2d4059" dark width="1000px" height="100px">
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
        dialog: false,
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

