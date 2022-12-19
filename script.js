/// Select all links on the page
const links = document.querySelectorAll('a');

// Add a click event listener to each link
links.forEach(link => {
    link.addEventListener('click', event => {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the target element to scroll to
        const target = document.querySelector(event.target.getAttribute('href'));

        // Use the scrollTo method to smoothly scroll to the target element
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});
