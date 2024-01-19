<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="character in characters">
                <CharacterCard :character="character"/>
            </div>
        </div>
    </div>
</template>

<script>
import CharacterCard from '../../components/CharacterCard.vue';
import axios from 'axios';

    export default {
    components: { CharacterCard 
    },
    data(){
        return{
            characters: [],
            baseUrl: 'http://127.0.0.1:8000/api'
        }
    },
    methods: {
        fetchData(){
            axios.get(`${this.baseUrl}/characters`).then((res)=>{
                console.log(res.data.results)
                this.characters = res.data.results
            })
        }
    },

    created(){
        this.fetchData()
    }
}
</script>

<style lang="scss" scoped>

</style>