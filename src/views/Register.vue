<template>
    <div class="register" align="center" >
    <v-card elevation="24" width="600" height="900" color = "#2d4059"  >
        <v-card-title align = "center" >
            <span class="white--text">Register</span>
        </v-card-title>
    
      <v-col cols="12">
                <v-text-field v-model="name" label="Name" required>
                 </v-text-field>

                <v-text-field v-model="email" label="Email" required>
                </v-text-field>

                <v-text-field v-model="weight" label="Weight" required>
                </v-text-field>

                <v-text-field v-model="height" label="Height" required>
                </v-text-field>

                <v-text-field v-model="age" label="Age" required>
                </v-text-field>

                <v-text-field v-model="user" label="User" required>
                </v-text-field>

                <v-text-field v-model="psw1" label="Password" required>
                </v-text-field>

                <v-text-field v-model="psw2" label="Confirm password" required>
                </v-text-field>

                <a href="/login">
                    <v-btn class="white--text" color="#F06292" elevation="2" rounded  >Cancel</v-btn>
                </a>
                <a href="/confirmEmail">
                    <v-btn class="white--text" color="#F06292" elevation="2" rounded v-on:click="register">Register</v-btn>
                </a>
        </v-col>

    </v-card>
  </div>
</template>



<script>
  import {UserApi} from '@/user'
  export default {
    data () {
      return {
        name: '',
        email: '',
        weight: '',
        height: '',
        age: '',
        user: '',
        psw1: '',
        psw2: '',
      }
    },
    created(){
      UserApi.signup(this.user, this.psw1)
    
    }
  }
</script>

