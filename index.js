function showSection(sectionId) {
    // Знаходимо всі розділи на сторінці
    let allSections = document.querySelectorAll('.visible-section, .hidden-section');

    // Перебираємо всі розділи і ховаємо їх
    allSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Знаходимо вибраний розділ за його ідентифікатором
    let selectedSection = document.getElementById(sectionId);

    // Якщо розділ існує, встановлюємо йому стиль "display: block", щоб він був видимим
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}