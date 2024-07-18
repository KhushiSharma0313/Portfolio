document.addEventListener('DOMContentLoaded', (event) => {
    // Chart.js initialization
    const ctx = document.getElementById('skillsChart').getContext('2d');
    const skillDescriptions = {
        'Programming Languages': 'Proficiency in Python, Java, JavaScript, HTML, CSS, React, PHP, Node.js, C, and C++.',
        'Web Development': 'Experience in designing and developing responsive websites using HTML, CSS, JavaScript, and React.js.',
        'Database Management and Analysis': 'Skills in MySQL, SciPy, NumPy, Matplotlib, Excel, Power BI, and Tableau.',
        'AI and Automation': 'Experience with AI automation scripts using Python, TensorFlow, and NLP.',
        'Project Management': 'Expertise in Agile methodologies, including Scrum and Sprint Planning, and managing multiple projects effectively.',
        'Data Analysis': 'Strong ability in data analysis using Python, Excel, and Matplotlib, and creating visualizations with Tableau.',
        'Software Development': 'Experience in developing applications and software components, with a focus on security and quality assurance.',
        'Technical Documentation': 'Ability to produce thorough and precise technical documentation and unit testing.',
        'Problem-Solving': 'Strong problem-solving skills demonstrated through various projects and roles.',
        'Collaboration and Communication': 'Effective collaboration in Agile teams, client interactions, and presenting research findings at conferences.'
    };

    const initialData = {
        labels: Object.keys(skillDescriptions),
        datasets: [{
            data: [85, 80, 75, 90, 85, 70, 65, 60, 75, 70],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(199, 199, 199, 0.6)',
                'rgba(83, 102, 255, 0.6)',
                'rgba(133, 159, 64, 0.6)',
                'rgba(255, 102, 99, 0.6)'
            ],
            borderWidth: 1
        }]
    };

    let skillsChart = new Chart(ctx, {
        type: 'pie',
        data: initialData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label;
                        }
                    }
                }
            },
            onClick: (event, elements) => {
                if (elements && elements.length > 0) {
                    const clickedIndex = elements[0].index;
                    const skillName = skillsChart.data.labels[clickedIndex];
                    showSkillDescription(skillName);
                }
            }
        }
    });

    // Function to show skill description in modal
    function showSkillDescription(skillName) {
        const modal = document.getElementById('skillModal');
        const skillTitle = document.getElementById('skillTitle');
        const skillDescription = document.getElementById('skillDescription');

        skillTitle.textContent = skillName;
        skillDescription.textContent = skillDescriptions[skillName];

        modal.style.display = 'block';
    }

    // Get the modal and close button
    const modal = document.getElementById('skillModal');
    const span = document.getElementsByClassName('close')[0];

    // Close the modal when the close button is clicked
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // Close the modal when clicking outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Toggle light/dark mode functionality
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.remove('day-theme');
            document.body.classList.add('night-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('night-theme');
            document.body.classList.add('day-theme');
            localStorage.setItem('theme', 'light');
        }
    }

    // Check local storage for theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.remove('day-theme');
        document.body.classList.add('night-theme');
        toggleSwitch.checked = true;
    } else {
        document.body.classList.remove('night-theme');
        document.body.classList.add('day-theme');
    }
});
