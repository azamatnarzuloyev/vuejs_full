<template lang="">
    <div class="container">
       <input  type="text" class="form-control search-input" placeholder="Kinolarni qidirish"  :value="term"  @input="updateterm"/>
    </div>
</template>
<script>
export default {
    props : {
        updatetermhandler : {
            type: Function ,
            requerid : true,
        }
    },
    data() {
        return {
            term : '',
        }
    },
    methods: {
        updateterm(e) {
            this.term = e.target.value
            this.updatetermhandler(this.term)

        }
    },
    
}
</script>
<style scoped>
    .search-input{
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfcf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
    }
</style>