<template>
  <body>
    <div align="center" >
      
    <v-card elevation="24" width="600" height="300" color = "#2d4059"  >
      <v-card-title align = "center" >
        <span class="white--text">Gymside</span>
      </v-card-title>
    
      <v-col cols="12">
          <v-text-field v-model="user" label="User" required>
          </v-text-field>
          <v-text-field v-model="password" label="Password" required>
          </v-text-field>

          <a href="/register">
            <v-btn class="white--text" color="#AB47BC" elevation="2" rounded  >Sign up</v-btn>
          </a>
          <a href="/">
              <v-btn class="white--text" color="#AB47BC" elevation="2" rounded v-on:click="login" >Log in</v-btn>
          </a>
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
        user: '',
        psw: '',
      }
    },
    login(){
      UserApi.login(this.user, this.psw1)
    
    }
  }
</script>

