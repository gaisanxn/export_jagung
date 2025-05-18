document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-open');
            hamburgerButton.classList.toggle('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const animateLink = document.querySelector('.animate-link');

    if (animateLink) {
        animateLink.addEventListener('click', function(event) {
            event.preventDefault(); // Mencegah navigasi langsung

            document.body.classList.add('fade-out'); // Tambahkan kelas fade-out pada body

            // Setelah animasi selesai (0.5 detik), arahkan ke halaman produk
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 500); // Sesuaikan waktu dengan durasi transisi CSS
        });
    }
});

