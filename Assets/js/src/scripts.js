

// window.addEventListener("scroll", function() {
//     let menuArea=document.getElementById("menu_navBar");
//     console.log(menuArea);
// });


$(function() {
    $(".menu_navBar").hover(function() {
        $(this).css("background-color", "transparent"); 
    }, function() { 
        $(this).css("background-color", " rgb(61, 94, 163)");
    });
    
});

