function pauseAnimation() {
    var carouselTrack = document.querySelector('.carousel-track');
    carouselTrack.style.animationPlayState = 'paused';
}

function resumeAnimation() {
    var carouselTrack = document.querySelector('.carousel-track');
    carouselTrack.style.animationPlayState = 'running';
}

function showDropdownOptions() {
    document.getElementById("dropdownOptions").style.display = "block";
}

function hideDropdownOptions() {
    document.getElementById("dropdownOptions").style.display = "none";
}

function toggleDropdownOptions() {
    var dropdown = document.getElementById("dropdownOptions");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}


function toggleMenu() {
    var hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open');
}