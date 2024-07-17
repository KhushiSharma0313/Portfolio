document.addEventListener('DOMContentLoaded', function() {
    // Skills data
    const skillsData = {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'React.js', 'Node.js'],
        datasets: [{
            label: 'Skill Proficiency',
            data: [90, 85, 80, 85, 75, 70], // Replace with your proficiency percentages
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)', // Red
                'rgba(54, 162, 235, 0.5)', // Blue
                'rgba(255, 206, 86, 0.5)', // Yellow
                'rgba(75, 192, 192, 0.5)', // Green
                'rgba(153, 102, 255, 0.5)', // Purple
                'rgba(255, 159, 64, 0.5)' // Orange
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Get the skills chart canvas element
    const skillsChartCanvas = document.getElementById('skillsChart');

    // Initialize the skills chart as a pie chart
    const skillsChart = new Chart(skillsChartCanvas, {
        type: 'pie',
        data: skillsData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + '%';
                        }
                    }
                }
            }
        }
    });
});
