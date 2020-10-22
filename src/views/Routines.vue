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
                  <v-col cols="12" sm="4" >
                    <v-select :items="['Upper body', 'Middle body', 'Lower mody']" label="Body area*" required ></v-select>
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
      </div>
      </div>
      <br style="clear: both;">
    <v-dialog v-model="dialog2" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-for="(i,j) in slides" :key="i" class="my-6" color="#2d4059" dark width="1000px" height="100px" elevation="2" v-bind="attrs" v-on="on" rounded>
            <v-row>
              <v-col>{{i}}</v-col>
              <v-col>{{bodyparts[j]}}</v-col>
              <v-col>{{workout_type[j]}}</v-col>
              <v-col>{{workout_level[j]}}</v-col>
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
    </div>
  </div>
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
        dialog2: false,
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
    created(){  
    }
  }
</script>