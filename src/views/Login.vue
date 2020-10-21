<template>
  <body>
    <h1> REGISTRARSE</h1>
    <div align="center" >
      
    <v-card elevation="24" width="600" height="300" color = "#2d4059"  >
      <v-card-title align = "center" >
        <span class="white--text">Gymside</span>
      </v-card-title>
    
      <v-col cols="12">
          <v-text-field label="User" required>
          </v-text-field>
          <v-text-field label="Password" required>
          </v-text-field>

          <a href="/register">
            <v-btn class="white--text" color="#F06292" elevation="2" rounded  >Sign up</v-btn>
          </a>
          <a href="/">
              <v-btn class="white--text" color="#F06292" elevation="2" rounded >Log in</v-btn>
          </a>
        </v-col>

    </v-card>
    </div>
</body>
</template>

