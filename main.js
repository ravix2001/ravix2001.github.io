// This script handles the hamburger menu toggle and form submission

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});


// Smooth scrolling for anchor links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start' // Align to the top of the section
            });
        }
    });
});


// Form submission script
// This script submits the form data to a Google Apps Script web app

const scriptURL = 'https://script.google.com/macros/s/AKfycbyprsAjBP_kbXJKu0p19NojPZvgHmYA0vrbK2H-HM0FV9mKEQdvvYlPIQ6QSFar7UFc/exec'
const form = document.forms['submit-to-google-sheet']
const toast = document.getElementById("toast");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            showToast("Submitted successfully!");
            console.log('Success!', response)
            form.reset()
        })
        .catch(error => {
            showToast("Submission failed. Try again!");
            console.error('Error!', error.message);
        });
})

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}