// script.js

document.addEventListener('DOMContentLoaded', function() {

    // Data for skills chart
    const skillsData = {
        labels: ['HTML/CSS', 'JavaScript', 'Python', 'React.js', 'Node.js'],
        datasets: [{
            label: 'Skills',
            data: [80, 75, 70, 65, 60],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF'
            ]
        }]
    };

    // Get the canvas element for skills chart
    const skillsChart = document.getElementById('skillsChart').getContext('2d');

    // Create the pie chart
    new Chart(skillsChart, {
        type: 'pie',
        data: skillsData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                animateScale: true,
                animateRotate: true
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return `${data.labels[tooltipItem.index]}: ${data.datasets[0].data[tooltipItem.index]}%`;
                    }
                }
            }
        }
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Change background color on button click
    const changeColorBtn = document.getElementById('changeColorBtn');
    changeColorBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    // Smooth scroll to section
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionID = this.getAttribute('href');
            document.querySelector(sectionID).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add hover effects to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

});
