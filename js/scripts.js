/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
// Detect when the back button is clicked and reload the page
window.addEventListener("popstate", function () {
    location.reload(); // Reloads the page only when navigating back
});

// Handle anchor links for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target element's ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Enable smooth scrolling
            });
        }

        // Update URL hash without reloading the page
        history.pushState(null, null, `#${targetId}`);
    });
});

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');

        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    
    // Collapse responsive navbar when toggler is visible
    
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const btn4=document.getElementById("btn4")
const btn5=document.getElementById("btn5")
const btn6=document.getElementById("btn6")
const btn7=document.getElementById("btn7")
const body=document.getElementById("page-top")
const popup=document.getElementById("popup")
const popup2=document.getElementById("popup-tutoring")
const popup3=document.getElementById("popup-job")
const popup4=document.getElementById("popup-delivery")
const popup5=document.getElementById("popup-sales")
const popup6=document.getElementById("popup-consult")
const container=document.getElementsByClassName("container-lg")
const exit=document.getElementById("exit")
const exit1=document.getElementById("exit1")
const exit2=document.getElementById("exit2")
const exit3=document.getElementById("exit3")
const exit4=document.getElementById("exit4")
const exit5=document.getElementById("exit5")
btn1.onclick=function(){
    body.style.visibility="hidden"
    body.style.overflow="hidden"
    popup.style.visibility="visible"
    popup.classList.add("open")
}
btn2.onclick=function(){
    body.style.visibility="hidden"
    body.style.overflow="hidden"
    popup.style.visibility="visible"
    popup.classList.add("open")
    }
btn3.onclick=function(){
    body.style.visibility="hidden"
    body.style.overflow="hidden"
    popup2.style.visibility="visible"
    popup2.classList.add("open")
    }
btn4.onclick=function(){
    body.style.visibility="hidden"
    body.style.overflow="hidden"
    popup3.style.visibility="visible"
    popup3.classList.add("open")
    }
btn5.onclick=function(){
    body.style.visibility="hidden"
    body.style.overflow="hidden"
    popup4.style.visibility="visible"
    popup4.classList.add("open")
    }
btn6.onclick=function(){
    body.style.visibility="hidden"
    body.style.overflow="hidden"
    popup5.style.visibility="visible"
    popup5.classList.add("open")
    }
btn7.onclick=function(){
    body.style.visibility="hidden"
    body.style.overflow="hidden"
    popup6.style.visibility="visible"
    popup6.classList.add("open")
    }
    
exit.onclick=function(){
    body.style.visibility="visible"
    body.style.overflow="auto"
    popup.style.visibility="hidden"
    popup2.style.visibility="hidden"
    popup3.style.visibility="hidden"
    popup4.style.visibility="hidden"
    popup5.style.visibility="hidden"
    popup6.style.visibility="hidden"
    popup.classList.remove("open")

}
exit1.onclick=function(){
    body.style.visibility="visible"
    body.style.overflow="auto"
    popup.style.visibility="hidden"
    popup2.style.visibility="hidden"
    popup3.style.visibility="hidden"
    popup4.style.visibility="hidden"
    popup5.style.visibility="hidden"
    popup6.style.visibility="hidden"
    popup.classList.remove("open")

}
exit2.onclick=function(){
    body.style.visibility="visible"
    body.style.overflow="auto"
    popup.style.visibility="hidden"
    popup2.style.visibility="hidden"
    popup3.style.visibility="hidden"
    popup4.style.visibility="hidden"
    popup5.style.visibility="hidden"
    popup6.style.visibility="hidden"
    popup.classList.remove("open")

}
exit3.onclick=function(){
    body.style.visibility="visible"
    body.style.overflow="auto"
    popup.style.visibility="hidden"
    popup2.style.visibility="hidden"
    popup3.style.visibility="hidden"
    popup4.style.visibility="hidden"
    popup5.style.visibility="hidden"
    popup6.style.visibility="hidden"
    popup.classList.remove("open")

}
exit4.onclick=function(){
    body.style.visibility="visible"
    body.style.overflow="auto"
    popup.style.visibility="hidden"
    popup2.style.visibility="hidden"
    popup3.style.visibility="hidden"
    popup4.style.visibility="hidden"
    popup5.style.visibility="hidden"
    popup6.style.visibility="hidden"
    popup.classList.remove("open")

}
exit5.onclick=function(){
    body.style.visibility="visible"
    body.style.overflow="auto"
    popup.style.visibility="hidden"
    popup2.style.visibility="hidden"
    popup3.style.visibility="hidden"
    popup4.style.visibility="hidden"
    popup5.style.visibility="hidden"
    popup6.style.visibility="hidden"
    popup.classList.remove("open")

}
// Select the navbar collapse element
const navbarCollapse = document.getElementById('navbarResponsive');

// Function to check if a click happened outside the navbar toggle area
document.addEventListener('click', function (event) {
    const isClickInsideNavbar = navbarCollapse.contains(event.target);
    const isClickOnToggle = document.querySelector('.navbar-toggler').contains(event.target);

    // If the navbar is expanded and the click is outside the navbar and the toggle button
    if (!isClickInsideNavbar && !isClickOnToggle && navbarCollapse.classList.contains('show')) {
        // Use Bootstrap's collapse method to close the navbar
        const collapseInstance = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        collapseInstance.hide(); // Collapse the navbar
    }
});

