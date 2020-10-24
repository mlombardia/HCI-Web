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
    <v-card elevation="24" width="600" height="500" color = "#2d4059"  >
        <v-card-title align = "center" >
            <span class="white--text">Register</span>
        </v-card-title>
    
      <v-col cols="12">
                <v-text-field label="Name" v-model="fullName" required>
                </v-text-field>

                <v-text-field label="Email" v-model="email" required>
                </v-text-field>
                
                <v-select :items="['male', 'female', 'other']" label="Gender" v-model="gender" required>
                </v-select>

                <v-text-field label="Username" v-model="username" required>
                </v-text-field>

                <v-text-field label="Password" v-model="password" required>
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
    methods: {
        register(){
            var data = {
                username: this.username,
                password: this.password,
                fullName: this.fullName,
                gender: this.gender,
                birthdate: "1",
                email: this.email,
            }
            UserApi.register(data);
        }
    },
  }

</script>
