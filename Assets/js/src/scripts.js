$(function() {
  // Fonction pour le message d'accueil
  // https://safi.me.uk/typewriterjs/

  var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Je suis Cindy Blanc, Développeuse Web et Web Mobile junior.')
    .pauseFor(2500)
    .deleteAll()
    .start();

    $(".down").on('click', function() {
      $(".lien_Menu_Responsive").slideUp("slow");
    })

  // Fonction pour afficher dans un alert dès qu'on click sur Envoyer

    $(".inputBtn").click(function () { 
      alert("L'envoi de message n'est pas encore disponible. Merci de me contacter par mail : cindy.blanc.1006@gmail.com");
      
    }); 
 
});