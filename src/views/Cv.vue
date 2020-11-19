<template>
  <div class="about">
    <button class="form" @click="toggle" v-if="visible">Formations</button>
      <button class="exp" @click="toggle" v-else>Experiences</button>
    <transition name="bounce" mode="out-in" >
      
      <div class='cvsize' v-if="visible" key="visible">
        <h1>Experiences</h1>
        <div class="box lightbox">
          <h2>Immo Bakoko </h2>
          <h3>Janvier 2020 - Mars 2020</h3>
          <p>Participation au déploiement numérique de la structure Immo Bakoko spécialisé dans la location de bien immobilier au Cameroun. Par l'intermédiaire d'un site WEB, d'une présence sur les réseaux sociaux ainsi qu'une application embarqué toujours en cours de conception afin d'assurer la gestion des loyers . Cette application permettra au propriétaire d'avoir un oeil sur l'état des paiements, des arriérés de paiements selon un groupe de batiments, une zone dans le lotissement ou pour un local ciblés,ainsi que de l'impression des factures sous différents format</p>
        </div>
   
        <div class="box lightbox">
          <h2>Projet CamCo</h2> 
          <h3>Mars 2019 - Décembre 2019</h3>
          <p>Projet lancé à mon initiative et celle de 3 autres développeurs, consistant à la création d'une plateforme mobile en Kotlin assez similaire à Allovoisins c'est à dire mettre en lien différents individus pour effectuer des petits travaux, rendre des services de particuliers à particuliers. Cette application était déstiné à l'Afrique et plus particulièrement à l'Afrique Centrale. Ma partie du travail était principalement basé sur la partie Back-End en PHP via Laravel .</p>
          <ul>
              <li>Conception de la partie Back-End et des requêtes à la base de donnée</li>
              <li>Appel aux différentes API nécessaire aux bons fonctionnements de l'application (Paypal, Google Map, AWS3...)</li>
              <li>Impémentation de Web-Service dédié au bon fonctionnement de l'application et renvoie des informations sous format JSON</li>
          </ul>

        </div>

        <div class="box lightbox">
            <h2>App'n Digital</h2>
            <h3>Juin 2018 - Décembre 2018</h3>
            <p>Stage dans une Agence de marketing digital principalement en Back-End PHP via le framework Laravel avec de nombreuses taches sur du Front-End en HTML/CSS et du VueJS</p>
              <ul >
                <li>Conception et développement de web-service en PHP pour le Back-End d'une application mobile de deal et de bons plans</li>
                <li>Gestion du Front-End en VueJs sur un site e-commerce de photographe professionnel avec web-service conçu en Laravel</li>
                <li>La conception de 2 sites Wordpress dont un sous woocommerce m'ont été assigné durant la durée de ma mission ainsi que la conception de newletters sous Mailjet</li>
                <li>Utilisation de Docker pour la mise en place de projets en  PHP 7.3</li>
                <li>Travail en méthode agile avec des sprints variant de 2 à 3 semaines selon la compléxité du projet</li>
              </ul>
        </div>

           <div class="box lightbox">
              <h2>Vocalyx by Capanovi</h2>
                <h3>Février 2018 - Mai 2018</h3>
            <p>Stage dans une Start'Up visant à l'amélioration via le smartphone de personne en situation d'handicap de communication </p>
            <ul>
              <li>Développement de nouvelles fonctionnaités en Front-End</li>
              <li>Participation à la construction d'une application mobile via Angular Js/Ionic/Cordova</li>
              <li>Travail en méthode agile avec des sprint de 1 semaine</li>
            </ul>
           </div>

      </div >
      <div class='formsize' v-else key="invisible">
          <h1>Formations</h1>
           <div class="box lightbox">
            <h2>IFOCOP</h2>
                <h3>2020-2021</h3>
            <p>Formation diplomante pour le Titre de Développeur Web et Mobile. Les principaux languages et Framework étudié dans cette formation sont le REACT, le PHP, le Javascript, l'Angular, le Typescript et le IONIC</p>
          </div>
          <div class="box lightbox">
            <h2>Webforce 3</h2>
                <h3>2017</h3>
            <p>Formation intensive sur le Développement et l'intégration Web. J'y ai acquis les bases sur le développement web, les compétences et les connaissances sur du PHP, Javascript, HTML/CSS , Wordpress ainsi que les bases sur du AngularJs . <br> J'ai eu l'occasion de touché très légèrement à Symfony durant ma formation ainsi que de travailler sur Silex un mini framework enfant de symfony. A la fin de ma formation j'ai eu: </p>
            
            <ul>
              <li>Certification Intégration Web</li>
              <li>Certification Développement Web</li>
            </ul>
          </div>

      <div class="box lightbox">
          <h2>Université Paris 13</h2>
          <h3>2008-2014</h3>
          <p>Licence Economique et Gestion <br> Formation pluridisciplinaire dans les domaines économiques : comptabilité , finance , gestion, economie</p>

      </div>
      <div class="box lightbox">
          <h2>Lycée Louise Michel</h2>
          <h3>2008</h3>
          <p>Bac Economie et Social</p>
      </div>

      </div>
      
  
    </transition>   
       
  </div>
  
</template>
<script>
export default{
  data(){
    return{
      visible:true
    }
  },
  methods:{
    toggle:function(){
      this.visible= !this.visible
    }
  }
}
  



</script>
<style >

</style>
