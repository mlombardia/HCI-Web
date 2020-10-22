<template>
    <div class="register" align="center" >
    <v-card elevation="24" width="600" height="250" color = "#2d4059"  >
        <v-card-title align = "center" >
            <span class="white--text">Now please verify your account to log on to GymSide </span>
        </v-card-title>

            <v-col cols="12">
          <v-text-field v-model="code" label="Code" required>
          </v-text-field>
            </v-col>

      <v-col cols="12">
                <a href="/login">
                    <v-btn class="white--text" color="#F06292" elevation="2" rounded  >Log in</v-btn>
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
        code: '',
      }
    },
    login(){
      UserApi.login(this.user, this.psw1)
    }
  }
</script>

