<template>
  <div class="app font-monospace">

    <div class="content">
      <!-- <PrimaryButton @click="FetchApiviews"> button</PrimaryButton> -->
      <AppInfo  :allmoviecount="movies.length" :favoritemovies="movies.filter(c=>c.favorite).length"/>
      <div class="search-panel">
      <Search  :updatetermhandler="updatetermhandler"/>
    </div>
    <AppFilter :updatefilterhandler="updatefilterhandler"/>
    <Box v-if="!movies.length && !isloading"> Kinolar yo'q  </Box>
    <div v-else-if="isloading" class="tex-aligin-center">
        <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>

    <MovieList :movies="onFilterArray(onSearchList(movies, term), filter)" v-else
    @onToggle="onToggleHendler"
    @onRemove="OnRemoveList" />
    <Box class="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
   <ul  class="pagination">
  
    <li class="page-item" v-for="pageNumber in totalPage" :class="{'active': pageNumber==page}" 
    :key="pageNumber" @click="pageChangehendler(pageNumber)"> <span class="page-link"> {{ pageNumber }}</span></li>
    
 
  </ul>
</nav>
</Box>
    
    <div v-if="filter=='all'"> 
      <MovieAddFrom @createmoview="createmoview"/>
    </div>
    <div v-else>
       
    </div>
    
    </div>

   
  </div>
</template>
<script>
import axios from "axios"
import AppInfo from "@/components/appInfo/AppInfo.vue"
import Search from "@/components/search-panel/Search.vue"
import AppFilter from "@/components/filter/AppFilter.vue"
import MovieList from "@/components/movie-list/MovieList.vue"
import MovieAddFrom from "../movie-form/MovieAddForm.vue"
import Box from "../../ui-componenents/Box.vue"

export default {
    components : {
    AppInfo,
    Search,
    AppFilter,
    MovieList,
    MovieAddFrom,
    Box
},
    data() {
       return {
        movies: [],
        term: '',
        filter: 'all',
        isloading: false,
        limit:10,
        page:1,
        totalPage:0,
      
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
    },
    async FetchApiviews() {
      try{
        this.isloading = true
        setTimeout( async()=>{
          const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
              _limit:this.limit,
              _page:this.page,
            }
          })
          console.log(response)
         const arry = response.data.map(item => ({
          id: item.id,
          name: item.title,
          viewers: item.id*10,
          favorite: false,
          like: false,
        

         })
         
        
         )
         this.totalPage = Math.ceil(response.headers['x-total-count']/this.limit) 
         console.log(this.totalPage)
         this.movies = arry
         this.isloading=false
        }, 1000)

      
         
      }
        catch (e) {
          alert(e.message)
        }
    
     
    },
    pageChangehendler(page) {
        this.page = page
        this.FetchApiviews()

      },

  }, 
  
  mounted() {
        this.FetchApiviews()
      },   

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

.tex-aligin-center {
  text-align: center;
  margin: 10px;
  padding-top: 30px;
}


</style>