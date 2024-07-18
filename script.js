// script.js

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the context of the canvas where the skills chart will be rendered
    const ctx = document.getElementById('skillsChart').getContext('2d');

    // Create a new Chart instance
    const skillsChart = new Chart(ctx, {
        type: 'radar', // The type of chart we want to create
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'SQL'], // Labels for the chart
            datasets: [{
                label: 'Skills Proficiency', // The label for the dataset
                data: [85, 80, 90, 75, 70, 65, 80], // Data points representing the proficiency in each skill
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Background color of the data points
                borderColor: 'rgba(54, 162, 235, 1)', // Border color of the data points
                borderWidth: 2 // Width of the border
            }]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true, // Ensure the scale begins at zero
                    max: 100 // Set the maximum value for the scale
                }
            }
        }
    });

    // Add smooth scroll behavior for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Add a dynamic effect to the Download CV button
    const downloadButton = document.querySelector('.button');
    downloadButton.addEventListener('mouseenter', () => {
        downloadButton.style.backgroundColor = '#4CAF50';
    });

    downloadButton.addEventListener('mouseleave', () => {
        downloadButton.style.backgroundColor = '';
    });
});
