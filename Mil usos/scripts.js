document.addEventListener("DOMContentLoaded", function() {
    // Suave desplazamiento a las secciones al hacer clic en el menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Validación de formulario de contacto
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío predeterminado

        let valid = true;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "") {
            valid = false;
            alert("Por favor, ingresa tu nombre.");
        }
        if (email === "" || !email.includes("@")) {
            valid = false;
            alert("Por favor, ingresa un correo electrónico válido.");
        }
        if (message === "") {
            valid = false;
            alert("Por favor, ingresa un mensaje.");
        }

        if (valid) {
            // Mensaje de éxito
            const successMessage = document.createElement("p");
            successMessage.textContent = "¡Gracias por tu mensaje! Te responderé lo antes posible.";
            successMessage.style.color = "green";
            document.querySelector("#contact").appendChild(successMessage);

            // Limpiar el formulario
            form.reset();
        }
    });

    // Efecto de desvanecimiento al hacer scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.5
    };

    const appearOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Carrusel de imágenes
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    document.getElementById('next').addEventListener('click', function() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    });

    document.getElementById('prev').addEventListener('click', function() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].style.display = 'block';
    });

    // Estilo dinámico de botones
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#ff7f00'; // Cambia el color al pasar el mouse
        });
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#0077cc'; // Vuelve al color original
        });
    });

    // Carga de contenido asíncrona (ejemplo)
    document.getElementById("load-more").addEventListener("click", function() {
        const newContent = document.createElement("div");
        newContent.innerHTML = "<p>Más información sobre nuestros servicios...</p>";
        document.querySelector("#contact").appendChild(newContent);
    });
});
