// Liste des cours par module
const courses = {
    anatomie: ["Introduction à l'Anatomie", "Système Musculaire", "Système Nerveux"],
    physiologie: ["Introduction à la Physiologie", "Fonction Cardiaque", "Système Digestif"],
    pathologie: ["Pathologies Respiratoires", "Pathologies Digestives", "Pathologies Neurologiques"]
};

// Fonction pour rechercher des cours
function search() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const results = [];
    for (const module in courses) {
        results.push(...courses[module].filter(course => course.toLowerCase().includes(searchTerm)));
    }
    if (results.length > 0) {
        alert("Résultats trouvés :\n" + results.join("\n"));
    } else {
        alert("Aucun résultat trouvé pour : " + searchTerm);
    }
}

// Fonction pour charger les cours en fonction du module sélectionné
function loadCourses() {
    const module = document.getElementById("moduleSelector").value;
    const coursesList = document.getElementById("coursesList");
    coursesList.innerHTML = ""; // Vider la liste des cours

    if (module && courses[module]) {
        courses[module].forEach(course => {
            const li = document.createElement("li");
            li.textContent = course;
            coursesList.appendChild(li);
        });
    }
}
