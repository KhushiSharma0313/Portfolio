// script.js

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the context of the canvas where the skills chart will be rendered
    const ctx = document.getElementById('skillsChart').getContext('2d');

    // Create a new Chart instance
    const skillsChart = new Chart(ctx, {
        type: 'pie', // The type of chart we want to create
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'SQL'], // Labels for the chart
            datasets: [{
                label: 'Skills Proficiency', // The label for the dataset
                data: [85, 80, 90, 75, 70, 65, 80], // Data points representing the proficiency in each skill
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ], // Background colors for each slice
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(201, 203, 207, 1)'
                ], // Border colors for each slice
                borderWidth: 1 // Width of the border
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
            plugins: {
                legend: {
                    position: 'top', // Position the legend at the top
                },
                tooltip: {
                    enabled: true, // Enable tooltips
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
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add event listeners for LinkedIn and GitHub buttons
    document.getElementById('linkedinButton').addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/khushi0313/', '_blank');
    });

    document.getElementById('githubButton').addEventListener('click', () => {
        window.open('https://github.com/KhushiSharma0313', '_blank');
    });
});
