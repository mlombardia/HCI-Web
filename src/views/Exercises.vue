<template>
  <body>
    <div class="exercises">
      <h1>This is Exercises page</h1>
      <h2>Hola</h2>
      <h2>Hola de nuevo</h2>
    </div>
    <div><v-carousel
    cycle
    height="400"
    width="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        color="indigo"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            {{ slide }}  {{ bodyparts[i] }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel></div>
  </body>
</template>

<script>
  export default {
    data () {
      return {
       /* colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],*/
        slides: [
          'Squats',
          'Planks',
          'Burpees',
          'Crunches',
          'Sit Ups',
        ],
        bodyparts: [
          '20 Reps',
          '30 Secs',
          '10 Reps',
          '10 Reps',
          '25 Reps',
        ]
      }
    },
  }
</script>