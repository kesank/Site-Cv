<template>
  <div class="code ">
    <h1>Lignes de commandes</h1>
    <h2>PHP Laravel</h2>
    <transition name="slide-fade">
    
      <div v-if="developpe" class="box lightbox" >
        <p> php artisan <i>Cerveau et maitre d'oeuvre de tout Laravel</i></p>
        <p>php artisan serve <i>Lancer le serveur de laravel</i></p>
        <p>composer create-project --prefer-dist laravel/laravel <b>NOM DU PROJET</b> + composer update <i>Pour les mises à jour</i> OU composer global require "laravel/installer" <i>Pour installer Laravel globalement</i> puis laravel new <b>MON PROJET</b>  </p>
        <p> php artisan make:controller <b>NOM CONTROLLER</b> OU php artisan make:controller <b>NOM CONTROLLER</b> --resource <i>Pour créer toute les routes nécessaire au controlleur directement</i></p>
        <p>php artisan make:request <b>NOM REQUEST</b> <i>Pour créer une requête de formulaire</i></p>
        <p>php artisan make:mail <b>NOM EMAIL</b> <i>Création de la classe pour générer des mail</i></p>
        <p>php artisan make:model <b>NOM MODEL</b>  <i>Une table est représentée par une classe qui étend la classe Model OU php artisan make:model <b>NOM MODEL</b> -m <i>Pour créer la table migration en meme temps que le model</i> </i></p>
        <p>php artisan tinker <i>C’est un outil qui permet d’entrer des expressions, de les faire évaluer et d’avoir le résultat à l’affichage</i></p>
        <p> php artisan make:migration <b>NOM MIGRATION</b> <i>Créer une table de migration</i></p>
        <p>php artisan migrate <i>Effectuer la migration</i></p>
        <p>Pour plus d'information sur laravel <a href="https://laravel.com/" target="_blank" rel="noopener">cliquez ici</a> </p>
      </div>
    </transition>
    <button v-if='!developpe' @click="toggl" >VOIR PLUS</button>
    <button v-else @click="toggl" >VOIR MOINS</button>

    <h2>PHP Symphony</h2>
    
    <transition name="slide-fade">
    <div v-if="developpe1"  class="box lightbox">
      <p> composer create-project symfony website-skeletton <b>NOM DU PROJET</b> <i>Création du projet</i></p>
      <p>composer require server --dev <i>Lancer Le serveur</i> , php bin/console server:run <i>Serveur lancer sur localhost:8000</i></p>
      <p>php bin/console make:controller <b>NOM CONTROLLER</b> <i>Création controller</i></p>
      <p>php bin/console doctrine:database:create <i>Création BDD</i></p>
      <p>php bin/console make:entity <i>Créer une table dans BDD</i></p>
      <p>php bin/console make:migration <i>Créer une migration</i></p>
      <p>php bin/console doctrine:migrations:migrate</p>
      <p>php bin/console make:form <i>Création formulaire</i></p>
      <p>Pour plus d'information sur Symfony <a href="https://symfony.com/" target="_blank" rel="noopener">cliquez ici</a> </p>
    </div>
    </transition>
    <button v-if="!developpe1"  @click="toggl1" >VOIR PLUS</button>
    <button v-else @click="toggl1" >VOIR MOINS</button>

    <h2>Vue Js</h2>
    
    <transition name="slide-fade">
    <div v-if="developpe2" class="box lightbox" >
      <p>vue create <b>NOM DU PROJET</b> OU vue init webpack-simple <b>NOM DU PROJET</b> </p>
      <p>npm install -g @vue/cli</p>
      <p>npm run serve <i>Lancer le serveur</i></p>
      <p>vue ui <i>Utiliser la vue cli pour manipuler le projet sur le naviguateur</i></p>
      <p>Pourplus d'information sur Symfony <a href="https://fr.vuejs.org/index.html" rel="noopener" target="_blank">cliquez ici</a> </p>
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
      <p>git config --global user.email sam@google.com <i>Définir le mail d’un utilisateur</i></p>
      <p>git init <i>Cette commande est utilisée pour créer un nouveau dépôt GIT</i></p>
      <p>git add temp.txt OU git add . <i>Pour ajouter un fichier dans le répertoire local ou plusieurs fichiers avec le point à la fin</i></p>
      <p>git commit –m “Description du commit” <i>Permet d valider les modifications en donnant un nom qui correspondent à la modification de ce commit</i></p>
      <p>git status <i>Affiche les fichiers modifiés</i></p>
      <p>git push origin master <i>Un simple push envoie les modifications locales apportées à la branche principale associée</i></p>
      <p>git checkout -b <b>NOM BRANCHE</b> ET git checkout <b>NOM BRANCHE</b> <i>Pour créer une branche et pour passer d'une branche à une autre</i></p>
      <p>git remote –v ET git remote add origin '93.188.160.58' <i>La commande suivante répertorie les dépôts distants actuellement configurés et cette commande permet à l’utilisateur de connecter le dépôt local à un serveur distant</i></p>
      <p>git branch <b>NOM BRANCHE</b> ET git branch –d <b>NOM BRANCHE</b> <i>Pour créer une nouvelle branche et pour supprimer une branche</i>  </p>
      <p>git pull <i>Pour fusionner toutes les modifications présentes sur le dépôt distant dans le répertoire de travail local, la commande pull est utilisée. </i></p>
      <p>git merge <b>NOM BRANCHE</b> <i> La commande git merge est utilisée pour fusionner une branche dans la branche active</i> </p>
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
