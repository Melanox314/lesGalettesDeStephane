// script to manage the menu for the small devices (top right button to open/close) 

const btn_p_menu = document.getElementById("btn-phone-menu"); //the button to access the menu

var menu = document.querySelector('.menu') //nav menu
var cont_menu = document.querySelector('.container-menu') //menu container 
var cont_btn_menu = document.querySelector('.container-btn-access-menu2') //the small "connect" button in the menu container



/*the check on client width should be around the Listener, but for the sake of fun 
(reducing the width manually to phone proportion, without reloading the page)
we use a more dynamic - albeit slower - way*/


btn_p_menu.addEventListener('click', function () {
	if (document.documentElement.clientWidth < 800) {
	  menu.classList.toggle('show-menu')
	  cont_menu.classList.toggle('show-container-menu')
	  cont_btn_menu.classList.toggle('show-container-btn-access-menu2')
	}
});

/* below the "right" implementation*/

/*
const btn_p_menu = document.getElementById("btn-phone-menu");

var menu = document.querySelector('.menu')
var cont_menu = document.querySelector('.container-menu')
var cont_btn_menu = document.querySelector('.container-btn-access-menu2')

if (document.documentElement.clientWidth < 800) {
	btn_p_menu.addEventListener('click', function () {
	  menu.classList.toggle('show-menu')
	  cont_menu.classList.toggle('show-container-menu')
	  cont_btn_menu.classList.toggle('show-container-btn-access-menu2')
	});
}*/
