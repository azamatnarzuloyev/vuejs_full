<template>
    <div class="movie-add-form">
        <h3>Yangi kino qoshish</h3>
        <form action="" class="add-form d-flex" @submit.prevent>
            <Input class="new-movie-label" v-model="name" placeholder="Qanday kino "></Input>
            <!-- <input type="text" @input="name=$event.target.value" :value="name" class="form-control new-movie-label" placeholder="Qanday kino"> -->
            <Input type="number" class="new-movie-label" v-model="viewers" placeholder="Kinolar soni"></Input>
            <!-- <input type="number" @input="viewers=$event.target.value" :value="viewers" class="form-control new-movie-label mx-2" placeholder="Nechi marotaba korilgan"> -->

            <PrimaryButton class="btn-outline-dark mx-3" type="submit" @click="addmoview">Qoshish</PrimaryButton>
        </form>
    </div>
</template>
<script>



export default {
    data() {
        return {
            name: "",
            viewers: "",
        }
    },

    methods: {
        addmoview() {
            if(!this.name || !this.viewers) return
            const newmoviews = {
                    name: this.name,
                    viewers: this.viewers,
                    favorite: false,
                    like:false,
                    id: Date.now()
            }
           this.$emit("createmoview", newmoviews);
           this.name="";
           this.viewers="";
        },
     

        },
  
        
    }
</script>
<style >
.movie-add-form{
    margin-top: 30px;
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfcf5;
    border-radius: 4px;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
}
    
</style>