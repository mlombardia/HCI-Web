<template>
  <nav>
    <v-toolbar>
<!--      <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light">Site</span>
        <span>Title</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
        <!-- <v-btn text slot="activator"> -->
        <v-btn text v-on="on">
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

      <v-btn text>
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>


<script>
export default {
  data: () => ({
    links: [
      { icon: 'home', text: 'Home', route: '/'},
      { icon: 'contacts', text: 'About', route: '/about'},
    ]
  }),
}
</script>