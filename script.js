// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const skillsDataElement = document.getElementById('skillsData');

    // Retrieve skills and proficiencies from data attributes
    const labels = JSON.parse(skillsDataElement.getAttribute('data-skills'));
    const proficiencies = JSON.parse(skillsDataElement.getAttribute('data-proficiencies'));

    // Chart configuration
    const chartConfig = {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Skill Proficiency',
                data: proficiencies,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)', // Red
                    'rgba(54, 162, 235, 0.5)', // Blue
                    'rgba(255, 206, 86, 0.5)', // Yellow
                    'rgba(75, 192, 192, 0.5)', // Green
                    'rgba(153, 102, 255, 0.5)', // Purple
                    'rgba(255, 159, 64, 0.5)', // Orange
                    'rgba(255, 99, 132, 0.5)', // Red
                    'rgba(54, 162, 235, 0.5)', // Blue
                    'rgba(255, 206, 86, 0.5)', // Yellow
                    'rgba(75, 192, 192, 0.5)' // Green
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}%`;
                        }
                    }
                }
            }
        }
    };

    // Get the skills chart canvas element
    const skillsChartCanvas = document.getElementById('skillsChart');

    // Ensure the chart canvas element exists before initializing
    if (skillsChartCanvas) {
        // Initialize the skills chart
        new Chart(skillsChartCanvas, chartConfig);
    }
});
