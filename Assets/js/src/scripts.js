$(function() {
  // Fonction pour le message d'accueil
  // https://safi.me.uk/typewriterjs/

  var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Je suis Cindy Blanc, Développeuse Web et Web Mobile en formation.')
    .pauseFor(2500)
    .deleteAll()
    .start();



    // Fonction pour la navbar responsive 


  $(".lien_Menu_Responsive").hide();
    $(".menu_Burger").click(function() {
    $(".lien_Menu_Responsive").slideDown("slow"),
    $(".lien_Menu_Responsive").slideUp("slow"),
    });
  
  // Fonction pour le scrolling de la navbar 




  // Fonction pour afficher dans un alert dès qu'on click sur Envoyer

    $(".inputBtn").click(function () { 
      alert("Votre message a bien été envoyé !");
      
    }); 
 
});