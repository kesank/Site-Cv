<template>
    <div >
        <div class="caroussel">
            
        <slot></slot>
        <button class="caroussel__nav caroussel__suivant" @click.prevent="next">Suivant</button>
        <button class="caroussel__nav caroussel__prec" @click.prevent="prev">Précédent</button>
        </div>
        <div class="contenu">
            <p>Les Différents Projets que j'ai conçu sur différents languages

      </p>
        </div>
    </div>

</template>
<script>
    export default{
        data(){
            return{
                index:0,
                slides:[]
            }
        },
        mounted(){
            this.slides=this.$children
            this.slides.forEach((slide, i)=>{slide.index =i} )
        },
        computed: {
            slidescount(){return this.slides.length}
        },
        methods: {
            next(){
                this.index++
                if(this.index>=this.slidescount){
                    this.index=0
                }
            },
            prev(){
                this.index--
                if(this.index<0){
                    this.index=this.slidescount-1
                }
            }
        }
    }

</script>
<style>


</style>
