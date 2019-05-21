<template>
  <div class="content-jogo">  
    <h1 class="title center">{{ titulo }}</h1>

    <p v-show="message" class="message center">{{ message }}</p>
    
    <div class="content-form">
        <form @submit.prevent="inspect()">   
            <my-table v-animate-css="'slideInLeft'">
            <div slot="content-1">
                <select v-model="crime.IdSuspeito" v-on:change="searchIconSuspeito">
                    <option v-for="criminoso in criminosos" :value="criminoso.Id">
                        {{ criminoso.Nome }}
                    </option>
                </select>
                <img :src="iconSuspeito" :class="imgClassSuspeito(data)" />                               
            </div>
            <div slot="content-2" style="overflow:hidden;">
                <select v-model="crime.IdArma" v-on:change="searchIconArma">
                    <option v-for="arma in armas" :value="arma.Id">
                        {{ arma.Nome }}
                    </option>
                </select>
                <img :src="iconArma" :class="imgClassArma(data)"/>                   
            </div>
            <div slot="content-3" style="overflow:hidden;">
                <select v-model="crime.IdLocal" v-on:change="searchIconLocal">
                    <option v-for="local in locais" :value="local.Id">
                    {{ local.Nome }}
                    </option>
                </select>
                <img :src="iconLocal" :class="imgClassLocal(data)"/>                
            </div>
            </my-table>
            <div class="content-button" v-animate-css.click="'rotateIn'">
                <my-button class="button"
                    type="submit"
                    label="Inspecionar"            
                    :confirmation="false"
                    styles="danger" />               
            </div>
        </form>
    </div>
  
    <div id="popup">
        <modal v-if="showModal" @close="showModal = false">
           
            <div slot="header" v-animate-css="tada">
                <h1>
                    <p>PARABÉNS <span>Sr. Jacques Clouseau !!!</span></p>
                    <p>VOCÊ SOLUCIONOU O <span class="red">CASO !</span></p>
                </h1>        
            </div>
            <div slot="body">
                <div class="content-button" v-animate-css="rubberBandInfinite">            
                    <router-link :to="{name: 'home'}">
                        <my-button class="button"
                        type="submit"
                        label="JOGAR NOVAMENTE"            
                        :confirmation="false"
                        styles="default" />
                    </router-link>              
                </div>  
            </div>
        </modal>
    </div>

    <!-- template modal popup -->
    <script type="text/x-template" id="modal-template">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container"  v-animate-css="'bounceInDown'">

                        <div class="modal-header">
                            <slot name="header">                    
                            </slot>
                        </div>

                        <div class="modal-body">
                            <slot name="body">                    
                            </slot>
                        </div>

                        <!--<div class="modal-footer">
                            <slot name="footer">
                            default footer
                            <button class="modal-default-button" @click="$emit('close')">
                                OK
                            </button>
                            </slot>
                        </div>-->
                    </div>
                </div>
            </div>
        </transition>
    </script> 
  </div>   
</template>

<script>
import Table from '../shared/table/Table.vue';
import Button from '../shared/button/Button.vue';
import Select from '../shared/select/Select.vue';
import Crime from '../../domain/crime/Crime';
import CrimeService from '../../domain/crime/CrimeService';

export default {

    components: {

        'my-table' : Table,
        'my-button' : Button,
        'my-select' : Select
    },

    data() {

        return {

            titulo: 'Investigação Criminal',      
            criminosos: [],
            armas: [],
            locais: [],
            crime: new Crime(this.random(), this.random(), this.random()),      
            iconSuspeito: '',
            iconArma: '',
            iconLocal: '/',
            message: '',
            data: '',
            showModal: false,
            rubberBandInfinite: {
                classes: 'rubberBand',
                duration: 3000,                
                iteration: 'infinite'
            },
            tada: {
                classes: 'tada',
                duration: 2000,
                delay: 500
            }
        }
    },

  methods: {

    inspect() {

        this.service        
            .save(this.crime)
            .then(null, err => {
                this.message = err.message;
            })
      },

    starGame() {        
        this.crime = new Crime();           
      },

    searchIconSuspeito() {
        this.iconSuspeito = this.crime.iconSuspeito;        
      },

    searchIconArma() {       
        this.iconArma = this.crime.iconArma;       
      },

    searchIconLocal() {      
        this.iconLocal = this.crime.iconLocal;
      },

    imgClassSuspeito(data) { if(data == '1') return 'danger tada'; },

    imgClassArma(data) { if(data == '3') return 'danger shake'; },

    imgClassLocal(data) { if(data == '2') return 'danger rubberBand'; },

    random() { return Math.floor((Math.random() * 10) + 1); }
  },

  created() {    
    this.iconSuspeito = this.crime.iconSuspeito;
    this.iconArma = this.crime.iconArma;
    this.iconLocal = this.crime.iconLocal;
    
    this.service = new CrimeService(this.$resource);    

    this.service
        .list()        
        .then(misterio => this.crime.IdMisterio = misterio.MisterioId, err => {
            this.message = err.message;
        });

    this.$resource('criminosos')
        .query()
        .then(res => res.json())
        .then(criminosos => this.criminosos = criminosos, err => {
            console.log(err);
            this.message = 'Não foi possível conexão com o servidor, favor tente mais tarde.';
        });

    this.$resource('armas')
        .query()
        .then(res => res.json())
        .then(armas => this.armas = armas, err => {
            console.log(err);
            this.message = 'Não foi possível conexão com o servidor, favor tente mais tarde.';
        });

    this.$resource('locais')
        .query()
        .then(res => res.json())
        .then(locais => this.locais = locais, err => {
            console.log(err);
            this.message = 'Não foi possível conexão com o servidor, favor tente mais tarde.';
        });
  }
}
</script>

<style lang="sass">

    @import './Jogo.scss';
    @import './Animations.scss';
    
</style>