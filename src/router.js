import{createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue';
import CharactersIndex from './views/characters/Index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/characters',
            name: 'characters.index',
            component: CharactersIndex,
        },
    ]
});

export {router};