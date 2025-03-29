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
    if (activeTab) {
        const computedStyle = window.getComputedStyle(activeTab);
        if (computedStyle.animationName !== "none") {
            activeTab.style.animation = "fadeInUP 1s ease-in-out"; // Apply animation
        }
    }

    if (evt) {
        evt.currentTarget.className += " active";
    }
}