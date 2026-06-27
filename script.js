const icons = ["☕","🫘"];

function createParticle() {
    const p = document.createElement("div");
    p.className = "particle";

    p.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.top = "-50px";
    p.style.fontSize = (18 + Math.random()*25) + "px";
    p.style.animationDuration = (8 + Math.random()*5) + "s";

    p.onclick = function () {
        p.style.transform = "scale(2)";
        p.style.opacity = "0";
        setTimeout(() => p.remove(), 300);
    };

    document.body.appendChild(p);

    setTimeout(() => {
        if (p.parentNode) p.remove();
    }, 13000);
}

setInterval(createParticle, 350);
