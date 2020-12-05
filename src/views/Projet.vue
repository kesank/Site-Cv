
   <template>
  <div class="projet_web2">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      img-height="480"
      
      style="text-shadow: 1px 1px 2px #333;margin:0 auto"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
 
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
        <h3 class="projet_web">Projet React Native</h3>
        <a href="https://github.com/Afro-tchop/Afro/tree/main" rel="noopener" target="_blank"><img src="../pictures/tchop2.png" alt="tchop2"/></a>
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
      <div class="proj_vue">
          <div>
                <a href="https://leskameleons.fr/" rel="noopener" target="_blank"><img src="../pictures/KAM.png" alt="projet Kameleon"/></a>
                <b-button @click="modalShow = !modalShow">En savoir Plus  <i class="fas fa-chevron-circle-down"></i></b-button>

                <b-modal v-model="modalShow">
                  <img class="picmodal" src="../pictures/aask.png" alt="kam">
                  <img class="picmodal" src="../pictures/kams.png" alt="kams">
                  <p>Les Kameleons est un site qui a été codé en Wordpress. Il a pour vocation la diffusion de podcast et d'articles. La structure du PHP sur ce projet a été touché la dessus afin d'y apporter de nouvelles fonctionnalités non prévu dans le thèmes initialement choisis. </p>
                </b-modal>
              
          </div>  
          <div>
                <a href="https://github.com/kesank/bakoko" rel="noopener" target="_blank"><img src="../pictures/immo-bakoko.png" alt="immo"/></a>
                <b-button  @click="modalShow1 = !modalShow1">En savoir Plus  <i class="fas fa-chevron-circle-down"></i></b-button>

                <b-modal  v-model="modalShow1">
                  <img class="picmodal" src="../pictures/immo.png" alt="immmo">
                  <img class="picmodal" src="../pictures/immo2.png" alt="immo2">
                  <p>  Le site Immo Bakoko est un site vitrine d'un entrepreneur domicilié au Cameroun pour la promotion de ses biens au Cameroun. La première base de ce site est celle d'un site vitrine mais la réflexion d'une optimisation de celui-ci avec une base de données pour la soumission des demandes de locations ou de renseignement des visiteurs directement sur le site est en cours.</p>
                </b-modal>
              
          </div>  
          <div>
                <a href="https://github.com/kesank/inscriptionEtudiant" rel="noopener" target="_blank"><img src="../pictures/etudiant.png" alt="site php gestion étudiant"/></a>
                <b-button @click="modalShow2 = !modalShow2">En savoir Plus  <i class="fas fa-chevron-circle-down"></i></b-button>

                <b-modal v-model="modalShow2">C'est un exercice basique en php procédural sur lequel je m'étais entrainé avec une conception de la BBD. Cette application web se décompose en 3 partie , l'ajout, la suppression et la modification des entrées dans la BDD</b-modal>
              
          </div>  
          <div>
                <a href="https://github.com/Afro-tchop/Afro/tree/main" rel="noopener" target="_blank"><img src="../pictures/tchop2.png" alt="tchop2"/></a>
                <b-button @click="modalShow3 = !modalShow3">En savoir Plus  <i class="fas fa-chevron-circle-down"></i></b-button>

                <b-modal v-model="modalShow3">
                  <img class="picmodal" src="../pictures/test1.jpg" alt="afro2">
                  <img class="picmodal" src="../pictures/test2.jpg" alt="afro">
                  <p> C'est une application en React Native et PHP-Laravel pour la mise en avant de l'art culinaire africain au travers de recettes et de restaurant qui seront recommandé et noté par les utilisateurs. L'application est toujours en cours de conception et un déploiement de celle ci est prévu pour courant Janvier-Février. elle fera appelle a une API de géolocalisation ainsi qu'une API que l'ont va trouver ou créer nous mêmes pour faire un mapping sur le net des différents restaurant africains sur des zones sélectionner.</p>
                </b-modal>  
              
          </div>  
          <div>
                 <a href="https://github.com/kesank/Site-Cv" rel="noopener" target="_blank"><img src="../pictures/Site CV.png" alt="site CV"/></a>
                <b-button @click="modalShow4 = !modalShow4">En savoir Plus  <i class="fas fa-chevron-circle-down"></i></b-button>

                <b-modal v-model="modalShow4">Le site Cv qui me sert de portfolio a été conçu en VueJS. Il a eté conçu avec cette librairies afin d'avoir un site en Single Page afin d'avoir une utilisation pour l'utilisateur beaucoup plus fluide et ainsi y intégré plus de contenu sans que cela n'est un réel impact sur l'expérience utilisateur. J'y ai aussi intégré du Bootstrap, FontAwesome, afin d'avoir plusieurs fonctionnalités couplé au VueJS plutôt sympa visuellement. </b-modal>
              
          </div>  

      </div>
    </div>
  </div>
</template>
<script>
 export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        modalShow: false,
        modalShow1: false,
        modalShow2: false,
        modalShow3: false,
        modalShow4: false,
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