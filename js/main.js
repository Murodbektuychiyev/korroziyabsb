document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Karusel (Avtomatik o‘zgaradigan slayder)
    const images = document.querySelectorAll(".carousel-images img");
    let currentIndex = 0;

    function changeImage() {
        images.forEach(img => img.classList.remove("active"));
        images[currentIndex].classList.add("active");
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 3000);

    // Akkordeon tugmalarining ishlashi
    document.querySelectorAll(".accordion-btn").forEach(button => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Agar hozir ochiq bo‘lsa, yopamiz
            if (content.classList.contains("active")) {
                content.classList.remove("active");
                content.style.maxHeight = null;
            } else {
                // Barcha boshqa ochilganlarni yopamiz
                document.querySelectorAll(".accordion-content").forEach(item => {
                    item.classList.remove("active");
                    item.style.maxHeight = null;
                });

                // Yangi tanlangan qismni ochamiz
                content.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
