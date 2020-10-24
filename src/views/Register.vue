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
    <div class="register" align="center" >
    <v-card elevation="24" width="600" height="900" color = "#2d4059"  >
        <v-card-title align = "center" >
            <span class="white--text">Register</span>
        </v-card-title>
    
      <v-col cols="12">
                <v-text-field label="Name" v-model="name" required>
                </v-text-field>

                <v-text-field label="Email" v-model="email" required>
                </v-text-field>

                <v-text-field label="Phone" v-model="phone" required>
                </v-text-field>
                
                <v-text-field label="Weight" >
                </v-text-field>

                <v-text-field label="Height" >
                </v-text-field>
                
                <v-select :items="['male', 'female', 'other']" label="Gender" v-model="gender" required>
                </v-select>

                <v-text-field label="Age" v-model="age" required>
                </v-text-field>

                <v-text-field label="User" v-model="user" required>
                </v-text-field>

                <v-text-field label="Avatar" v-model="avatar" required>
                </v-text-field>

                <v-text-field label="Password" v-model="password" required>
                </v-text-field>

                <v-text-field v-model="psw2" label="Confirm password" required>
                </v-text-field>

                <a href="/login">
                    <v-btn class="white--text" color="#F06292" elevation="2" rounded  >Cancel</v-btn>
                </a>
                
                <v-btn class="white--text" @click="register" color="#F06292" elevation="2" rounded >Register</v-btn>
                
        </v-col>

    </v-card>
  </div>
</template>
<script>
    import {UserApi} from '@/user'
    export default {
    data () {
      return {
       name: null,
       email: null,
       phone: null,
       gender: null,
       age: null,
       user: null,
       avatar: null,
       password: null
      }
    },
    methods: {
        register(){
            var data = {
                username: this.user,
                password: this.password.toString(),
                fullName: this.name,
                gender: this.gender,
                birthdate: parseInt(this.age),
                email: this.email,
                phone: this.phone.toString(),
                avatarUrl: this.avatar
            }
            
            UserApi.register(data);
            
        }
    },
    created(){    
    }
  }

</script>
