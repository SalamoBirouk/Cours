// Recherche dynamique
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const modules = document.querySelectorAll(".module");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        modules.forEach(module => {
            const title = module.querySelector("h3").textContent.toLowerCase();
            if (title.includes(query)) {
                module.style.display = "block";
            } else {
                module.style.display = "none";
            }
        });
    });
});
