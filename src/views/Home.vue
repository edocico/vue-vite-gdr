<template>
    <div>
        <h1>{{ welcomeMsg }}</h1>
        <button @click="changeMsg">Cambia messaggio</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                welcomeMsg: 'Benvenut*!',
                additionalMsg: 'Grazie per la visita!',
            };
        },
        methods: {
            changeMsg(){
                this.welcomeMsg = 'Ciao!';
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>