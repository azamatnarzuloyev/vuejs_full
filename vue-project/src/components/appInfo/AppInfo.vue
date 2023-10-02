<template >
    <div class="app-info">
       <p class="fs-3 text-uppercase">Barcha kinolar soni: {{ allmoviecount }} </p>
       <p class="fs-4 text-uppercase">Ko'rilgan kinolar soni: {{ favoritemovies }}</p>
       
    </div>
</template>
<script>
export default {
    props : {
        allmoviecount: {
            type: Number,
            required: true,
        },
        favoritemovies: {
            type:Number,
            required:true,
        }
    }
}
</script>
<style scoped>
.app-info{
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfcf5;  
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
</style>