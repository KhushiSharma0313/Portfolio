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
    // Skills data
    const skillsData = {
        labels: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'React', 'PHP', 'Node.js', 'C', 'C++'],
        data: [90, 85, 80, 85, 85, 75, 70, 75, 80, 75], // Replace with your proficiency percentages
        backgroundColors: [
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
        borderColors: [
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
        ]
    };

    // Chart configuration
    const chartConfig = {
        type: 'pie',
        data: {
            labels: skillsData.labels,
            datasets: [{
                label: 'Skill Proficiency',
                data: skillsData.data,
                backgroundColor: skillsData.backgroundColors,
                borderColor: skillsData.borderColors,
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
