//  seleccionamos los dos elementos que serán clickables
const toggleButton = document.getElementById("_toggle");
const navWrapper = document.getElementById("_items");

const mayor_ga = document.getElementById("mayor_gale");//item galeria
const boton_ga = document.getElementById("desple_gale");//boton galeria
const menor_ga = document.getElementById("menor_gale");//menu galeria

const mayor_per = document.getElementById("mayor_perso");//item personaje
const boton_per = document.getElementById("desple_perso");//boton personaje
const menor_per = document.getElementById("menor_perso");//menu personaje

const mayor_crit = document.getElementById("item_critica");//item critica

const mayor_cre = document.getElementById("mayor_cred");//item creditos
const boton_cre = document.getElementById("desple_cred");//boton creditos
const menor_cre = document.getElementById("menor_cred");//menu creditos



document.addEventListener('click', (event) => {
  if (!navWrapper.contains(event.target) && !toggleButton.contains(event.target)) {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove('close');
  }
});

toggleButton.addEventListener("click", () => {
  navWrapper.classList.toggle("show");
  toggleButton.classList.toggle("close");
  navWrapper.classList.remove("nav_largo");
  menor_cre.classList.remove("show_sub");
  menor_per.classList.remove("show_sub");
  mayor_crit.classList.remove("clase_lista_mayor_item");
  menor_ga.classList.remove("show_sub");
  mayor_per.classList.remove("clase_lista_mayor_item");
});
   
boton_ga.addEventListener("click", () => {
  menor_ga.classList.toggle("show_sub");
  mayor_per.classList.toggle("clase_lista_mayor_item");
  navWrapper.classList.remove("nav_largo");
  menor_cre.classList.remove("show_sub");
  menor_per.classList.remove("show_sub");
  mayor_crit.classList.remove("clase_lista_mayor_item");
});

boton_per.addEventListener("click", () => {
  menor_per.classList.toggle("show_sub");
  mayor_crit.classList.toggle("clase_lista_mayor_item");
  navWrapper.classList.remove("nav_largo");
  menor_cre.classList.remove("show_sub");
  menor_ga.classList.remove("show_sub");
  mayor_per.classList.remove("clase_lista_mayor_item");
});

boton_cre.addEventListener("click", () => {
  menor_cre.classList.toggle("show_sub");
  navWrapper.classList.toggle("nav_largo");
  menor_per.classList.remove("show_sub");
  menor_ga.classList.remove("show_sub");
  mayor_per.classList.remove("clase_lista_mayor_item");
  mayor_crit.classList.remove("clase_lista_mayor_item");
});

