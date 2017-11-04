'use strict';
document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
    
var fordropdown = document.querySelector('.for-dropdown');
var dropdown = document.querySelector('.dropdown');
fordropdown.addEventListener('mouseover', function(){
dropdown.style.display = 'block';
});
fordropdown.addEventListener('mouseleave', function(){
dropdown.style.display = 'none';
});
 // tutaj kończę zadanie 1

var buttons = document.querySelectorAll('.read-more');
    function showHide() {
    //buttons[0].addEventListener('click', function() {   
      var textArea = this.previousElementSibling;
      // Poniższa linijka sprawdza, czy `style.display` jest ustawiony na `none` LUB jest pusty
      // Dwie kreski obok siebie, czyli || oznaczają LUB, więc aby wykonał się kod podany w nawiasie klamrowym
      // warunek po jednej albo po drugiej stronie kresek musi być spełniony
      if (textArea.style.display === 'none' || textArea.style.display === '') {
      	// ten kod wykona się, gdy spełni się jeden z powyższych warunków
        textArea.style.display = 'block';
        this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
      } 
      else {
         // ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
        // gdy `style.display` jest inny niż `none` oraz gdy nie jest pusty
      textArea.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
      };
     };
	    for (var i = 0; i <= buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
        }
  
});
  
// kończę zadanie 2


