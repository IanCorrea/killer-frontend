import Jogo from './components/jogo/Jogo.vue';
import Home from './components/home/Home.vue';

export const routes = [
    { path: '', name:'home', component: Home, title: 'Home', menu: true},
    { path: '/jogo', name:'jogo', component: Jogo, title: 'Jogo', menu: true},   
    { path: '*', component: Home, menu: false}
];