# Landing Page Web App

Proyek ini adalah halaman landing responsif yang dibangun menggunakan React.js dan TailwindCSS. Aplikasi ini memiliki tiga halaman: Home, Produk, dan Tentang. dengan data produk yang diambil dari sebuah API.

## Fitur

1. Halaman Home:

- Bagian hero dengan pengenalan aplikasi web

2. Halaman Product:

- Menampilkan daftar produk yang diambil dari API eksternal.
- Kolom pencarian untuk memfilter produk berdasarkan nama.

3. Halaman Tentang:

- Deskripsi singkat tentang aplikasi web.
- Informasi kontak untuk dukungan pelanggan.

4. Tata Letak Global:

- Navbar dan Footer yang konsisten di semua halaman.
- Desain sepenuhnya responsif untuk perangkat mobile, tablet, dan desktop.

## Instruksi untuk Menjalankan Aplikasi

### Prasyarat

Node.js (versi 16 atau lebih baru) harus terinstal di sistem Anda.

Pengelola paket (npm atau yarn).

### Langkah Instalasi

1. Kloning Repository:

```bash
git clone https://github.com/antoniusginting/landing-page-web-app.git
cd landing-page-crud
```

2. Instal Dependensi:
   Jalankan perintah berikut untuk menginstal dependensi yang dibutuhkan:

```bash
npm install
```

3. Jalankan Server Pengembangan:
   Jalankan aplikasi dalam mode pengembangan:

```bash
npm run dev
```

4. Buka Aplikasi:
   Setelah server berjalan, buka browser Anda dan navigasikan ke:

```bash
http://localhost:5173
```

## Struktur Proyek

```bash
  landing-page-web-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Product.jsx
│   │   ├── About.jsx
│   ├── App.jsx
│   ├── main.jsx
├── tailwind.config.js
├── package.json
```
