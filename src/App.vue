<template>
  <div id="app">
    <div class="rowez">
      <div id="nav" >
          <div id="logo">
            <router-link to="/"><img src="./pictures/logo4.png" alt="Logo du site"/></router-link> 
          </div>
        <!--   <span class="daynight">
              <i v-if=" nightDay" @click="swip" class="fas fa-moon"></i>
              <i v-else @click="swip" class="fas fa-sun"></i>
          </span>
 -->
          <div  class='topnav' ref="jedi">
            <div id="pos">
              <router-link class="navhover" to="/" >Home</router-link> 
              <span> |</span>
              <router-link class="navhover" to="/cv">cv</router-link>
              <span> |</span>
              <router-link class="navhover" to="/projet">Projet</router-link> 
              <span> |</span>
              <router-link class="navhover" to="/code">Code</router-link>
            </div>
            <div id="hamburger-button" @click="togg"><i class="fas fa-bars"></i></div>
          </div>
      </div>
      <div id="over" @click="scw">
          
      <router-view/>

      </div>
      <footer>
        <div class="mentions-leg" >
            <router-link class="mentions-css" to="/Mentions">Mentions Légales</router-link> 
        </div>
        <div class="icones">
          <a href="https://github.com/kesank" target="_blank" rel="noopener"><img src="./pictures/1github.svg.png" alt="github"/></a>
          <a href="https://www.linkedin.com/in/kelly-nkana/?originalSubdomain=fr" target="_blank" rel="noopener"><img src="./pictures/linkedin.png"  alt="linkedin" /></a>
        </div>

      </footer>
    </div>
  </div>
</template>


<style>


</style>
<script>
  export default{
        data(){
          return{
            showMenutrue:true,
            nightDay:true
    }

        },
        methods: {

          swip:function(){
            let app=document.getElementById('app');
            let pre=document.getElementById('presentation');
            let night=document.getElementsByClassName('nightbox');
            let box=document.getElementsByClassName('boxnight');
            this.nightDay= !this.nightDay;
            if(this.nightDay === false){
              app.classList.add("nightbox");
              pre.classList.add("boxnight");
            }
            else{
              if(night != null || box != null){
              app=app.classList.remove("nightbox");
              pre=pre.classList.remove("boxnight");

              }
            }
          },
          scw:function(){
            let menu=document.getElementById('pos');
            if(screen.width < 784){
                menu.classList.remove('activated');
                this.showMenutrue=!this.showMenutrue
            }
          },
         /*  hovlink:function(){
                 let menu=document.getElementById('pos');
                 console.log('lien lié au')
                menu.classList.remove('activated');
                this.showMenutrue=!this.showMenutrue
          }, */
          togg: function(){
            screen.width;
            let menu=document.getElementById('pos');
/*             let over=document.getElementById('over');
            let nav=document.getElementById('nav'); */
            if(this.showMenutrue== true){
                menu.classList.add('activated');
                this.showMenutrue=!this.showMenutrue
            }
            else{
                menu.classList.remove('activated');
                this.showMenutrue=!this.showMenutrue
            }

            
          },
        }
    };
  
  

  
</script>