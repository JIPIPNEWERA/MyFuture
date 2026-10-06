/* ===============================
   SCROLL REVEAL
================================ */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


reveals.forEach(element => {
    observer.observe(element);
});


/* ===============================
   HEART CLICK EFFECT
================================ */

document.addEventListener("click", function(e) {

    const heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    heart.style.color = "#e88fa9";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    document.body.appendChild(heart);


    heart.animate(
        [
            {
                transform: "translateY(0) scale(1)",
                opacity: 1
            },

            {
                transform:
                    `translateY(-100px) translateX(${Math.random()*60-30}px) scale(1.5)`,

                opacity: 0
            }
        ],
        {
            duration: 1000,
            easing: "ease-out"
        }
    );


    setTimeout(() => {
        heart.remove();
    }, 1000);

});


/* ===============================
   WHY YOU
================================ */

function showReason(type) {

    const box = document.getElementById("reason-box");

    if (!box) return;


    const reasons = {

        smile:
        "Because somehow your smile can make an ordinary moment feel a little warmer.",

        laugh:
        "Because your laugh is one of those little sounds that I never get tired of.",

        personality:
        "Because being yourself is one of the things that makes you, you.",

        everything:
        "Maybe the real answer is simple: because you're you. And that's enough."

    };


    box.innerHTML = `
        <p>${reasons[type]}</p>
    `;

}


/* ===============================
   LETTER
================================ */

function openLetter() {

    const envelope =
        document.getElementById("envelope");

    const content =
        document.getElementById("letter-content");


    if (!envelope || !content) return;


    envelope.classList.add("open");


    setTimeout(() => {

        envelope.style.display = "none";

        content.classList.add("show");

        typeLetter();

    }, 1000);

}


function typeLetter() {

    const element =
        document.getElementById("typing-text");

    if (!element) return;


    const text = `
Untuk zivanna,

abang mungkin ga pandai sih buat kata kata untuk kamu.
cuman aku cuman mau bilang terimakasih dan maaf.. 

Terimakasih untuk kamu yg selalu terima aku, kesalahan
aku dan semuanya kamu terima dan maaf karena aku merasa
kalau aku masih banyak kurangnya buat kamu.

Aku buat ini tulus karena aku cinta sama kamu.

Semoga dengan ini kita bisa membuat
banyak cerita yang bahagia untuk kita
berdua dan tetap bersama sama sampai 
maut yang memisahkan yahhh
--mas mas prik 2026--.

♡
    `;


    let index = 0;

    element.innerHTML = "";


    function typing() {

        if (index < text.length) {

            element.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(typing, 25);

        }

    }


    typing();

}


/* ===============================
   ENDING TEXT
================================ */

const endingText =
    document.getElementById("endingText");

if (endingText) {

    setTimeout(() => {

        endingText.innerHTML =
            `Out of all the people<br>in this world...`;

    }, 1000);

}


/* ===============================
   CURSOR GLOW
================================ */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "15px";
glow.style.height = "15px";
glow.style.borderRadius = "50%";

glow.style.background =
    "rgba(232,143,169,.35)";

glow.style.pointerEvents = "none";

glow.style.filter = "blur(5px)";

glow.style.zIndex = "9998";

document.body.appendChild(glow);


document.addEventListener("mousemove", e => {

    glow.animate(
        {
            left: `${e.clientX - 7}px`,
            top: `${e.clientY - 7}px`
        },
        {
            duration: 150,
            fill: "forwards"
        }
    );

});