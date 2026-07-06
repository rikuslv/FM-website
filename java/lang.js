//make with ai help
// Translation data object 
const translations = {
    en: {
        "nav-home": "Home",
        "nav-gallery": "Gallery",
        "nav-service": "Service",
        "nav-pricing": "Prices",
        "nav-contacts": "Contacts",
        "toggle-text": "LV",
        "main-title": "FM - Foto Market",
        "main-subtitle": "We bring your photos to life",
        "desc-text": "Our specialization lies in photography editing.<br><br>Our team comprises a small group consisting of one photographer, one photo editor, and one client finder.",
        
        //Gallery Page Component Translations 
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
        
        "services-title": "Get more with our services, pay less",
        "services-subtitle": "Make the most with your photography plan, all for a price that fits your budget.",
        
        "service1-title": "Online beginners",
        "service1-sub": "Start small and spend less",
        "service1-desc": "Ideal for setting up your personal website, WordPress blog or business landing page, these hosting plans are simple and affordable.",
        
        "service2-title": "Small businesses",
        "service2-sub": "Get more power and control",
        "service2-desc": "Ideal if you're a solopreneur, e-commerce specialist, or web developer looking to add more power and speed to your company website or online business.",
        
        "service3-title": "Large businesses",
        "service3-sub": "Invest in maximum power",
        "service3-desc": "Perfect for websites that demand the highest performance, enjoy all the flexibility and security with sole access to every resource.",
        
        "price-title": "price plans for your photography needs",
        "price-subtitle": "Choose the package that fits your creative workflow best.",
        "price-description": "Explore our pricing options, from quick photo edits to full branding and business packages. Each plan is designed for high-quality results and fast turnaround.",
        
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
        
        // --- Gallery Page Component Translations ---
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
        
        "services-title": "Iegūstiet vairāk ar mūsu pakalpojumiem, maksājiet mazāk",
        "services-subtitle": "Maksimāli izmantojiet savu fotogrāfijas plānu, visu par cenu, kas jums atbilst.",
        
        "service1-title": "Tiešsaistes iesācēji",
        "service1-sub": "Sāciet mazu un tērējiet mazāk",
        "service1-desc": "Ideāli piemērots personīgās vietnes, WordPress emuāra vai uzņēmuma izlaides lapas izveidošanai, šie mitināšanas plāni ir vienkārši un pieejami.",
        
        "service2-title": "Mazie uzņēmumi",
        "service2-sub": "Iegūstiet vairāk jaudas un kontroles",
        "service2-desc": "Ideāls, ja esat patstāvīgs uzņēmējs, e-komercijas speciālists vai tīmekļa izstrādātājs, kurš vēlas pievienot vairāk jaudas un ātruma savam uzņēmuma vietnei vai tiešsaistes biznesam.",
        
        "service3-title": "Lieli uzņēmumi",
        "service3-sub": "Ieguldiet maksimālajā jaudā",
        "service3-desc": "Ideāli vietnēm, kurām nepieciešama augstākā veiktspēja, baudi visas elastības un drošības iespējas ar ekskluzīvu piekļuvi katram resursam.",
        
        "price-title": "cenu plāni jūsu fotogrāfijas vajadzībām",
        "price-subtitle": "Izvēlieties paketi, kas vislabāk atbilst jūsu radošajam darba plūsmam.",
        "price-description": "Izpētiet mūsu cenu iespējas, sākot no ātrām foto rediģēšanām līdz pilnīgām zīmola un uzņēmējdarbības pakotnēm. Katrs plāns ir izstrādāts augstas kvalitātes rezultātiem un ātram izpildes laikam.",
        
        // Bottom Description
        "gallery-desc": "Tiek demonstrētas dažas no visu laiku vizuāli satriecošākajām un aizraujošākajām filmām. Mūsu klāstā ir pieejama daudzveidīga žanru gamma, sākot no..."
    }
};


let currentLang = localStorage.getItem('selectedLanguage') || 'en';

const langToggleBtn = document.getElementById('lang-toggle');
const htmlTag = document.getElementById('html-lang');


function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Changed to innerHTML to allow <br> tags for spacing
            element.innerHTML = translations[lang][key];
        }
    });
    
    
    if (langToggleBtn) {
        langToggleBtn.textContent = translations[lang] && translations[lang]['toggle-text']
            ? translations[lang]['toggle-text']
            : (lang === 'en' ? 'LV' : 'EN');
    }
    
    if (htmlTag) {
        htmlTag.setAttribute('lang', lang);
    }

    
    localStorage.setItem('selectedLanguage', lang);
}

// Event listener for language toggle button
if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'lv' : 'en';
        updateLanguage(currentLang);
    });
}


updateLanguage(currentLang);
