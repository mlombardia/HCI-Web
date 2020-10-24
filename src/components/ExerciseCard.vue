<template>
    <v-dialog v-model="dialog4" width="500">
        <template v-slot:activator="{ on, attrs }">  
            <v-btn class="my-6" color="#2d4059" margin=auto dark width="450px" height="100px" elevation="2" v-bind="attrs" v-on="on" rounded @click="dialog5 = true">      
                <v-row>
                    <v-col>{{ exercise.name }}</v-col>
                    <v-col>{{ exercise.detail }}</v-col>
                    <v-col>{{ exercise.type }}</v-col>
                    <!-- <v-col>{{ exercise.duration }}</v-col> -->
                    <!-- <v-col>{{ exercise.repetitions }}</v-col> -->
                </v-row>
            </v-btn>
        </template>
    </v-dialog>
</template>

<script>
import { dialog5 } from '../views/Routines.vue'
        export default {
            props:{
                exercise: Object
            },
            data: () => ({
            dialog5: dialog5
        })
        }
        
</script>