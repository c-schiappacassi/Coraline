
const carta1 = document.getElementById("flip-1");
const giro1 = document.getElementById("flip-11");
const carta2 = document.getElementById("flip-2");
const giro2 = document.getElementById("flip-22");
const carta3 = document.getElementById("flip-3");
const giro3 = document.getElementById("flip-33");
const carta4 = document.getElementById("flip-4");
const giro4 = document.getElementById("flip-44");
const carta5 = document.getElementById("flip-5");
const giro5 = document.getElementById("flip-55");
const carta6 = document.getElementById("flip-6");
const giro6 = document.getElementById("flip-66");
const carta7 = document.getElementById("flip-7");
const giro7 = document.getElementById("flip-77");
const carta8 = document.getElementById("flip-8");
const giro8 = document.getElementById("flip-88");

carta1.addEventListener("click", () => {
    giro1.classList.toggle("rotar");

    giro2.classList.remove("rotar");
    giro3.classList.remove("rotar");
    giro4.classList.remove("rotar");
    giro5.classList.remove("rotar");
    giro6.classList.remove("rotar");
    giro7.classList.remove("rotar");
    giro8.classList.remove("rotar");
});
carta2.addEventListener("click", () => {
    giro2.classList.toggle("rotar");

    giro1.classList.remove("rotar");
    giro3.classList.remove("rotar");
    giro4.classList.remove("rotar");
    giro5.classList.remove("rotar");
    giro6.classList.remove("rotar");
    giro7.classList.remove("rotar");
    giro8.classList.remove("rotar");
});
carta3.addEventListener("click", () => {
    giro3.classList.toggle("rotar");

    giro1.classList.remove("rotar");
    giro2.classList.remove("rotar");
    giro4.classList.remove("rotar");
    giro5.classList.remove("rotar");
    giro6.classList.remove("rotar");
    giro7.classList.remove("rotar");
    giro8.classList.remove("rotar");
});
carta4.addEventListener("click", () => {
    giro4.classList.toggle("rotar");

    giro1.classList.remove("rotar");
    giro2.classList.remove("rotar");
    giro3.classList.remove("rotar");
    giro5.classList.remove("rotar");
    giro6.classList.remove("rotar");
    giro7.classList.remove("rotar");
    giro8.classList.remove("rotar");
});
carta5.addEventListener("click", () => {
    giro5.classList.toggle("rotar");

    giro1.classList.remove("rotar");
    giro2.classList.remove("rotar");
    giro3.classList.remove("rotar");
    giro4.classList.remove("rotar");
    giro6.classList.remove("rotar");
    giro7.classList.remove("rotar");
    giro8.classList.remove("rotar");
});
carta6.addEventListener("click", () => {
    giro6.classList.toggle("rotar");

    giro1.classList.remove("rotar");
    giro2.classList.remove("rotar");
    giro3.classList.remove("rotar");
    giro4.classList.remove("rotar");
    giro5.classList.remove("rotar");
    giro7.classList.remove("rotar");
    giro8.classList.remove("rotar");
});
carta7.addEventListener("click", () => {
    giro7.classList.toggle("rotar");

    giro1.classList.remove("rotar");
    giro2.classList.remove("rotar");
    giro3.classList.remove("rotar");
    giro4.classList.remove("rotar");
    giro5.classList.remove("rotar");
    giro6.classList.remove("rotar");
    giro8.classList.remove("rotar");
});
carta8.addEventListener("click", () => {
    giro8.classList.toggle("rotar");

    giro1.classList.remove("rotar");
    giro2.classList.remove("rotar");
    giro3.classList.remove("rotar");
    giro4.classList.remove("rotar");
    giro5.classList.remove("rotar");
    giro6.classList.remove("rotar");
    giro7.classList.remove("rotar");
});