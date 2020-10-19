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
           <h2 class="white--text"> Marcelo Gallardo </h2>
           <h3 class="white--text"> 28 years old </h3>
           <h3 class="white--text"> 78 kg </h3>
           <h3 class="white--text"> 182 cm </h3>
              
        <v-col cols="12">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="white--text" color="#F06292" elevation="2" rounded v-bind="attrs" v-on="on" >Edit</v-btn>
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
                <v-text-field label="Name" required>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Age" required>
                </v-text-field>
              </v-col>
               <v-col cols="12">
                <v-text-field label="Weight" required>
                </v-text-field>
              </v-col>
               <v-col cols="12">
                <v-text-field label="Height" required>
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
          <v-btn color="white" text @click="dialog = false" >
            Accept
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
          <h4 class="white--text"> Marcelo Daniel Gallardo (Merlo, Buenos Aires; 18 de enero de 1976) es un exfutbolista y entrenador argentino que dirige al Club Atlético River Plate. Con River ganó cuatro campeonatos nacionales y siete internacionales, siendo el entrenador más exitoso en la historia del club. En AS Mónaco fue elegido mejor jugador de la Liga Francesa en 2000. Con la selección argentina disputó 46 partidos, anotó 14 goles y fue convocado a los Mundiales de Francia 1998 y Corea del Sur/Japón 2002. </h4>

      <v-col cols="12">
           <v-col cols="12" md="3">
     <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="white--text" color="#F06292" elevation="2" rounded v-bind="attrs" v-on="on" >Edit</v-btn>
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
          <v-btn color="white" text @click="dialog = false" >
            Accept
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
