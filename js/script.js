// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Isi nama pengguna di halaman beranda
    const userName = document.getElementById('name');
    const welcomeName = document.getElementById('userName');

    userName.addEventListener('input', function () {
        welcomeName.textContent = userName.value;
    });

    // Validasi form dan tampilkan data yang dikirim
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (validateEmail(email) && validatePhone(phone)) {
            const formData = `
                <h3>Informasi yang Dikirim:</h3>
                <p>Nama: ${userName.value}</p>
                <p>Email: ${email}</p>
                <p>Nomor Telepon: ${phone}</p>
                <p>Pesan: ${message}</p>
            `;
            document.getElementById('formData').innerHTML = formData;
        } else {
            alert('Masukkan informasi yang valid.');
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }
});