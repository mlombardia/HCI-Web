<template>
  <body>
    <div align="center" >
      
    <v-card elevation="24" width="600" height="300" color = "#2d4059"  >
      <v-card-title align = "center" >
        <span class="white--text">Gymside</span>
      </v-card-title>
    
      <v-col cols="12">
          <v-text-field label="User" v-model="username" required>
          </v-text-field>
          <v-text-field label="Password" v-model="password" required>
          </v-text-field>

          <a href="/register">
            <v-btn class="white--text" color="#F06292" elevation="2" rounded  >Sign up</v-btn>
          </a>
              <v-btn class="white--text" @click="login" color="#F06292" elevation="2" rounded >Log in</v-btn>
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
       username: null,
       password: null
      }
    },
    methods: {
        login(){
            UserApi.login(this.username, this.password);

        }
    },
    created(){    
    }
  }
</script>

