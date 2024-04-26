document.getElementById('lcpilot').addEventListener ('click', function() {
    var projectName = document.getElementById('project_name');
    var projectDescription = document.getElementById('project_description');

    projectName.textContent = "LC Pilot";
    projectDescription.textContent = "Currently creating a problem-solving website using next.js and firebase to allow users to choose a challenging problem from our database, write their code in our text editor, run their code, and get tailored hints through our AI Hint Bot. This project will be a prime problem-solving platform for users to hone coding skills and practice their technical programming."
})

document.getElementById('wikiguess').addEventListener ('click', function() {
    var projectName = document.getElementById('project_name');
    var projectDescription = document.getElementById('project_description');

    projectName.textContent = "WikiGuess";
    projectDescription.textContent = "Used Wikipedia and ChatGPT APIs to create a game overnight where players guess between Wikipedia and ChatGPT written articles, resulting in a polished and fun single-player game that won awards and prizes for various categories.";
})