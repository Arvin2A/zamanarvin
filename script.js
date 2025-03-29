function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    const activeTab = document.getElementById(tabName);
    /*if (activeTab) {
        const computedStyle = window.getComputedStyle(activeTab);
        if (computedStyle.animationName !== "none") {
            activeTab.style.animation = "fadeInUP 1s ease-in-out"; // Apply animation
        }
    }*/

    if (evt) {
        evt.currentTarget.className += " active";
    }
}
function enableDarkMode() {
    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode"); // Ensure body also has the dark mode class
    const darkModeToggle = document.getElementById("darkModeToggle");
    document.documentElement.style.backgroundColor = "#000000"; // Dark background
    document.body.style.backgroundColor = "#000000";
    if (darkModeToggle) {
        darkModeToggle.textContent = "☀️"; // Change to sun icon for light mode
    }
}

function disableDarkMode() {
    document.documentElement.classList.remove("dark-mode"); // Remove from root element
    document.body.classList.remove("dark-mode");
    const darkModeToggle = document.getElementById("darkModeToggle");
    document.documentElement.style.backgroundColor = "#ffffff"; // Reset to default background
    document.body.style.backgroundColor = "#ffffff"; // Reset body background
    if (darkModeToggle) {
        darkModeToggle.textContent = "🌙"; // Change to moon icon for dark mode
    }
}
function toggleDarkMode() {
    const html = document.documentElement;
    if (html.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}