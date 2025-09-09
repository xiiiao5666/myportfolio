# MyPortfolio

MyPortfolio adalah website portofolio pribadi yang menampilkan berbagai project, sertifikat, serta fitur interaktif seperti komentar dan rating. Website ini dibangun menggunakan **Next.js**, **React**, **Firebase**, dan beberapa library pendukung lainnya.

## Fitur Utama

- **Halaman Portfolio:**  
  Menampilkan daftar project dan sertifikat yang pernah dikerjakan, lengkap dengan deskripsi, teknologi yang digunakan, dan tautan ke repository.

- **Form Kontak:**  
  Pengunjung dapat mengirim pesan melalui form yang terhubung ke Firebase dan EmailJS.

- **Komentar & Rating:**  
  Pengunjung dapat memberikan komentar dan rating yang langsung tersimpan di Firebase Realtime Database.

- **Animasi & UI Modern:**  
  Menggunakan Framer Motion untuk animasi dan Next.js Image untuk optimasi gambar.

## Teknologi & Bahasa Pemrograman

- **Frontend:**  
  - Next.js (React)
  - Tailwind CSS (untuk styling)
  - Framer Motion (untuk animasi)
  - React Icons

- **Backend & Database:**  
  - Firebase Realtime Database (untuk menyimpan komentar, rating, dan kontak)
  - EmailJS (untuk mengirim email dari form kontak)

- **Bahasa Pemrograman:**  
  - JavaScript (ES6+)
  - Sedikit PHP & Java pada project showcase (bukan pada kode utama website)

## Struktur Project

- 

app

 — Folder utama aplikasi Next.js
- 

components

 — Komponen seperti `CommentSection`, `RatingStars`, `ContactForm`
- 

page.js

 — Halaman utama portfolio
- 

firebase_config.js

 — Konfigurasi dan inisialisasi Firebase

## Cara Menjalankan

1. Clone repository ini.
2. Install dependencies:
   ```
   npm install
   ```
3. Jalankan development server:
   ```
   npm run dev
   ```
4. Buka di browser: [http://localhost:3000](http://localhost:3000)

## Catatan

- Pastikan konfigurasi Firebase di `firebase_config.js` sudah sesuai dengan project Anda.
- Untuk deployment, pastikan rules Firebase sudah diatur dengan aman.

---

Silakan sesuaikan bagian deskripsi, fitur, dan teknologi sesuai kebutuhan Anda!
