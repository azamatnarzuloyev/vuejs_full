<template>
  <div class="app font-monospace">

    <div class="content">
      <AppInfo  :allmoviecount="movies.length" :favoritemovies="movies.filter(c=>c.favorite).length"/>
      <div class="search-panel">
      <Search  :updatetermhandler="updatetermhandler"/>
    </div>
    <AppFilter :updatefilterhandler="updatefilterhandler"/>
    <MovieList :movies="onFilterArray(onSearchList(movies, term), filter)"
    @onToggle="onToggleHendler"
    @onRemove="OnRemoveList"

    />
    <MovieAddFrom @createmoview="createmoview"/>
    </div>

   
  </div>
</template>
<script>

import AppInfo from "@/components/appInfo/AppInfo.vue"
import Search from "@/components/search-panel/Search.vue"
import AppFilter from "@/components/filter/AppFilter.vue"
import MovieList from "@/components/movie-list/MovieList.vue"
import MovieAddFrom from "../movie-form/MovieAddForm.vue"
export default {
    components : {
      AppInfo,
      Search,
      AppFilter,
      MovieList,
      MovieAddFrom,
    },
    data() {
       return {
            movies: [
                {
                    name: 'uzbek kino',
                    viewers: 222,
                    favorite: true,
                    like:true,
                    id: 1,

                },
                {
                    name: 'turk kino',
                    viewers: 444,
                    favorite: false,
                    like: false,
                    id:2,

                },
                {
                    name: 'hind kino',
                    viewers: 666,
                    favorite: false,
                    like: false,
                    id:3,
                }
        ],
        term: '',
        filter: 'all',
      
       }
      
    },
    methods: {
      createmoview (item) {
        this.movies.push(item)

      },
      onToggleHendler({id, prop}) {
      console.log(prop)
      this.movies = this.movies.map(item =>{
          if(item.id==id) {
            return {...item, [prop]: !item[prop]}

          }
          return item
        })
      
      },
      OnRemoveList(id) {
       this.movies = this.movies.filter(c => c.id!=id)
      },
      onSearchList(arr, term) {
      if(term.length==0) {
        return arr
      }
      return arr.filter(c=> c.name.toLowerCase().indexOf(term)> -1)
    },
    onFilterArray(arr, filter) {
     switch(filter) {
      case 'popular':
        return arr.filter(c => c.like)
      case 'top':
        return arr.filter(c=>c.viewers > 500)
      default:
        return arr
     }        
      },

    
  
    updatetermhandler(term) {
      this.term = term
    },
    updatefilterhandler(filter) {
      this.filter = filter
    }
  
  }

}
   

</script>
<style>
  .app{
    height: 100vh;
    color: black;
  }
  .content{
    width: 1000px;
    min-height: 700px;
    background-color: white;
    margin: 0 auto;
    padding: 5rem 0;
  }
  .search-panel{
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fcfcf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
  }
</style>