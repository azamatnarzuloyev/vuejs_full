<template lang="">
    <div class="btn-group mt-3">
        <PrimaryButton v-for="btn in filterButton" ::key="btn.name" @click="filterHendler(btn.name)" class="x btn-outline-dark" type='button'>
             {{btn.title}}</PrimaryButton>
        <!-- <button class="btn btn-dark" type='button' @click="filterHendler('all')">Barcha kinolar</button>
        <button class="btn btn-outline-dark" type='button'  @click="filterHendler('popular')" >Mashxur kinolar</button>
        <button class="btn btn-outline-dark" type='button'  @click="filterHendler('top')" >Eng kop korilgan kinolar</button> -->
    </div>
    </template>
    <script>

    export default {

     props: {
        updatefilterhandler: {
             type: Function,
             required: true
        }
     },
   

        data() {
            return {
                filterButton : [
                {
                    title : "Barcha kinolar", 
                    name : "all",

                },
                {
                    title : "Mashxur kinolar", 
                    name : "popular",

                },
                {
                    title : "Eng ko'p ko'rilgan kinolar", 
                    name : "top",

                },
                ],
                filter: 'all'
            }
        },
        methods : {
            filterHendler(filter) {
                this.filter = filter
                this.updatefilterhandler(this.filter)
                
            }
        }
        
    }
    </script>
    <style scoped>
        
    </style>