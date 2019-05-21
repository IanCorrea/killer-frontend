<template>
  <div class="content-home">  
        <div class="content-body center">        
            <h1 v-animate-css="'bounceInDown'">
            <p>Bem vindo ao departamento de investigação de crimes!</p>
            <p>Seu CODINOME é: <span>Sr. Jacques Clouseau!!</span></p></h1>
           <div class="content-button" v-animate-css="pulseInfinite">            
            <router-link :to="{name: 'jogo'}">
                <my-button class="button"
                type="submit"
                label="JOGAR"            
                :confirmation="false"
                styles="danger" />
            </router-link>
            </div>
            <h2 v-animate-css="zoomInDown">
            <p>A partir de agora, você está sendo direcionado para a investigação!</p>
            <p>A solução desse crime é de prioridade máxima! Somente através dela iremos pegar o 
            <span class="red">ASSASSINO!</span></p>
            <p>Contamos com sua ajuda <span>Sr. Jacques Clouseau!</span></p>
            </h2>
        </div>      
   </div>
</template>

<script>
console.log(window.outerWidth + " " + screen.width);
import Button from '../shared/button/Button.vue';

export default {

 components: {

    'my-button' : Button,
   
  },

    data()  {
        return {
            pulseInfinite: {
                classes: 'pulse',
                duration: 1000,
                iteration: 'infinite'
            },
            zoomInDown: {
                classes: 'zoomInDown',
                duration: 1000,
                delay: 1000            
            }
        }
    }
}
</script>

<style lang="sass">

    @import './Home.scss';
    
</style>