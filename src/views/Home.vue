<template>
  <div class="home">
    <h1>Home</h1>
  
    <v-stepper color="#2d4059" v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1" >
      Select a routine
      <small>Summarize if needed</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-12" height="200px" ></v-card>
      
      <v-btn color="#2d4059" @click="e6 = 2" >
        <span class="white--text">
        Next step
        </span>
      </v-btn>
      
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2" >
      Press start routine
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-12" height="200px" ></v-card>
      <v-btn color="#2d4059" @click="e6 = 3" >
       <span class="white--text">
        Next step
        </span>
      </v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3" >
      Do your routine!
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card  color="grey lighten-1" class="mb-12" height="200px" ></v-card>
      <v-btn color="#2d4059" @click="e6 = 4" >
        <span class="white--text">
        Next step
        </span>
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      Add your routine to favourites!
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-12" height="200px" ></v-card>
      <v-btn color="#2d4059" @click="e6 = 1" >
        <span class="white--text">
        Next step
        </span>
      </v-btn>
      
    </v-stepper-content>
  </v-stepper>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        e6: 1,
      }
    },
  }
</script>