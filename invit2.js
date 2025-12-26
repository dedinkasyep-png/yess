<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Undangan Pernikahan Dedin & Lisa B</title>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #8d6e63;
            --secondary: #d7ccc8;
            --text: #3e2723;
        }

        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Montserrat', sans-serif;
            color: var(--text);
            overflow-x: hidden;
        }

        /* Overlay Pembuka */
        #cover {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                        url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000');
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            z-index: 1000;
            transition: transform 1s ease-in-out;
            text-align: center;
        }

        #cover.open {
            transform: translateY(-100%);
        }

        .cover-content h2 { font-family: 'Great Vibes', cursive; font-size: 3rem; margin: 10px 0; }
        .to-name { font-size: 1.2rem; margin-top: 20px; }
        .guest-name { font-weight: bold; font-size: 1.5rem; color: var(--secondary); margin-bottom: 20px; }

        .btn-open {
            padding: 12px 25px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            font-weight: bold;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        /* Konten Utama */
        .main-content {
            padding: 50px 20px;
            text-align: center;
            background: #fffaf5;
        }

        .couple-img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid var(--secondary);
            margin: 20px auto;
        }

        h1 { font-family: 'Great Vibes', cursive; font-size: 3.5rem; color: var(--primary); }
        
        .section { margin-bottom: 60px; }
        
        /* Musik Control */
        #music-control {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary);
            color: white;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 999;
        }
    </style>
</head>
<body>

    <audio id="mySong" loop>
        <source src="C:\Users\asus\Downloads\Tenxi Naykilla & Jemsii - Garam & Madu (Sakit Dadaku) (Official Music Video).mp3" type="audio/mp3">
    </audio>

    <div id="music-control" onclick="toggleMusic()">🎵</div>

    <div id="cover">
        <div class="cover-content">
            <p>UNDANGAN PERNIKAHAN</p>
            <h2>Dedin & Lisa B</h2>
            <p class="to-name">Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <div id="guest-name" class="guest-name">........</div>
            <button class="btn-open" onclick="bukaUndangan()">Buka Undangan</button>
        </div>
    </div>

    <div class="main-content">
        <div class="section">
            <p>Assalamu’alaikum Wr. Wb.</p>
            <p>Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir di acara kami.</p>
            
            <img src="C:\Users\asus\Downloads\WhatsApp Image 2025-12-25 at 02.01.06.jpeg" alt="Dedin" class="couple-img">
            <h1>Dedin</h1>
            <p>Putra dari Bapak Fulan & Ibu Fulanah</p>
            
            <h1 style="font-size: 2rem;">&</h1>

            <img src="C:\Users\asus\Downloads\2019-monshoot-mood-korea-lisa-blackpink-hd-a1iqfriyi4palj94.jpg" alt="Lisa B" class="couple-img">
            <h1>Lisa B</h1>
            <p>Putri dari Bapak Fulan & Ibu Fulanah</p>
        </div>

        <div class="section" style="background: white; padding: 40px 10px; border-radius: 20px;">
            <h2>Waktu & Tempat</h2>
            <p>📅 <strong>32 Desember 2025</strong></p>
            <p>⏰ 09:00 WIB - Selesai</p>
            <p>📍 gedung mi annur XI</p>
        </div>
    </div>

    <script>
        // Mengambil nama tamu dari URL (?to=NAMA+TAMU)
        const urlParams = new URLSearchParams(window.location.search);
        const namaTamu = urlParams.get('to');
        if (namaTamu) {
            document.getElementById('guest-name').innerText = namaTamu.replace(/\+/g, ' ');
        }

        // Fungsi Buka Undangan
        function bukaUndangan() {
            document.getElementById('cover').classList.add('open');
            playMusic();
        }

        // Kontrol Musik
        const song = document.getElementById('mySong');
        function playMusic() {
            song.play();
        }

        function toggleMusic() {
            if (song.paused) {
                song.play();
            } else {
                song.pause();
            }
        }
    </script>
    <div class="countdown-container">
    <h3>Menuju Hari Bahagia</h3>
    <div id="timer">
        <div class="time-segment">
            <span id="days">00</span>
            <div class="label">Hari</div>
        </div>
        <div class="time-segment">
            <span id="hours">00</span>
            <div class="label">Jam</div>
        </div>
        <div class="time-segment">
            <span id="minutes">00</span>
            <div class="label">Menit</div>
        </div>
        <div class="time-segment">
            <span id="seconds">00</span>
            <div class="label">Detik</div>
        </div>
    </div>
</div>

<style>
    /* Desain Kotak Waktu */
    .countdown-container {
        text-align: center;
        background: #ffffff;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        max-width: 400px;
        margin: 20px auto;
        font-family: sans-serif;
    }

    #timer {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .time-segment {
        flex: 1;
    }

    .time-segment span {
        display: block;
        font-size: 2rem;
        font-weight: bold;
        color: #d4a373; /* Warna tema emas/coklat */
    }

    .label {
        font-size: 0.8rem;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
</style>

<script>
    // TENTUKAN TANGGAL ACARA DI SINI
    // Format: Bulan Tanggal, Tahun Jam:Menit:Detik
    const targetDate = new Date("Dec 31, 2025 09:00:00").getTime();

    const updateCountdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Perhitungan matematika untuk waktu
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        // Masukkan hasil ke dalam HTML
        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;

        // Jika waktu habis
        if (distance < 0) {
            clearInterval(updateCountdown);
            document.getElementById("timer").innerHTML = "<h3>Acara Telah Dimulai!</h3>";
        }
    }, 1000);
</script>

<div class="maps-container">
    <h2>Lokasi Acara</h2>
    <p>Gedung Serbaguna Bahagia, Jakarta</p>
    
    <div class="responsive-maps">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666422321!2d106.8249641!3d-6.1753924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e76f85ff%3A0x4c33022641d8b68a!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
            width="600" 
            height="450" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>

    <br>
    <a href="https://www.google.com/maps/place/MI+ANNUR+XI/@-7.1109007,108.0748144,17.08z/data=!4m15!1m8!3m7!1s0x2e6f4adfcbab4b9b:0xd4f0644848d4288f!2sBarudua,+Kec.+Malangbong,+Kabupaten+Garut,+Jawa+Barat!3b1!8m2!3d-7.113535!4d108.0746859!16s%2Fg%2F122cc1m9!3m5!1s0x2e6f4b2ec8a5afc5:0xf702819aeb85c480!8m2!3d-7.110375!4d108.0769371!16s%2Fg%2F11gtdnq69n?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="btn-maps">
        Buka di Google Maps
    </a>
</div>

<style>
    .maps-container {
        text-align: center;
        padding: 20px;
        background: #fff;
        border-radius: 15px;
        margin: 20px auto;
        max-width: 500px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    /* Agar peta menyesuaikan lebar HP */
    .responsive-maps {
        overflow: hidden;
        padding-bottom: 56.25%; /* Rasio 16:9 */
        position: relative;
        height: 0;
        border-radius: 10px;
    }

    .responsive-maps iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }

    .btn-maps {
        display: inline-block;
        margin-top: 15px;
        padding: 10px 20px;
        background-color: #4285F4; /* Warna khas Google */
        color: white;
        text-decoration: none;
        border-radius: 25px;
        font-weight: bold;
        font-size: 14px;
    }
</style>

</body>
</html>