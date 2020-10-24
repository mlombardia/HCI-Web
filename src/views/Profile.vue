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
    <h1>This is the profile page</h1>
   
    <div align="center" class="row">
      
      <div class="col-md-6 pr-md-1">
        <v-card elevation="24" width="300" height="400" color = "#2d4059"  >
         <v-col cols="12">
         <v-avatar size="102">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
          </v-avatar>
          <div>
            
          <v-row>
          <v-col class="white--text"><h3> Fullname: {{ responses.fullName }} </h3> </v-col>
          </v-row>
          <v-row>
          <v-col class="white--text"><h3> Gender: {{ responses.gender }}</h3> </v-col>
          </v-row>

          </div>
              
        <v-col cols="12">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="white--text" color="#F06292" elevation="2" rounded v-bind="attrs" v-on="on" >Edit
              <v-icon>fas fa-edit</v-icon>
              </v-btn>
         </template>
         <v-card color="#2d4059">
          <v-card-title  color="white" >
            <span class="white--text">
            <span class="headline">Edit my profile</span>
            </span>
          </v-card-title>
        
          <v-card-text class="white--text" >
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="FullName"  v-model="fullNameChange" required>
                </v-text-field>
              </v-col>
               <v-col cols="12">
                <v-select :items="['male', 'female', 'other']" label="Gender"  v-model="genderChange" required>
                </v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="white" text @click="dialog = false" >
            Cancel
          </v-btn>
          <v-btn color="white" text @click="editInfo" >
            Save
          </v-btn>
        </v-card-actions>
         
        </v-card>
        </v-dialog>
        </v-col>
      </v-col>
     </v-card>
    </div>
      
      
      <v-card elevation="24" width="650" height="300" color = "#2d4059"  >
        <v-card-title align = "center" >
          <span class="white--text">About me</span>
        </v-card-title>
          <p class="white--text" > Marcelo Daniel Gallardo (Merlo, Buenos Aires; 18 de enero de 1976) es un exfutbolista y entrenador argentino que dirige al Club Atlético River Plate. Con River ganó cuatro campeonatos nacionales y siete internacionales, siendo el entrenador más exitoso en la historia del club. En AS Mónaco fue elegido mejor jugador de la Liga Francesa en 2000. Con la selección argentina disputó 46 partidos, anotó 14 goles y fue convocado a los Mundiales de Francia 1998 y Corea del Sur/Japón 2002. </p>

      <v-col cols="12">
           <v-col cols="12" md="3">
     <v-dialog v-model="dialog4" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="white--text" color="#F06292" elevation="2" rounded v-bind="attrs" v-on="on" >
          Edit
        </v-btn>
       </template>
      <v-card color="#2d4059">
        <v-card-title  color="white" >
          <span class="white--text">
          <span class="headline">Edit about me</span>
          </span>
        </v-card-title>
        
        <v-card-text class="white--text" >
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Add description" required>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="white" text @click="dialog = false" >
            Cancel
          </v-btn>
          <v-btn color="white" text @click="changeInfo" >
            Save
          </v-btn>
        </v-card-actions>
         
      </v-card>
      </v-dialog>
      </v-col>
                  

     </v-col>
   </v-card>

  </div>

 </body>
</template>

<script>
  import {UserApi} from '@/user'
  export default {
    data () {
      return {
        responses: null,
        usermame: null,
        password: null,
        email: null,
        fullName: null,
      }
    },
    updated(){
              UserApi.get().then((data) => {
      //eslint-disable-next-line
      console.log("data", data);
      this.responses = data;
      //this.fullName = this.responses.fullName;
      });
    },
    created(){

      UserApi.get().then((data) => {
      //eslint-disable-next-line
      console.log("data", data);
      this.responses = data;
      //this.fullName = this.responses.fullName;
      });
    },
    methods: {
      editInfo(){
        var data = {
          password: "password",
          username: "username",
          fullName: this.fullNameChange,       
          email: "johndoe7@email.com",
          birthdate: 1,
          gender: this.genderChange,
        }
        UserApi.modify(data);
      }
    },

  }
</script>


