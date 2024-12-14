document.getElementById('search-input').addEventListener('input', function() {
  const query = this.value.toLowerCase(); // On récupère la valeur et on la met en minuscule
  const modules = document.querySelectorAll('.module'); // On récupère tous les modules
  
  modules.forEach(function(module) {
    const title = module.querySelector('h3').innerText.toLowerCase(); // Le titre du module
    if (title.includes(query)) {
      module.style.display = 'block'; // On montre le module si le titre contient la recherche
    } else {
      module.style.display = 'none'; // On cache le module sinon
    }
  });
});
