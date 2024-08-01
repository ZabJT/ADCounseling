function scrollToElement(elementSelector, instance = 0) {
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight; // Get the height of the fixed navigation bar
    const offset = navHeight + 160; // Adjust this value to ensure the element is not overlapped by the navigation

    if (elementSelector === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const elements = document.querySelectorAll(elementSelector);
        if (elements.length > instance) {
            const targetPosition = elements[instance].getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    }
}

// Event listeners for smooth scrolling
linkHome.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToElement('top'); // Scroll to the top of the page
});

link1.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToElement('.header');
});

link2.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToElement('.header', 1);
});

link3.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    scrollToElement('.column');
});

// Fixed navigation behavior on scroll
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});
