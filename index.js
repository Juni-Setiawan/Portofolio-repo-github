document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    // Tambahkan event listener pada setiap link
    document.addEventListener("DOMContentLoaded", function () {
        const nameElement = document.getElementById("typing-name");
        const descriptionElement = document.getElementById("typing-description");
    
        const nameText = "JUNI SETIAWAN";
        const descriptionText = "Web Developer | Desainer | Machine Learning";
    
        function typeEffect(element, text, delay = 100) {
            let i = 0;
            function typeChar() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeChar, delay);
                }
            }
            typeChar();
        }
    
        // Apply typing effect sequentially
        typeEffect(nameElement, nameText, 150);
        setTimeout(() => {
            typeEffect(descriptionElement, descriptionText, 100);
        }, nameText.length * 150 + 500); // Wait until name typing finishes
    });    

    // document.addEventListener("DOMContentLoaded", function () {
    //     const animatedElements = document.querySelectorAll('.animate');
    
    //     function handleScroll() {
    //         animatedElements.forEach(element => {
    //             const rect = element.getBoundingClientRect();
    //             const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    
    //             if (isVisible) {
    //                 element.classList.add('visible');
    //             }
    //         });
    //     }
    
    //     window.addEventListener('scroll', handleScroll);
    //     handleScroll(); // Panggil sekali untuk elemen yang sudah terlihat
    // });

    
    document.addEventListener("DOMContentLoaded", function () {
        const elements = document.querySelectorAll('.animate-slide');
    
        function handleScroll() {
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    
                if (isVisible) {
                    el.classList.add('visible');
                }
            });
        }
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Panggil saat pertama kali untuk elemen yang sudah terlihat
    });

    
    document.addEventListener("DOMContentLoaded", () => {
        const links = document.querySelectorAll(".nav-link");
    
        links.forEach(link => {
            link.addEventListener("click", function (e) {
                // Hapus kelas "active" dari semua tautan
                links.forEach(l => l.classList.remove("active"));
    
                // Tambahkan kelas "active" ke tautan yang diklik
                this.classList.add("active");
    
                // Smooth scroll ke bagian target
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Sesuaikan offset jika ada header tetap
                        behavior: "smooth"
                    });
                }
            });
        });
    });
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const animatedElements = document.querySelectorAll('.animate');
    
        function handleScroll() {
            animatedElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    
                if (isVisible) {
                    element.classList.add('visible');
                }
            });
        }
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Panggil sekali untuk elemen yang sudah terlihat saat halaman dimuat
    });
    


    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));

            // Scroll smooth ke section yang di klik
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});