<template>
  <div class="home">
    <h1>Kelly NKANA <i class="fas fa-mobile-alt"></i>Développeur Web et Mobile  <i class="fas fa-desktop"></i></h1>
    <h2>"Le Problème est toujours ce qui se trouve entre la chaise et le clavier"</h2>
     <div   v-if="!hovered"     
        >
          <img  @mouseover="hovered = true" src="../pictures/barbe2 .png"
        alt="Kelly Nkana">
      </div>
    <div  v-else>
          <img @mouseleave="hovered = false"  src="../pictures/masque2.png"
        alt="Kelly Nkana avec masque">
      </div>
  
      <div class="flex">
            <div id="presentation" class="lightbox">
              <h2>Présentation</h2>
              <p>Bonjour à tous j'ai développé ce site web en Vue Js afin d'obtenir <strong> une Single Page Application </strong> en guise de portfolio, afin d'y stocké au fur et à mesure certaines de mes réalisations et projets perso. J'y ai mis mon parcours, certains de mes projets et des bouts de codes et lignes de commandes en guises de mémo auquel me référer à chaque fois que je dois coder. J'essaierais de mettre des projets dans les différents types de languages que je maitrise assez régulièrement et principalement du PHP qui est mon language de prédilection avec un de ces principaux <strong> framework(Laravel) </strong>ainsi que certains sur les framework javascript <strong>(Angular, VueJs,React)</strong>. Mon principal objectif est l'apprentissage de nouveaux languages ainsi que la mise en pratique de cette compréhension sur différents projets que j'exposerais ici sur ma page Projet ainsi que sur mon Github de manière régulière avec un lien que vous pourrez trouvez dans mon pied de page. <br> <strong>Vous pouvez télécharger mon CV sur le lien ci dessous</strong> afin de me contacter ou allez sur <strong> mon lien Linkedin ou Whire </strong> pour régarder mon profil avec toujours les liens situés en pied de page avec les icones correspondant. Bonne visite à vous .<br> PS: Un espace de contact sera bientot mis à votre disposition afin de récupérer vos avis sur mon portfolio et les axes de progréssion à faire pour celui-ci ainsi que toute autre requête.
              </p>
              
            </div>
            <br>

     </div>
<!--        <div class="cta">
        <span @click="onClick()">Télécharger CV</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </div> -->
      <div class="cv_img" >
        <img @click="onClick()" src="../pictures/cv.png" alt="">
      </div>
      <h3><i class="fas fa-arrow-up"></i>Veuillez cliquez sur l'image ci dessus pour télécharger mon CV<i class="fas fa-arrow-up"></i></h3>
      <div class="lang-p">
            
          <img src="../pictures/lang/angular.png" alt="angular">
          <img src="../pictures/lang/css.svg" alt="css">
          <img src="../pictures/lang/HTML5.png" alt="HTML5">
          <img src="../pictures/lang/js.png" alt="js">
          <img src="../pictures/lang/laravel.png" alt="laravel">
          <img src="../pictures/lang/php.png" alt="php">
          <img src="../pictures/lang/git.png" alt="git">
          <img src="../pictures/lang/react.png" alt="react">
          <img src="../pictures/lang/redux.png" alt="redux">
          <img src="../pictures/lang/vue.png" alt="vue">
          <img src="../pictures/lang/wordpress4.png" alt="word">
          <img src="../pictures/lang/sql4.png" alt="sql">
      </div>

      


    
    
  </div>
</template>
<style>

</style>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      hovered:false,

    }
  },
  
  methods: {
    onClick(){
      axios({
        url:"KellyCV 2020Site.pdf",
        method:'GET',
        responseType:'blob',
      }).then((response)=>{
        
          var fileUrl= window.URL.createObjectURL(new Blob([response.data]))
          console.log(fileUrl)
          var fileLink=document.createElement('a')
          fileLink.href= fileUrl
          fileLink.setAttribute('download','nkanakelly.pdf')
          document.body.appendChild(fileLink)
          fileLink.click()
      })
    }
  }
  

}
</script>
