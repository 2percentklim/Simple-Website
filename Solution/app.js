// Enables strict mode which helps catch common coding errors
'use strict';

// Select the button element
const switcher = document.querySelector('.btn');

// Add a click event listener to the button
switcher.addEventListener('click', function() {
    /* 
    Toggles the dark/light-theme class on the <body> element
    If the class exists, it's removed; if it doesn't exist, it's added.
    */
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Retrieve the current class name of the body element
    const className = document.body.className;

    // Update the button text based on the current theme
    if (className === 'dark-theme') {
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }

    // Log the current class name to the console
    console.log('Current class name: ' + className);
});