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
    <div align="center">
      <v-card elevation="24" width="600" height="300" color="#2d4059">
        <v-card-title align="center">
          <span class="white--text">Gymside</span>
        </v-card-title>

        <v-col cols="12">
          <v-text-field label="User" v-model="username" required>
          </v-text-field>
          <v-text-field label="Password" v-model="password" required>
          </v-text-field>

          <v-row>
            <v-col>
              <a href="/register">
                <v-btn class="white--text" color="#F06292" elevation="2" rounded
                  >Sign up</v-btn
                >
              </a>
            </v-col>
            <v-col>
              <v-btn
                class="white--text"
                @click="login"
                color="#F06292"
                elevation="2"
                rounded
                >Log in</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </div>
  </body>
</template>

<script>
import { UserApi } from "@/user";
//import {Api} from '@/api'
// import router from '@/router'
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      UserApi.login(this.username, this.password).then(() => {
        this.$router.replace("/home");
      })
      .catch(() => window.alert("usuario incorrecto"));
    },
  },
};
</script>

