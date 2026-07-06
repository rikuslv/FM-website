//make with ai help

// Check localStorage and select elements
let darkMode = localStorage.getItem('darkMode');
const themeSwitch = document.getElementById('theme_switch');

// Function to enable dark mode
const enableDarkMode = () => {
    document.body.classList.add('dark_mode');
    localStorage.setItem('darkMode', 'enabled');
};

// Function to disable dark mode
const disableDarkMode = () => {
    document.body.classList.remove('dark_mode');
    localStorage.setItem('darkMode', null);
};

// If the user already enabled darkMode previously, keep it enabled
if (darkMode === 'enabled') {
    enableDarkMode();
}

// Add click event listener to the button
themeSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode'); 
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {  
        disableDarkMode(); 
    }
});
