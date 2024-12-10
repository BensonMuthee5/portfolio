// GitHub and Download CV buttons
document.querySelectorAll('a.button').forEach(function(button) {
    button.addEventListener('click', function(event) {
        const href = this.getAttribute('href');
        
        // Prevent default if there's no valid link
        if (!href || href === '#') {
            event.preventDefault();
            console.log('No valid link assigned to this button.');
        } else {
            console.log('Navigating to: ' + href);
        }
    });
});

// Form submission handler for Formspree
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        if (response.ok) {
            console.log('Message sent successfully!');
            alert('Message sent successfully!');
            form.reset();  // Reset the form after successful submission
        } else {
            console.log('Failed to send message.');
            alert('Failed to send message. Please try again.');
        }
    }).catch(function(error) {
        console.error('Error sending message:', error);
        alert('Error sending message. Please check your internet connection or try again later.');
    });
});

// Return to top button functionality
let returnToTopBtn = document.getElementById("returnToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        returnToTopBtn.style.display = "block";
    } else {
        returnToTopBtn.style.display = "none";
    }
}

returnToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation menu links
document.querySelectorAll('.nav-menu a').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
