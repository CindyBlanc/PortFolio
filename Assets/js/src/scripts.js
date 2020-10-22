$(function() {
  // Fonction pour le message d'accueil
  // https://safi.me.uk/typewriterjs/

  var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Je suis Cindy Blanc, Développeuse Web et Web Mobile.')
    .pauseFor(2500)
    .deleteAll()
    .start();



    // Fonction pour la navbar responsive 

    // $("menu_Burger").click(function() {
    //   $(".lien_Menu_Responsive").slideToggle(1000);
    // })


  // Fonction pour le scrolling de la navbar 


  // https://www.w3schools.com/howto/howto_js_sticky_header.asp 




  // Fonction pour afficher dans un alert dès qu'on click sur Envoyer

    $(".inputBtn").click(function () { 
      alert("Votre message a bien été envoyé !");
      
    }); 
 
   
  // Fonction changement de couleur à un changement de scroll 
  


});