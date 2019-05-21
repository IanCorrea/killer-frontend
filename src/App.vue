<template>
    <!--<div class="body">-->

    <!--<my-menu :routes="routes" />-->

      <transition name="page">
        <router-view></router-view>
      </transition>
    <!--</div>-->
</template>

<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {

    'my-menu' : Menu
  },

  data() {

    return {

      routes : routes.filter(route => route.menu)
    }
  }
}
</script>

<style>
    body, html {
        font-family: helvetica, sans-serif;       
        height: 100%;
        width: 100%;
        margin: 0 auto;
        background-color: #000000;
    }

    .page-enter, .page-leave-active {
      opacity: 0;
    }

    .page-enter-active, .page-leave-active {
      transition: opacity .4s;
    }
</style>