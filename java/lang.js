// Translation data object (English comment: Combined object for all pages)
const translations = {
    en: {
        "nav-home": "Home",
        "nav-gallery": "Gallery",
        "nav-service": "Service",
        "nav-pricing": "Pricing",
        "nav-contacts": "Contacts",
        "toggle-text": "LV",
        "main-title": "FM - Foto Market",
        "main-subtitle": "We bring your photos to life",
        "desc-text": "Our specialization lies in photography editing.<br><br>Our team comprises a small group consisting of one photographer, one photo editor, and one client finder.",
        
        // --- English comment: Gallery Page Component Translations ---
        "gallery-title": "Gallery",
        
        // Project 1
        "project1-title": "Horror Project",
        "project1-date": "February - 2023",
        "project1-tag": "Horror",
        
        // Project 2
        "project2-title": "Revved Up",
        "project2-date": "December - 2022",
        "project2-tag": "Action",
        
        // Project 3
        "project3-title": "Cosmic Horrors",
        "project3-date": "October - 2022",
        "project3-tag": "Sci-Fi",
        
        // Bottom Description
        "gallery-desc": "Showcasing some of the most visually stunning and captivating movies of all time. Our selection features a diverse range of genres, from..."
    },
    lv: {
        "nav-home": "Sākums",
        "nav-gallery": "Galerija",
        "nav-service": "Pakalpojumi",
        "nav-pricing": "Cenas",
        "nav-contacts": "Kontakti",
        "toggle-text": "EN",
        "main-title": "FM - Foto Market",
        "main-subtitle": "Mēs atdzīvinām jūsu fotogrāfijas",
        "desc-text": "Mūsu specializācija ir fotogrāfiju apstrāde.<br><br>Mūsu komandu veido neliela grupa, kurā ietilpst viens fotogrāfs, viens foto redaktors un viens klientu piesaistītājs.",
        
        // --- English comment: Gallery Page Component Translations ---
        "gallery-title": "Galerija",
        
        // Project 1
        "project1-title": "Šausmu Projekts",
        "project1-date": "Februāris - 2023",
        "project1-tag": "Šausmas",
        
        // Project 2
        "project2-title": "Uzgriezts Ātrums",
        "project2-date": "Decembris - 2022",
        "project2-tag": "Asa sižeta",
        
        // Project 3
        "project3-title": "Kosmiskās Šausmas",
        "project3-date": "Oktobris - 2022",
        "project3-tag": "Zinātniskā fantastika",
        
        // Bottom Description
        "gallery-desc": "Tiek demonstrētas dažas no visu laiku vizuāli satriecošākajām un aizraujošākajām filmām. Mūsu klāstā ir pieejama daudzveidīga žanru gamma, sākot no..."
    }
};

// English comment: Reads saved language from browser memory, or defaults to 'en'
let currentLang = localStorage.getItem('selectedLanguage') || 'en';

const langToggleBtn = document.getElementById('lang-toggle');
const htmlTag = document.getElementById('html-lang');

// Function to update text content on the page
function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Changed to innerHTML to allow <br> tags for spacing
            element.innerHTML = translations[lang][key];
        }
    });
    
    // English comment: Safe checks so the code won't crash if a specific element is missing on a page
    if (langToggleBtn && translations[lang]['toggle-text']) {
        langToggleBtn.textContent = translations[lang]['toggle-text'];
    }
    
    if (htmlTag) {
        htmlTag.setAttribute('lang', lang);
    }

    // English comment: Saves the selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);
}

// Event listener for language toggle button
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the '#' link from jumping the page
        currentLang = currentLang === 'en' ? 'lv' : 'en';
        updateLanguage(currentLang);
    });
}

// English comment: Automatically run the function immediately when any page loads
updateLanguage(currentLang);