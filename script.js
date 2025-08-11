// Menunggu semua konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {

    // Ambil elemen-elemen yang dibutuhkan dari HTML
    const modal = document.getElementById('popup-modal');
    const appButton = document.getElementById('app-button');
    const closeButton = document.querySelector('.close-button');

    // Fungsi untuk menampilkan popup
    function openModal() {
        modal.style.display = 'block';
    }

    // Fungsi untuk menyembunyikan popup
    function closeModal() {
        modal.style.display = 'none';
    }

    // Tambahkan event listener: jika tombol aplikasi diklik, tampilkan popup
    appButton.addEventListener('click', openModal);

    // Tambahkan event listener: jika tombol 'x' diklik, sembunyikan popup
    closeButton.addEventListener('click', closeModal);

    // Tambahkan event listener: jika area di luar popup diklik, sembunyikan juga popupnya
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

});
