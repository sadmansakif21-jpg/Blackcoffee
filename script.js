function createCoffee() {
    const coffee = document.createElement("div");
    coffee.innerHTML = "☕";
    coffee.classList.add("coffee");

    coffee.style.left = Math.random() * window.innerWidth + "px";
    coffee.style.fontSize = (20 + Math.random() * 30) + "px";
    coffee.style.animationDuration = (6 + Math.random() * 6) + "s";

    document.body.appendChild(coffee);

    coffee.addEventListener("click", () => {
        coffee.style.transform = "scale(2)";
        coffee.style.opacity = "0";
        setTimeout(() => coffee.remove(), 300);
    });

    setTimeout(() => {
        coffee.remove();
    }, 12000);
}

setInterval(createCoffee, 500);