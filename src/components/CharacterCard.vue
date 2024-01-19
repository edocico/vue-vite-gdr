<template>
    <div class="card h-100">
        <img src="https://picsum.photos/300/200" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <p class="card-text">{{ character.bio }}</p>
            <p class="card-text">{{ character.defence }}</p>
            <p class="card-text">{{ character.speed }}</p>
            <p class="card-text">{{ character.hp }}</p>

            <!-- <p v-if="character.type">{{  character.type.name }}</p>
            <p class="d-flex gap-1 flex-wrap">
                <span  v-for="tecnology in character.tecnologies">{{ tecnology.name }}</span>
            </p> -->
            <!-- <router-link :to="{ name: 'characters.show', params: { slug: character.slug }}" > -->
            <!-- <a href="#" class="btn btn-primary">Apri progetto</a>
            </router-link> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        character: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped></style>