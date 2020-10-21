// Fonction pour le message d'accueil
// https://webdevpro.net/js-effet-apparition-lettres/
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
}
showLetters();


// Fonction pour le scrolling de la navbar 


// $(function() {
//     $(".loader").fadeOut("1000"); 
// });

let navbar = document.getElementById("navBar");
let sticky = window.scrollY;

console.log(sticky);

$(function() {
    if(window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    
});




// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }





// <div id="navbar">
//   <a class="active" href="javascript:void(0)">Home</a>
//   <a href="javascript:void(0)">News</a>
//   <a href="javascript:void(0)">Contact</a>
// </div>



// Fonction pour afficher dans un alert ce qui est écrit dans les input de contact 

// https://apcpedagogie.com/recuperer-la-valeur-dun-input-en-javascript/ 


function getValue() {
    var varName = document.getElementsByClassName("varName").value;
    var varEmail = document.getElementsByClassName("varEmail").value;
    var varTel = document.getElementsByClassName("varTel").value;
    var varCom = document.getElementsByClassName("varCom").value;

    alert("Bienvenue " + varName + ". Votre email est " + varEmail + " et votre numéro de téléphone est " + varTel + ". Voici votre commentaire : " + varCom);
}