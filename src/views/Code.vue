<template>
  <div class="code ">
    <h1>Lignes de commandes</h1>
    <p class="box lightbox"> 
      Cette page sera beaucoup plus axé sur les lignes de commandes des différents langages que j'ai l'habitude d'utiliser. Elle fait office de mémo personnel afin de m'éviter de me dispercer dans mes recherches à chaque fois qu'une ligne de commande m'échappe. Et si elle peut aussi vous être utile dans votre démarche de codage n'hésitez surtout pas à consulter cette page sinon je suis désolé de vous décevoir sur le charabia que ça peut être à vos yeux 😁
    </p>
    <h2>PHP Laravel</h2>
    <transition name="slide-fade">
    
      <div v-if="developpe" class="box lightbox" >
        <ul>
            <li> php artisan <i>Cerveau et maitre d'oeuvre de tout Laravel</i></li>
            <li>php artisan serve <i>Lancer le serveur de laravel</i></li>
            <li>composer create-project --prefer-dist laravel/laravel <b>NOM DU PROJET</b> + composer update <i>Pour les mises à jour</i> OU composer global require "laravel/installer" <i>Pour installer Laravel globalement</i> puis laravel new <b>MON PROJET</b>  </li>
            <li> php artisan make:controller <b>NOM CONTROLLER</b> OU php artisan make:controller <b>NOM CONTROLLER</b> --resource <i>Pour créer toute les routes nécessaire au controlleur directement</i></li>
            <li>php artisan make:request <b>NOM REQUEST</b> <i>Pour créer une requête de formulaire</i></li>
            <li>php artisan make:mail <b>NOM EMAIL</b> <i>Création de la classe pour générer des mail</i></li>
            <li>php artisan make:model <b>NOM MODEL</b>  <i>Une table est représentée par une classe qui étend la classe Model OU php artisan make:model <b>NOM MODEL</b> -m <i>Pour créer la table migration en meme temps que le model</i> </i></li>
            <li>php artisan tinker <i>C’est un outil qui permet d’entrer des expressions, de les faire évaluer et d’avoir le résultat à l’affichage</i></li>
            <li> php artisan make:migration <b>NOM MIGRATION</b> <i>Créer une table de migration</i></li>
            <li>php artisan migrate <i>Effectuer la migration</i></li>
            <p>Pour plus d'information sur laravel <a href="https://laravel.com/" target="_blank" rel="noopener">cliquez ici</a> </p>
        </ul>
        
      </div>
    </transition>
    <button v-if='!developpe' @click="toggl" >VOIR PLUS</button>
    <button v-else @click="toggl" >VOIR MOINS</button>

    <h2>PHP Symphony</h2>
    
    <transition name="slide-fade">
    <div v-if="developpe1"  class="box lightbox">
      <ul>
        <li> composer create-project symfony website-skeletton <b>NOM DU PROJET</b> <i>Création du projet</i></li>
        <li>composer require server --dev <i>Lancer Le serveur</i> , php bin/console server:run <i>Serveur lancer sur localhost:8000</i></li>
        <li>php bin/console make:controller <b>NOM CONTROLLER</b> <i>Création controller</i></li>
        <li>php bin/console doctrine:database:create <i>Création BDD</i></li>
        <li>php bin/console make:entity <i>Créer une table dans BDD</i></li>
        <li>php bin/console make:migration <i>Créer une migration</i></li>
        <li>php bin/console doctrine:migrations:migrate</li>
        <li>php bin/console make:form <i>Création formulaire</i></li>
        <p>Pour plus d'information sur Symfony <a href="https://symfony.com/" target="_blank" rel="noopener">cliquez ici</a> </p>
      </ul>

    </div>
    </transition>
    <button v-if="!developpe1"  @click="toggl1" >VOIR PLUS</button>
    <button v-else @click="toggl1" >VOIR MOINS</button>

    <h2>Vue Js</h2>
    
    <transition name="slide-fade">
    <div v-if="developpe2" class="box lightbox" >
      <ul>
        <li>vue create <b>NOM DU PROJET</b> OU vue init webpack-simple <b>NOM DU PROJET</b> </li>
        <li>npm install -g @vue/cli</li>
        <li>npm run serve <i>Lancer le serveur</i></li>
        <li>vue ui <i>Utiliser la vue cli pour manipuler le projet sur le naviguateur</i></li>
        <p>Pour plus d'information sur Symfony <a href="https://fr.vuejs.org/index.html" rel="noopener" target="_blank">cliquez ici</a> </p>
      </ul>

    </div>
    </transition>
    <button v-if="!developpe2"  @click="toggl2" >VOIR PLUS</button>
    <button v-else @click="toggl2" >VOIR MOINS</button>

    <h2>AngularJs</h2>
    <p v-if="developpe3">Contenu à venir</p>
    <button v-if='!developpe3'  @click="toggl3" >VOIR PLUS</button>
    <button v-else @click="toggl3" >VOIR MOINS</button>

    <h2>HTML/CSS</h2><p v-if="developpe4">Contenu à venir</p>
    <button v-if='!developpe4'  @click="toggl4" >VOIR PLUS</button>
    <button v-else @click="toggl4" >VOIR MOINS</button>

    <h2>Git</h2>
    
    <transition name="slide-fade">
    <div v-if="developpe5" class="box lightbox">
      <ul>
          <li>git config --global user.email sam@google.com <i>Définir le mail d’un utilisateur</i></li>
          <li>git init <i>Cette commande est utilisée pour créer un nouveau dépôt GIT</i></li>
          <li>git add temp.txt OU git add . <i>Pour ajouter un fichier dans le répertoire local ou plusieurs fichiers avec le point à la fin</i></li>
          <li>git commit –m “Description du commit” <i>Permet d valider les modifications en donnant un nom qui correspondent à la modification de ce commit</i></li>
          <li>git status <i>Affiche les fichiers modifiés</i></li>
          <li>git push origin master <i>Un simple push envoie les modifications locales apportées à la branche principale associée</i></li>
          <li>git checkout -b <b>NOM BRANCHE</b> ET git checkout <b>NOM BRANCHE</b> <i>Pour créer une branche et pour passer d'une branche à une autre</i></li>
          <li>git remote –v ET git remote add origin '93.188.160.58' <i>La commande suivante répertorie les dépôts distants actuellement configurés et cette commande permet à l’utilisateur de connecter le dépôt local à un serveur distant</i></li>
          <li>git branch <b>NOM BRANCHE</b> ET git branch –d <b>NOM BRANCHE</b> <i>Pour créer une nouvelle branche et pour supprimer une branche</i>  </li>
          <li>git pull <i>Pour fusionner toutes les modifications présentes sur le dépôt distant dans le répertoire de travail local, la commande pull est utilisée. </i></li>
          <li>git merge <b>NOM BRANCHE</b> <i> La commande git merge est utilisée pour fusionner une branche dans la branche active</i> </li>
      </ul>

    </div>
    </transition>
    <button v-if='!developpe5' @click="toggl5" >VOIR PLUS</button>
    <button v-else @click="toggl5" >VOIR MOINS</button>


  </div>
</template>
<script>
export default{
  data(){
    return{
      developpe:false,
      developpe1:false,
      developpe2:false,
      developpe3:false,
      developpe4:false,
      developpe5:false,
    }
  },
  methods:{
    toggl:function(){
      this.developpe= !this.developpe;


    },
    toggl1:function(){
      this.developpe1= !this.developpe1;
    },
    toggl2:function(){
      this.developpe2= !this.developpe2;
    },
    toggl3:function(){
      this.developpe3= !this.developpe3;
    },
    toggl4:function(){
      this.developpe4= !this.developpe4;
    },
    toggl5:function(){
      this.developpe5= !this.developpe5;
    }
  }
}
  



</script>
<style>

</style>
