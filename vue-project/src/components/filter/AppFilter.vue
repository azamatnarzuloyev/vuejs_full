<template lang="">
    <div class="btn-group mt-3">
        <button class="btn btn-dark" type='button' @click="filterHendler('all')">Barcha kinolar</button>
        <button class="btn btn-outline-dark" type='button'  @click="filterHendler('popular')" >Mashxur kinolar</button>
        <button class="btn btn-outline-dark" type='button'  @click="filterHendler('top')" >Eng kop korilgan kinolar</button>
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