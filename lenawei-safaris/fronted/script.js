document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
                navMenu.classList.remove("active");
            }
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });

    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll(".lazy-load");
    lazyImages.forEach(img => {
        img.onload = () => img.classList.add("loaded");
    });

    // WhatsApp Live Chat
    const chatButton = document.createElement("div");
    chatButton.innerHTML = `<a href="https://wa.me/yourwhatsappnumber" target="_blank" class="whatsapp-button">💬 Chat with Us</a>`;
    document.body.appendChild(chatButton);

    // Form Validation for Bookings
    const bookingForm = document.querySelector("#booking-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const safari = document.querySelector("#safari").value;
            
            if (name.trim() === "" || email.trim() === "" || safari.trim() === "") {
                alert("Please fill in all required fields.");
                event.preventDefault();
            }
        });
    }

    // Interactive Map Initialization
    if (document.querySelector("#safari-map")) {
        var map = L.map("safari-map").setView([-1.286389, 36.817223], 6);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
        L.marker([-1.286389, 36.817223]).addTo(map).bindPopup("Lenawei Safaris HQ, Nairobi").openPopup();
    }
});
