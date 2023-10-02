<template >
    <Box>
       <p class="fs-3 text-uppercase">Barcha kinolar soni: {{ allmoviecount }} </p>
       <p class="fs-4 text-uppercase">Ko'rilgan kinolar soni: {{ favoritemovies }}</p>
       
    </Box>
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
    },

}



</script>
