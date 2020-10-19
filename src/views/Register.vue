<template>
    
     <div class="register" align="center" >

    <v-card elevation="24" width="600" height="700" color = "#2d4059"  >

      <v-card-title align = "center" >
        <span class="white--text">Register</span>
        </v-card-title>
    
      <v-col cols="12">

                <v-text-field label="Name" required>
                </v-text-field>
                
                <v-text-field label="Weight" required>
                </v-text-field>

                <v-text-field label="Height" required>
                </v-text-field>

                <v-text-field label="Age" required>
                </v-text-field>

                <v-text-field label="User" required>
                </v-text-field>

                <v-text-field label="Password" required>
                </v-text-field>

                <v-text-field label="Confirm password" required>
                </v-text-field>

                <a href="/login">
                    <v-btn class="white--text" color="#F06292" elevation="2" rounded  >Cancel</v-btn>
                </a>
                <a href="/">
                    <v-btn class="white--text" color="#F06292" elevation="2" rounded >Register</v-btn>
                </a>

        </v-col>

    </v-card>
  </div>
</template>