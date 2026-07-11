function openLetter(){

    document.querySelector(".top").style.transform="rotateX(180deg)";

    document.querySelector(".letter").style.transform="translateY(-80px)";

    setTimeout(()=>{

        window.location="surat.html";

    },1500);

}

/* bunga */

for(let i=0;i<35;i++){

let flower=document.createElement("div");

flower.className="flower";

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"%";

flower.style.animationDuration=(5+Math.random()*5)+"s";

flower.style.fontSize=(18+Math.random()*18)+"px";

flower.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(flower);

}

/* love */

for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(heart);

}
/* ===========================
   SURAT
=========================== */

const text = `

Hai Sayang ❤️

Terima kasih sudah mau membuka surat kecil ini.

Sebenarnya...

Aku sudah lama ingin bertemu denganmu.

Aku ingin menghabiskan waktu bersama.

Bercerita.

Tertawa.

Membuat kenangan indah bersamamu.

Karena itu...

Maukah kamu bertemu denganku?

❤️

`;

const typing = document.getElementById("typing");

if (typing){

let i = 0;

function ketik(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(ketik,45);

}

}

ketik();

}

/* Tombol Tidak Kabur */

const no = document.getElementById("no");

if(no){

no.addEventListener("mouseover",()=>{

no.style.position="absolute";

no.style.left=Math.random()*80+"%";

no.style.top=Math.random()*80+"%";

});

}
/* ======================
PANTAI
====================== */

const noPantai=document.getElementById("noPantai");

if(noPantai){

noPantai.addEventListener("mouseover",()=>{

noPantai.style.position="absolute";

noPantai.style.left=Math.random()*80+"%";

noPantai.style.top=Math.random()*80+"%";

});

}
/* ==========================
BIOSKOP
========================== */

const noCinema=document.getElementById("noCinema");

if(noCinema){

noCinema.addEventListener("mouseover",()=>{

noCinema.style.position="absolute";

noCinema.style.left=Math.random()*80+"%";

noCinema.style.top=Math.random()*80+"%";

});

}

/* Halaman akhir */

function showEnding(){

document.querySelector(".container").style.display="none";

document.getElementById("ending").classList.remove("hidden");

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.className="confetti";

c.innerHTML=Math.random()>0.5?"🎉":"❤️";

c.style.left=Math.random()*100+"%";

c.style.animationDuration=(3+Math.random()*4)+"s";

c.style.fontSize=(18+Math.random()*20)+"px";

document.body.appendChild(c);

}

for(let i=0;i<20;i++){

let b=document.createElement("div");

b.className="balloon";

b.innerHTML="🎈";

b.style.left=Math.random()*100+"%";

b.style.animationDuration=(8+Math.random()*8)+"s";

document.body.appendChild(b);

}

}
const gambar=document.querySelectorAll(".gallery img");

gambar.forEach((foto)=>{

foto.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,.85)";
popup.style.display="flex";
popup.style.justifyContent="center";
popup.style.alignItems="center";
popup.style.zIndex="99999";

const img=document.createElement("img");

img.src=foto.src;

img.style.maxWidth="90%";
img.style.maxHeight="90%";
img.style.borderRadius="15px";

popup.appendChild(img);

popup.onclick=function(){

popup.remove();

}

document.body.appendChild(popup);

});

});
const countdown=document.getElementById("countdown");

if(countdown){

const target=new Date("December 31, 2026 17:00:00").getTime();

setInterval(()=>{

const now=new Date().getTime();

const distance=target-now;

const hari=Math.floor(distance/(1000*60*60*24));

const jam=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

countdown.innerHTML="⏳ Menuju hari pertemuan: "+hari+" Hari "+jam+" Jam ❤️";

},1000);

}
/* ===========================
   COUNTDOWN REAL TIME
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    const countdown = document.getElementById("countdown");

    // Jika bukan di ending.html, hentikan fungsi
    if (!countdown) return;

    // ===========================
    // GANTI TANGGAL PERTEMUAN DI SINI
    // Format: Tahun, Bulan(0-11), Tanggal, Jam, Menit, Detik
    // ===========================
    const targetDate = new Date(2026, 6, 20, 09, 0, 0);

    function updateCountdown() {

        const now = new Date();
        const distance = targetDate - now;

        if (distance <= 0) {
            countdown.innerHTML = "🎉 Hari pertemuan telah tiba! ❤️";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

        countdown.innerHTML = `
        <div class="countdown-container">

            <div class="time-box">
                <span>${days}</span>
                <small>Hari</small>
            </div>

            <div class="time-box">
                <span>${hours}</span>
                <small>Jam</small>
            </div>

            <div class="time-box">
                <span>${minutes}</span>
                <small>Menit</small>
            </div>

            <div class="time-box">
                <span>${seconds}</span>
                <small>Detik</small>
            </div>

        </div>
        `;
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

});