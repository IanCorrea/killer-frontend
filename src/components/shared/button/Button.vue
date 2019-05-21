<template>
   <button @click="action()" class="button" :class="styleButton" :type="type">{{ label }}</button>
</template>

<script>

export default {     
    
    props: {

        type: {
            required: true,
            type: String
        },

        label: {
            required: true,
            type: String
        },

        confirmation: Boolean,
        styles: String
    },

    data() {

    return {

     count: 1
    }
  },

    methods: {

        action() {
            if(this.confirmation) {
                if(confirm('Confirma operação?')) {
                    this.$emit('buttonActive', this.count++);
                }
                return;
            }
            this.$emit('buttonActive', this.count++);
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

<style lang="sass">

    @import './Button.scss';
    
</style>