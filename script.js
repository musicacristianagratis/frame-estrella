gsap.set("#container", { perspective: 600 });
        gsap.set(".dot", { xPercent: "-50%", yPercent: "-50%" });

        const total = 30;
        const container = document.getElementById("container");
        const toggleButton = document.getElementById("toggleButton");
        const w = window.innerWidth;
        const h = window.innerHeight;
        let isEffectOn = true;

        // Crear los elementos
        for (let i = 0; i < total; i++) {
            const Div = document.createElement('div');
            gsap.set(Div, {
                attr: { class: 'dot' },
                x: R(0, w),
                y: R(-200, -150),
                z: R(-200, 200)
            });
            container.appendChild(Div);
            animm(Div);
        }

        // Función de animación
        function animm(elm) {
            gsap.to(elm, {
                duration: R(6, 15),
                y: h + 100,
                ease: "none",
                repeat: -1,
                delay: -15
            });
            gsap.to(elm, {
                duration: R(4, 8),
                x: "+=100",
                rotationZ: R(0, 180),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
            gsap.to(elm, {
                duration: R(2, 8),
                rotationX: R(0, 360),
                rotationY: R(0, 360),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: -5
            });
        }

        // Función para generar números aleatorios
        function R(min, max) {
            return min + Math.random() * (max - min);
        }

        // Control del botón
        toggleButton.addEventListener('click', () => {
            if (isEffectOn) {
                container.style.display = 'none';
                toggleButton.textContent = 'ON';
            } else {
                container.style.display = 'block';
                toggleButton.textContent = 'OFF';
            }
            isEffectOn = !isEffectOn;
        });