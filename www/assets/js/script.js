// Initialiser les animations AOS
document.addEventListener('DOMContentLoaded', () => {
  // Initialiser AOS Animation Library
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });

  // Variables DOM
  const navbar = document.querySelector('.navbar');
  const skillItems = document.querySelectorAll('.skill-item');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  const backToTopBtn = document.getElementById('back-to-top');
  const themeToggle = document.getElementById('theme-toggle');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Fonction pour activer les barres de progression des compétences
  function activateSkillBars() {
    skillItems.forEach(item => {
      const progress = item.querySelector('.skill-progress');
      const level = item.getAttribute('data-level');
      progress.style.width = `${level}%`;
    });
  }
  
  // Activer les barres de compétences avec un délai pour l'animation
  setTimeout(activateSkillBars, 300);
  
  // Gestion du scroll pour le navbar et back-to-top button
  window.addEventListener('scroll', () => {
    // Navbar effet de scroll
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
      backToTopBtn.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Menu Mobile Toggle
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
  
  // Fermer le menu mobile lorsqu'un lien est cliqué
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
  
  // Bouton retour en haut
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Gestion du thème sombre
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  
  // Vérifier le thème préféré
  const savedTheme = localStorage.getItem('theme') || 
                   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Appliquer le thème sauvegardé
  if (savedTheme) {
    setTheme(savedTheme);
  }
  
  // Toggle du thème
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });
  
  // Animation de texte typing pour les éléments avec classe 'typing-text'
  const typingElements = document.querySelectorAll('.typing-text');
  
  typingElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
  });

  // Animation de survol pour les cartes
  const cards = document.querySelectorAll('.project-card, .education-card, .skill-category, .contact-card, .timeline-content');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = (y - centerY) / 40;
      const angleY = (centerX - x) / 40;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.01, 1.01, 1.01)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
});

// Adding date
let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

// Language Switcher
let currentLang = 'fr';

function updateLanguage(lang) {
    console.log('Changing language to: ' + lang);
    currentLang = lang;
    
    // Pour chaque élément avec l'attribut data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations && translations[currentLang] && translations[currentLang][key]) {
            console.log('Translating: ' + key + ' to: ' + translations[currentLang][key]);
            element.textContent = translations[currentLang][key];
        } else {
            console.log('Translation missing for: ' + key + ' in language: ' + currentLang);
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.dataset.lang === currentLang;
        console.log('Setting button ' + btn.dataset.lang + ' active: ' + isActive);
        btn.classList.toggle('active', isActive);
    });
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLang);
}

// Initialize language - utilise un événement DOMContentLoaded séparé pour s'assurer que tout est chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded - initializing language switcher');
    
    // Vérifier si le fichier de traduction est chargé
    if (typeof translations === 'undefined') {
        console.error('Translations not loaded!');
        return;
    }
    
    // Langue par défaut
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    console.log('Saved language: ' + savedLang);
    
    // Activer le bouton de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        console.log('Found language button: ' + btn.dataset.lang);
        if (btn.dataset.lang === savedLang) {
            btn.classList.add('active');
            console.log('Set button active: ' + btn.dataset.lang);
        }
        
        // Ajouter l'événement de clic
        btn.addEventListener('click', function() {
            console.log('Language button clicked: ' + this.dataset.lang);
            updateLanguage(this.dataset.lang);
        });
    });
    
    // Appliquer la traduction initiale après un court délai pour s'assurer que tout est chargé
    setTimeout(function() {
        updateLanguage(savedLang);
    }, 100);
});
