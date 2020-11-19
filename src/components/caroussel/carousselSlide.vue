<template>
    <div v-show="vue">
        
        <slot></slot>
    </div>

</template>
<script>
    export default{
        data(){
            return{
                index:0,
                 }
        },
       computed:{
            vue(){
                return this.index === this.$parent.index
            }
        }

    }

</script>