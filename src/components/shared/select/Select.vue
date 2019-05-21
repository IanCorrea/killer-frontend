<template>
<div>
   <select v-model="vmodel">
        <option :v-for="vfor" :value="value">
        {{ vfor.Nome }}
        </option>
    </select>
    <br>
    <span>Selecionado: {{ selectedValue }}</span></br>
    </div>
</template>

<script>

export default {     
    
    props: {

        vmodel: {
            required: true,
            type: String
        },

        vfor: {
            required: true,
            type: String
        },

        value: {
            required: true,
            type: String
        },        

        selectedValue: {
            required: true,
            type: String
        },
        
        styles: String
    },

    data() {

    return {

     count: 1
    }
  },

    methods: {

        action() {
            
        }
    },

    computed: {

        styleButton() {

            if(this.styles == 'default' || !this.styles) return 'button-default';
            if(this.styles == 'danger') return 'button-danger';
        }
    }
}

</script>

<style>
</style>