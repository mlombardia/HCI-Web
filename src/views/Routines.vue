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
                  <v-col cols="12">
                    <v-text-field v-model="routineName" label="New Routine" required>
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
                    <v-select v-model="category" :items="categories" item-value="id" item-text="name" label="Category">
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
              <v-btn color="white" text @click="dialog = false">
                Cancel
              </v-btn>
              <v-btn color="white" text  @click="createRoutine" >
                Create Routine
              </v-btn>
            </v-card-actions>  
          </v-card>
          </v-dialog>
        </v-col>
      </div>
      <div style="float: right; margin-right: 70px; margin-top: 5px;">
        <v-col cols="12" md="3">
        <v-dialog v-model="dialog5" width="500" :visible="false">
        <v-card color="#2d4059">
            <v-card-title  color="white" >
              <span class="white--text">
                <span class="headline">Add exercices
                </span>
              </span>
            </v-card-title>
            <v-card-text class="white--text" >
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="New Routine" required>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-select :options="categories" :reduce="category => category.id" label="Category" required >
                    </v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-select :items="workout_level" label="Difficulty" required >
                    </v-select>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" text @click="dialog5 = false">
                Cancel
              </v-btn>
              <v-btn color="white" text @click="dialog5 = false" >
                Accept
              </v-btn>
            </v-card-actions>  
          </v-card>
          </v-dialog>
        </v-col>
      </div>
      <br style="clear: both;">
      <v-flex  v-for="routine in routines" :key="routine.id" >
      <RoutineCard :routine="routine"></RoutineCard>
      </v-flex>
    </div>
    </div>
  </div>
  
</template>

<script>
  // import {RoutinesApi} from '@/routines'
  import {UserApi} from '@/user'
  import {CategoriesApi} from '@/categories'
  import {RoutinesApi} from '@/routines'
  import RoutineCard from '../components/RoutineCard.vue'
  export default {
    name: 'Routines',
    components: {
      'RoutineCard': RoutineCard
    },
    data: () => ({
     
        dialog: false,
        dialog5: false,
        routines: [],
        user: null,
        isPublic: null,
        cant: 0,
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
      
    }),
    methods: {
      getRoutines(){
        UserApi.getUserRoutines().then(data=>{
            this.routines = data.results;
            this.routines.forEach(routine=> routine["categories"] = this.categories);
        });
      },
      getAllRoutines(){
        RoutinesApi.getRoutines().then(data=>{
          //window.alert(data.totalCount);
          this.routines = data.results;
        });
      },

      getCategories(){
        CategoriesApi.get().then(data=>{
          for(var j = 0; j < data.totalCount; j++){
            this.categories.push({name: data.results[j].name, id: data.results[j].id});
          }
        });
      },

      createRoutine(){
        var data = {
          name: this.routineName,
          detail: this.routineDetail,
          isPublic: this.isPublic,
          difficulty: this.difficulty,
          category: {
            id: parseInt(this.category)
          }
        }
        RoutinesApi.add(data);
        this.dialog = false;
      }
    },
    created(){
      
      // UserApi.getuser(1).then(data=>{
      //   this.user = data;
      //   window.alert(JSON.stringify(this.user));
      // });
      //this.getRoutines();
      // for(var x = 0; x < 200; x++){
      //   CategoriesApi.del(x);
      // }
      // CategoriesApi.add({"name": "Full Body", "detail": "Full Body"});
      // CategoriesApi.add({"name": "Legs", "detail": "Legs"});
      // CategoriesApi.add({"name": "Middle Body", "detail": "Middle Body"});
      // CategoriesApi.add({"name": "Upper Body", "detail": "Upper Body"});
      this.getCategories();
      this.getRoutines();
      
      
      
      
      
    },
    updated(){
      this.getCategories();
      this.getRoutines();
      //window.alert(this.routines.length);
    }
  }
</script>