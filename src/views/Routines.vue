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
            <v-btn class="white--text" color="#AB47BC" elevation="2" rounded v-bind="attrs" v-on="on" >New routine
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
      <v-dialog v-model="dialog2" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-for="routine in routines" :key="routine.id" class="my-6" color="#2d4059" dark width="1000px" height="100px" elevation="2" v-bind="attrs" v-on="on" rounded>
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
    </div>
    </div>
  </div>
  
</template>

<script>
  // import {RoutinesApi} from '@/routines'
  import {UserApi} from '@/user'
  import {CategoriesApi} from '@/categories'
  import {RoutinesApi} from '@/routines'
  export default {
    name: 'Routines',
    data: () => ({
     
        dialog: false,
        dialog2: false,
        dialog5: false,
        routines: [],
        user: null,
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
      
    }),
    methods: {
      getRoutines(){
        UserApi.getUserRoutines().then(data=>{
          for(var i = 0; i < data.totalCount; i++){
            this.routines.push(data.results[i]);
          }
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
          isPublic: true,
          difficulty: this.difficulty,
          category: {
            id: this.category
          }
        }
        this.dialog = false;
        RoutinesApi.add(data);
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
      this.getAllRoutines();
      this.getCategories();
      
      
      
      
    },
    updated(){
      this.getAllRoutines();
      this.getCategories();
      //window.alert(this.routines.length);
    }
  }
</script>