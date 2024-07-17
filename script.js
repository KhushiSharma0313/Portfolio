// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Dummy data for the pie chart (replace with your data)
    const pieChartData = {
        labels: ['Projects', 'Skills', 'Experience', 'Education'],
        datasets: [{
            label: 'Portfolio Data',
            data: [25, 20, 30, 25], // Example data percentages
            backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12']
        }]
    };

    // Configuration options for the pie chart
    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
            labels: {
                fontColor: '#333',
                fontFamily: 'Montserrat'
            }
        }
    };

    // Get canvas element and render pie chart
    const pieChartCanvas = document.getElementById('pieChart').getContext('2d');
    const myPieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieChartData,
        options: pieChartOptions
    });

    // Example of adding interactivity to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 12px 20px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        });
    });

    // Function to toggle menu
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

    // Event listener for hamburger icon click
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    hamburgerIcon.addEventListener("click", toggleMenu);
});
