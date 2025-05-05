document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")  
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
            const navbar = document.querySelector(".navbar");
            window.addEventListener("scroll", () => {
                if (window.scrollY > 80) {
                    navbar.classList.add("fixed");
                } else {
                    navbar.classList.remove("fixed");
                }
            });
        })
        .catch(err => console.error('Error cargando el navbar:', err));
  });


document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar_principal.html")  
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-principal").innerHTML = data;
            const navbar = document.querySelector(".navbar");
            window.addEventListener("scroll", () => {
                if (window.scrollY > 80) {
                    navbar.classList.add("fixed");
                } else {
                    navbar.classList.remove("fixed");
                }
            });
        })
        .catch(err => console.error('Error cargando el navbar:', err));
  });

document.addEventListener("DOMContentLoaded", function () {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});

  