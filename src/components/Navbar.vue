<template>
  <nav>
    <v-toolbar color="#2d4059">
<!--      <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <a href="/home" style="text-transform: none !important; text-decoration: none;">
        <v-toolbar-title class="grey--text">
          <span class="font-weight-light">Gym</span>
          <span>Side</span>
        </v-toolbar-title>
      </a>

      <v-spacer></v-spacer>
      
      <!-- <v-list-item v-for="link in links" :key="link.text" router :to="link.route"> -->
      <v-btn color="white" v-for="view in views" :key="view.text" router :to="view.route" text style="margin-left: 50px;">
        {{ view.text }}
      </v-btn>
      <!-- </v-list-item> -->



      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
        <!-- <v-btn text slot="activator"> -->
        <v-btn color="white" text v-on="on">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        </template>
        <v-list>
          <!-- v-list-tile is changed to v-list-item -->
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- <a href="/login">
      <v-btn color="white" text>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
      </a> -->

      <v-btn icon router :to="viewprofile.route">
        <v-avatar color="#F06292">
          <span class="white--text headline">MG</span>
        </v-avatar>
      </v-btn>
      
      
    </v-toolbar>
  </nav>
</template>


<script>
import {UserApi} from '@/user'
export default {
  data: () => ({
    links: [
      { icon: 'home', text: 'Home', route: '/home'},
      { icon: 'about', text: 'About', route: '/about'},
      { icon: 'sign out', text: 'Sign out', route: '/login'},
      
    ],
    views: [
      { text: 'My routines', route: '/routines'},
      { text: 'Exercises', route: '/exercises'},
      { text: 'Favourites', route: '/favourites'},
    ],
    viewprofile: {
      route: '/profile'
    }
  }),
  logout(){
    window.alert(UserApi.url);
  }
}
</script>