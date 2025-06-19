// Select all sections
const sections = document.querySelectorAll('.hidden');

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const { target } = entry;

        // Add fade-in-up when section enters viewport
        if (entry.isIntersecting) {
            // target.classList.remove('fade-out');
            target.classList.add('fade-in-up');
        } 
        // Add fade-out when section leaves viewport
        else {
            target.classList.remove('fade-in-up');
            // target.classList.add('fade-out');
        }
    });
}, { threshold: 0.5 }); // Trigger at 50% visibility

// Observe each section
sections.forEach(section => observer.observe(section));


// Select all sections
const contant = document.querySelectorAll('.hidden-content');

// Intersection Observer for animations
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const { target } = entry;

        // Add fade-in-up when section enters viewport
        if (entry.isIntersecting) {
            // target.classList.remove('fade-out');
            target.classList.add('fade-in-up2');
        } 
        // Add fade-out when section leaves viewport
        else {
            target.classList.remove('fade-in-up2');
            // target.classList.add('fade-out');
        }
    });
}, { threshold: 0.5 }); // Trigger at 50% visibility

// Observe each section
contant.forEach(contant => observer2.observe(contant));


// left t oright

// Select all sections
const rightContant = document.querySelectorAll('.left-to-right');

// Intersection Observer for animations
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const { target } = entry;

        // Add fade-in-up when section enters viewport
        if (entry.isIntersecting) {
            // target.classList.remove('fade-out');
            target.classList.add('fade-in-right');
        } 
        // Add fade-out when section leaves viewport
        else {
            target.classList.remove('fade-in-right');
            // target.classList.add('fade-out');
        }
    });
}, { threshold: 0.5 }); // Trigger at 50% visibility

// Observe each section
rightContant.forEach(rightContant => observer3.observe(rightContant));




// left t right

// Select all sections
const leftContant = document.querySelectorAll('.right-to-left');

// Intersection Observer for animations
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const { target } = entry;

        // Add fade-in-up when section enters viewport
        if (entry.isIntersecting) {
            // target.classList.remove('fade-out');
            target.classList.add('fade-in-left');
        } 
        // Add fade-out when section leaves viewport
        else {
            target.classList.remove('fade-in-left');
            // target.classList.add('fade-out');
        }
    });
}, { threshold: 0.5 }); // Trigger at 50% visibility

// Observe each section
leftContant.forEach(leftContant => observer4.observe(leftContant));

// zoom in

// Select all sections
const zoomContant = document.querySelectorAll('.zoom-in');

// Intersection Observer for animations
const observer5 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const { target } = entry;

        if (entry.isIntersecting) {
          // Re-trigger the animation by removing and re-adding the class
          target.classList.remove('fade-zoom-in');
          void target.offsetWidth; // Trigger reflow to restart the animation
          target.classList.add('fade-zoom-in');
        } else {
          // Optionally remove the animation class when out of view
          target.classList.remove('fade-zoom-in');
        }
    });
}, { threshold: 0.5 }); // Trigger at 50% visibility

// Observe each section
zoomContant.forEach(zoomContant => observer5.observe(zoomContant));







// SCROLL-TOP BUTTON
// Get the button
var mybutton = document.querySelector(".to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", function () {
  scrollFunction();
});

function scrollFunction() {
  if (window.pageYOffset > 50) {
    mybutton.classList.add("active");
  } else {
    mybutton.classList.remove("active");
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
// SCROLL-TOP BUTTON
// team carousel
const carouselWrapper = document.getElementById('carouselWrapper');
const cards = Array.from(carouselWrapper.children);
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 2; // Start with the middle card (Card 3)

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove('middle');
        card.style.opacity = '0.5';
        card.style.transform = 'scale(0.8)';
        const offset = index - currentIndex;
        card.style.transform = `translateX(${offset * 100}%) scale(${index === currentIndex ? 1.2 : 0.8})`;
        if (index === currentIndex) {
            card.classList.add('middle');
            card.style.opacity = '1';
        }
    });
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
}

nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// Auto-loop
setInterval(nextCard, 3000);

// Initial setup
updateCarousel();
  


function about(){
  window.location="about.php";
}

function sendMessage(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

const serviceId = "service_y5ik7ea";
const templateId = "template_dquh9fi"

emailjs.send(serviceId,templateId,params)
.then((res) =>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your Message sent Successfully");
  }
)
.catch((err) => console.log(err));
}

function sendToWhatsapp(){
  window.location="https://wa.me/+94777327635";
}
