    document.addEventListener("DOMContentLoaded", function () {
    const currentTheme = localStorage.getItem("theme") || "light";
    const themeIcon = document.getElementById("themeIcon");
    
    const themeToggle = document.getElementById("themeToggle");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeIcon) themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");

            if (themeIcon) {
                themeIcon.classList.toggle("bi-sun-fill", isDark);
                themeIcon.classList.toggle("bi-moon-fill", !isDark);
            }

            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }



    // Search Dropdown Toggle
    const searchToggle = document.getElementById("searchToggle");
    const searchDropdown = document.getElementById("searchDropdown");

    if (searchToggle && searchDropdown) {
        searchToggle.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevent click bubbling
            searchDropdown.classList.toggle("show");
            searchDropdown.classList.toggle("d-none");
            if (searchDropdown.classList.contains("show")) {
                document.getElementById("searchInput").focus();
            }
        });

        document.addEventListener("click", function (e) {
            if (!searchDropdown.contains(e.target) && e.target !== searchToggle) {
                searchDropdown.classList.remove("show");
                searchDropdown.classList.add("d-none");
            }
        });
    }   

});
    

     
