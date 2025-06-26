console.log("Le fichier translate.js est bien chargé !");

// Simuler les données JSON de traduction
const translations = {
    en: { title: "Welcome", description: "This is a test." },
    fr: { title: "Bienvenue", description: "Ceci est un test." },
    ar: { title: "أهلا وسهلا", description: "هذا اختبار." }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    console.log("Langue sélectionnée :", lang);

    if (translations[lang]) {
        document.getElementById("title").textContent = translations[lang].title;
        document.getElementById("description").textContent = translations[lang].description;
    } else {
        console.error("Langue non supportée :", lang);
    }
}

// Ajouter un écouteur sur le bouton de changement de langue
document.getElementById("languageSelector").addEventListener("change", function () {
    changeLanguage(this.value);
});
