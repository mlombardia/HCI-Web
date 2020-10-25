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
    <v-card elevation="24" width="600" height="350" color = "#2d4059"  >
        <v-card-title align = "center" >
            <span class="white--text">Now please verify your account to log on to GymSide </span>
        </v-card-title>


          <v-col cols="12">
          <v-text-field v-model="email" label="Email" required>
          </v-text-field>
            </v-col>

            <v-col cols="12">
          <v-text-field v-model="code" label="Code" required>
          </v-text-field>
            </v-col>

      <v-row>
        <v-col>
             <v-btn class="white--text" color="#F06292" elevation="2" rounded @click="verify" >Verify</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
  import {UserApi} from '@/user'
  // import {Api} from '@/api'
  export default {
    data () {
      return {
        code: null,
        email: null,
      }
    },
    // data: () => ({
    //   viewLogin: {
    //     route: '/login'
    //   }
    // }),
    methods: {
      verify(){
        var data = {
          email: this.email,
          code: this.code,
        }
        UserApi.verifyEmail(data);
        UserApi.verifyEmail(data)
        .then(() => {
          this.$router.replace("/login");
        })
        .catch(() => window.alert("datos invalidos"));
      }
    }
  }
</script>

