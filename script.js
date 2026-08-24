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
            activeTab.style.animation = "fadeInUP 1s ease-in-out"; 
        }
    }*/

    if (evt) {
        evt.currentTarget.className += " active";
    }
}
function handleTabNavigation(event) {
    const tabs = document.getElementsByClassName("tablinks"); 
    const activeTab = document.querySelector(".tablinks.active"); 
    let currentIndex = Array.from(tabs).indexOf(activeTab); 

    if (event.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % tabs.length; // Wrap around to the first tab
        tabs[nextIndex].click(); 
    } else if (event.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length; 
        tabs[prevIndex].click();
    }
}
document.addEventListener("keydown", handleTabNavigation);
function enableDarkMode() {
    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode"); 
    const darkModeToggle = document.getElementById("darkModeToggle");
    document.documentElement.style.backgroundColor = "#000000"; 
    document.body.style.backgroundColor = "#000000";
    if (darkModeToggle) {
        darkModeToggle.textContent = "☀️"; 
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
        saveModeToLocalStorage(false);
    } else {
        enableDarkMode();
        saveModeToLocalStorage(true)
    }
}
function saveModeToLocalStorage(darkModeEnabled) {
    localStorage.setItem("dark_mode", darkModeEnabled);
}

// Load mode from localStorage
function loadModeFromLocalStorage() {
    const darkMode = localStorage.getItem("dark_mode");
    if (darkMode === null || darkMode === "true") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

loadModeFromLocalStorage();

loadModeFromLocalStorage();

function handleSwipeRight() {
    var tabs = document.getElementsByClassName("tablinks");
    var activeTab = document.querySelector(".tablinks.active");
    var currentIndex = Array.from(tabs).indexOf(activeTab);
    var nextIndex = (currentIndex + 1) % tabs.length; 
    tabs[nextIndex].click(); 
}
function handleSwipeLeft() {
    // Handle swipe left action
    var tabs = document.getElementsByClassName("tablinks");
    var activeTab = document.querySelector(".tablinks.active");
    var currentIndex = Array.from(tabs).indexOf(activeTab);
    var prevIndex = (currentIndex - 1 + tabs.length) % tabs.length; // Wrap around to the last tab
    tabs[prevIndex].click(); 
}
let startX, startY;

document.addEventListener('touchstart', (e) => {
  console.log("Touch Start");
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
  console.log("Touch End");
  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const swipeThreshold = 50;
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
    if (deltaX > 0) {
      console.log('Swipe Right');
      handleSwipeRight(); 
    } else {
      console.log('Swipe Left');
      handleSwipeLeft(); 
    }
  }
});