// script to change the nav bar depending on the scrolling

const rb = document.getElementById("researchbar");


window.addEventListener ('scroll', () => {
	if (window.scrollY>= 10) {
		rb.classList.add ('scrollView') ;
		rb.classList.remove ('topView') ;
	} 
	else {
		rb.classList.add ('topView') ;
		rb.classList.remove ('scrollView') ;
	}
}) ;

