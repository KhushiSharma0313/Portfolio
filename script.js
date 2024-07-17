document.addEventListener('DOMContentLoaded', function() {
    // Skills data
    const skillsData = {
        labels: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'React', 'PHP', 'Node.js', 'C', 'C++'],
        datasets: [{
            label: 'Skill Proficiency',
            data: [9, 8.5, 8, 8.5, 8.5, 7.5, 7, 7.5, 8, 7.5], // Skill levels (out of 10)
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
                            const dataset = skillsData.datasets[tooltipItem.datasetIndex];
                            const skillLevel = dataset.data[tooltipItem.index];
                            return `${dataset.label}: ${skillLevel}/10`;
                        }
                    }
                }
            }
        }
    });
});
