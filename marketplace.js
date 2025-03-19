// Add this function for smooth scrolling to categories
function scrollToCategories() {
    const categoriesSection = document.getElementById('categories');
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
}

// Add this to ensure proper layout after DOM loads
document.addEventListener('DOMContentLoaded', function() {
    // Adjust navbar height offset for proper section alignment
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
});

// Menu toggle functionality
function toggleMenu(event) {
    event.preventDefault();
    const menuDropdown = document.getElementById('menuDropdown');
    const dashboardItems = document.getElementById('dashboardItems');
    
    menuDropdown.classList.toggle('active');
    // Reset dashboard items when opening menu
    dashboardItems.classList.remove('active');
}

function toggleDashboard(event) {
    event.preventDefault();
    const dashboardItems = document.getElementById('dashboardItems');
    dashboardItems.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menuContainer = document.querySelector('.menu-container');
    const menuDropdown = document.getElementById('menuDropdown');
    
    if (!menuContainer.contains(event.target)) {
        menuDropdown.classList.remove('active');
        document.getElementById('dashboardItems').classList.remove('active');
    }
});

// Close menu when scrolling
window.addEventListener('scroll', function() {
    const menuDropdown = document.getElementById('menuDropdown');
    menuDropdown.classList.remove('active');
    document.getElementById('dashboardItems').classList.remove('active');
}); 