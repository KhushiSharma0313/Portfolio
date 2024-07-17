function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'React', 
                'PHP', 'Node.js', 'C', 'C++', 'MySQL', 'SciPy', 'NumPy', 
                'Matplotlib', 'Excel', 'Power BI', 'Tableau', 'Agile Methodologies',
                'Scrum', 'Sprint Planning', 'Unit Testing', 'Automated Testing',
                'Technical Documentation'
            ],
            datasets: [{
                data: [90, 85, 80, 85, 80, 75, 70, 70, 85, 85, 80, 75, 75, 
                       70, 80, 70, 75, 80, 75, 75, 80, 70, 75],
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#FF6384', 
                    '#36A2EB', '#FFCE56', '#FF9F40', '#FF6384', '#36A2EB', 
                    '#FFCE56', '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', 
                    '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', 
                    '#FF6384', '#36A2EB', '#FFCE56'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
});
