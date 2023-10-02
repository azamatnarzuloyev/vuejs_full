<template>
    <ul class="movie-list list-group" >
        <Movieitems v-for="movie in movies" :movie="movie" :key="movie.id" 
        @onToggle="$emit('onToggle', $event)"
        @onRemove = "$emit('onRemove',$event)"
        />
       
       
           
    </ul>
</template>
<script>

import Movieitems from "../movie-list-items/MovieItems.vue"
export default {
  components : {
    Movieitems,
  },
 props : {
    movies : {
        type:Object,
        required:true,
    }
 }
}
</script>
<style scoped>

    .movie-list{
    margin-top: 25px;
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfcf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
    }
</style>