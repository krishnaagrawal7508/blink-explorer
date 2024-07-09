document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const cardsSection = document.querySelector('.cards');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            loadCategoryContent(category);
        });
    });

    function loadCategoryContent(category) {
        fetch(`category/${category}.html`)
            .then(response => response.text())
            .then(data => {
                cardsSection.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    }

    // Initial load
    loadCategoryContent('featured');
});
