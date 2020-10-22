// Fonction pour le message d'accueil
// https://webdevpro.net/js-effet-apparition-lettres/

$(function() { 
  const htmlP = document.getElementById("event_accueil");
  const txt = htmlP.dataset.label;
  let i 	= 0 ;

  function showLetters()
  {
    let timeOut ;
    if(i < txt.length)
    {
      htmlP.innerHTML += `<span>${txt[i]}</span>` ;
      timeOut = setTimeout(showLetters,50)
      i++
    }
    else
    {
      clearTimeout(timeOut);
      console.log("end")
    }
  };


  // Fonction pour le scrolling de la navbar 


  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar = document.getElementById("menu_navBar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }




  // Fonction pour afficher dans un alert dès qu'on click sur Envoyer

    $(".inputBtn").click(function () { 
      alert("Votre message a bien été envoyé !");
      
    }); 
 
   
  // Fonction changement de couleur à un changement de scroll 
  


});