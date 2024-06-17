<p align="center"><a href="https://pantas.cloud" target="_blank"><img src="./frontend/assets/logo/44.png" width="600" alt="PANTAS Logo"></a></p>

<h1 align="center"><b>PANTAS - Pelaporan Aduan Tumpukan Sampah</b></h1>

PANTAS merupakan sebuah platform pelaporan sampah yang memudahkan masyarakat dalam melaporkan tumpukan sampah liar. Pengguna dapat mengaksesnya melalui platform ini tanpa registrasi, hanya perlu mengaktifkan GPS untuk menentukan lokasi, dan mengunggah foto tumpukan sampah yang akan dilaporkan. Dengan adanya PANTAS, diharapkan masyarakat dapat lebih aktif menjaga kebersihan lingkungan dan lebih peduli terhadap lingkungan.

## ⭐ Tim C624-PS102

- F2656YB193 – [Ardian Wahyu Saputra](https://github.com/wahyu12v) - Universitas Muhammadiyah Riau
- F1926YB290 – [Putro Dwi Mulyo](https://github.com/putrodwi31) - Universitas Bina Insani
- F7146YB143 – [Hasban Dio Saputra](https://github.com/hasbands) - Universitas Islam Kuantan Singingi

## ⚙️ Teknologi Pengembangan

- Frontend :

  ![javascript][javascript]
  [![React][React.js]][React-url]
  [![ReactQeury][ReactQuery]][ReactQuery-url]
  [![Formik][Formik]][React-url]
  [![ReactBootstrap][ReactBootstrap]][ReactBootstrap-url]
  [![Leaflet][Leaflet]][Leaflet-url]

- Backend :

  ![javascript][javascript]
  [![Express][Express-logo]][Express-url]
  [![Node.js][NodeJS]][NodeJS-url]
  [![JWT][JWT]][JWT-url]
  [![Prisma][Prisma]][Prisma-url]
  [![Zod][Zod]][Zod-url]
  [![NodeMailer][NodeMailer]][NodeMailer-url]

- DevOps :

  [![Ubuntu][Ubuntu]][Ubuntu-url]
  [![Nginx][Nginx]][Nginx-url]
  [![NginxReveseProxy][NginxReverse]][NginxReverse-url]
  [![LetsEncrypt][LetsEncrypt]][LetsEncrypt-url]

- Database :

  [![PostgreSQL][PostgreSQL]][PostgreSQL-url]

## 📘 Panduan Penggunaan 📘

### 📝 Prerequisites

- Node Package Manager (NPM)
- PostgreSQL
- Node JS 18+
- Express
- React

### 👣 Langkah Instalasi

1. Cloning proyek

   ```bash
   git clone https://github.com/wahyu12v/Final_Capstone/
   ```

2. Instalasi package

   Untuk menginstall package, kamu perlu menjalankan perintah:

   ```bash
   ./app.sh install
   ```

3. Pergi ke folder Backend

   ```bash
   cd backend/
   ```

4. Buat file konfigurasi .env

   Konfigurasi Database URL:

   `DATABASE_URL`

   Konfigurasi Client URL:

   `CLIENT_URL`

   Konfigurasi Client JWT:

   `JWT_ACCESS_TOKEN_SECRET` `JWT_ACCESS_TOKEN_EXPIRES_IN` `JWT_REFRESH_TOKEN_SECRET` `JWT_REFRESH_TOKEN_EXPIRES_IN`

   Konfigurasi Email SMTP:

   `MAIL_HOST` `MAIL_PORT` `MAIL_USER` `MAIL_PASS`

   referensi bisa lihat pada file .env.example

5. Migrasi Database

   Untuk melakukan migrasi, kamu perlu menjalankan perintah:

   ```bash
   npm run migrate
   ```

6. Mempersiapkan akun admin

   Untuk menjalankan seed akun admin, kamu perlu menjalankan perintah:

   ```bash
   npm run seed
   ```

7. Pergi ke folder Client

   ```bash
   cd ../client
   ```

8. Buat file konfigurasi .env

   Konfigurasi Base URL Backend:

   `VITE_BASE_URL`

   referensi bisa lihat pada file .env.example

9. Menjalankan Proyek

   Untuk menjalankan Proyek di perangkat, kamu dapat menjalankan perintah:

   ```bash
   ./app.sh start
   ```

   pastikan kalian berada pada root folder /Final_Capstone

10. Untuk mulai mengaksesnya halaman beranda aplikasi kamu perlu mengunjungi [http://localhost:5371](http://localhost:5371)
11. Untuk mengakses dashboard kamu perlu masuk terlebih dahulu melalui [http:/localhost:5371/masuk](http://localhost:5371/masuk)
    Nama Pengguna : `admin_pantas`

    Kata Sandi : `admin123`

12. Akses Dashboard pada [http:/localhost:5371/dashboard](http://localhost:5371/dashboard)

[NodeMailer]: https://img.shields.io/badge/nodemailer-6D4AFF?style=for-the-badge&logo=protonmail&logoColor=FFFFFF
[NodeMailer-url]: https://nodemailer.com/
[Zod]: https://img.shields.io/badge/zod-FFFFFF?style=for-the-badge&logo=zod&logoColor=3E67B1
[Zod-url]: https://zod.dev
[Prisma]: https://img.shields.io/badge/prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=FFFFF
[Prisma-url]: https://www.prisma.io/
[JWT]: https://img.shields.io/badge/jsonwebtokens-20232A?style=for-the-badge&logo=jsonwebtokens&logoColor=d63afe
[JWT-url]: https://jwt.io/
[React-url]: https://reactjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Nginx]: https://img.shields.io/badge/nginx-FFFFFF?style=for-the-badge&logo=nginx&logoColor=009639
[Nginx-url]: https://nginx.org/en/
[NginxReverse]: https://img.shields.io/badge/reverseproxy-009639?style=for-the-badge&logo=nginxproxymanager&logoColor=FFFFFF
[NginxReverse-url]: https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/
[Ubuntu]: https://img.shields.io/badge/ubuntu-20232A?style=for-the-badge&logo=ubuntu&logoColor=E95420
[Ubuntu-url]: https://ubuntu.com/
[LetsEncrypt]: https://img.shields.io/badge/letsencrypt-003A70?style=for-the-badge&logo=letsencrypt&logoColor=FFFFFF
[LetsEncrypt-url]: https://certbot.eff.org/
[ReactQuery-url]: https://tanstack.com/query/latest
[ReactQuery]: https://img.shields.io/badge/tanstackquery-111828?style=for-the-badge&logo=reactquery&logoColor=FF4154
[Formik]: https://img.shields.io/badge/formik-095acf?style=for-the-badge&logo=formspree&logoColor=FFFFFF
[Express-logo]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express
[Express-url]: https://expressjs.com/
[ReactBootstrap-url]: https://react-bootstrap.netlify.app/
[ReactBootstrap]: https://img.shields.io/badge/reactbootstrap-0F172A?&style=for-the-badge&logo=reactbootstrap&logoColor=61DAFB
[Leaflet]: https://img.shields.io/badge/leaflet.js-FFFFFF?&style=for-the-badge&logo=leaflet&logoColor=199900
[Leaflet-url]: https://react-leaflet.js.org/docs/start-introduction/
[PostgreSQL-url]: https://www.postgresql.org/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=FFFFFF
[NodeJS-url]: https://nodejs.org/en
[NodeJS]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
