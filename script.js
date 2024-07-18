// Get the canvas element
var ctx = document.getElementById('skillsChart').getContext('2d');

// Data for the chart
var data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'SQL'],
    datasets: [{
        label: 'Skill Level',
        data: [90, 85, 80, 85, 75, 70, 65],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

// Configuration options
var options = {
    indexAxis: 'y', // Changed to y for bar chart
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            max: 100
        },
        x: {
            grid: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

// Create the chart
var skillsChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
