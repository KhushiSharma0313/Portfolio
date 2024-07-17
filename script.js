document.addEventListener('DOMContentLoaded', function() {
    // Skills data
    const skillsData = {
        labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'React.js', 'Node.js'],
        datasets: [{
            label: 'Skill Proficiency',
            data: [90, 85, 80, 85, 75, 70], // Replace with your proficiency percentages
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Red
                'rgba(54, 162, 235, 0.2)', // Blue
                'rgba(255, 206, 86, 0.2)', // Yellow
                'rgba(75, 192, 192, 0.2)', // Green
                'rgba(153, 102, 255, 0.2)', // Purple
                'rgba(255, 159, 64, 0.2)' // Orange
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

    // Chart options
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    };

    // Get the skills chart canvas element
    const skillsChartCanvas = document.getElementById('skillsChart');

    // Initialize the skills chart
    const skillsChart = new Chart(skillsChartCanvas, {
        type: 'bar',
        data: skillsData,
        options: chartOptions
    });
});
