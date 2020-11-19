<template>
  <div class="projet row">
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
</template>
<script>
import caroussel from '../components/caroussel/caroussel'
import carousselSlide from '../components/caroussel/carousselSlide'

export default{
  components:{
    caroussel,
    carousselSlide
  }
}

</script>
<style>

</style>