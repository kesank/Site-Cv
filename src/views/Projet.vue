
<!--   <div class="projet row2">
    <caroussel class="md-12 lg-12 xs-12">
      <caroussel-slide>
        <h3 class="projet_web">Projet web en Wordpress</h3>
        <a href="https://leskameleons.fr/" rel="noopener" target="_blank"><img src="../pictures/KAM.png" alt="projet Kameleon"/></a>
        
      </caroussel-slide>
      <caroussel-slide>
        <h3 class="projet_web">Projet BDD en PHP</h3>
         <a href="https://github.com/kesank/inscriptionEtudiant" rel="noopener" target="_blank"><img src="../pictures/etudiant.png" alt="site php gestion étudiant"/></a> 
      </caroussel-slide>
      <caroussel-slide>
        <h3 class="projet_web">Projet BDD en PHP</h3>
        <a href="https://github.com/kesank/gestionStock"  rel="noopener" target="_blank"><img src="../pictures/stock.png" alt="site php gestion stock"/></a> 
      </caroussel-slide>
      <caroussel-slide>
        <h3 class="projet_web">Projet Laravel</h3>
        <a href="https://github.com/kesank/bakoko" rel="noopener" target="_blank"><img src="../pictures/bakoko.png" alt="site gestion donnée en laravel"/></a>
      </caroussel-slide>
      <caroussel-slide>
        <h3 class="projet_web">Projet Site Vitrine Html/CSS</h3>
        <a href="https://www.immo-bakoko.kellynkana.ovh/" rel="noopener" target="_blank"><img src="../pictures/immo-bakoko.png" alt="site immo-bakoko"/></a>
      </caroussel-slide>
      <caroussel-slide>
        <h3 class="projet_web">Projet Site CV VueJS</h3>
        <a href="https://github.com/kesank/Site-Cv" rel="noopener" target="_blank"><img src="../pictures/Site CV.png" alt="site CV"/></a>
      </caroussel-slide>
    </caroussel>
  </div>
   -->
   <template>
  <div class="projet_web2">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      img-height="480"
      
      style="text-shadow: 1px 1px 2px #333;margin:0 auto"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
 
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
       <h3 class="projet_web">Projet BDD en PHP</h3>
         <a href="https://github.com/kesank/inscriptionEtudiant" rel="noopener" target="_blank"><img src="../pictures/etudiant.png" alt="site php gestion étudiant"/></a> 
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
        <h3 class="projet_web">Projet web en Wordpress</h3>
        <a href="https://leskameleons.fr/" rel="noopener" target="_blank"><img src="../pictures/KAM.png" alt="projet Kameleon"/></a>
        
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
        <h3 class="projet_web">Projet BDD en PHP</h3>
        <a href="https://github.com/kesank/gestionStock"  rel="noopener" target="_blank"><img src="../pictures/stock.png" alt="site php gestion stock"/></a> 
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
        <h3 class="projet_web">Projet Laravel</h3>
        <a href="https://github.com/kesank/bakoko" rel="noopener" target="_blank"><img src="../pictures/bakoko.png" alt="site gestion donnée en laravel"/></a>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
        <h3 class="projet_web">Projet Site Vitrine Html/CSS</h3>
        <a href="https://www.immo-bakoko.kellynkana.ovh/" rel="noopener" target="_blank"><img src="../pictures/immo-bakoko.png" alt="site immo-bakoko"/></a>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
        <h3 class="projet_web">Projet Site CV VueJS</h3>
        <a href="https://github.com/kesank/Site-Cv" rel="noopener" target="_blank"><img src="../pictures/Site CV.png" alt="site CV"/></a>
        </template>
      </b-carousel-slide>


    </b-carousel>
    <div class="projet_web3">
      <p>Sur cette page vous pouvez découvrir les différents projets que j'ai fait sur les différents languages que je maitrise et ceux dont j'aspire acquérir la maitrise d'ici peu. Ils seront soit publié sur Github ou directement mis en ligne selon l'importance du projet. Php Laravel, Angular, VueJs et React Native seront les principaux projets que je mettrais sur mon site Cv</p>
    </div>
  </div>
</template>
<script>
/* import caroussel from '../components/caroussel/caroussel'
import carousselSlide from '../components/caroussel/carousselSlide'
 */
 export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style>

</style>