const showAll = document.getElementById("mostrar-tudo");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");
const card11 = document.getElementById("card11");
const card12 = document.getElementById("card12");

showAll.addEventListener("click", function () {
  card7.classList.remove("cards-hidden");
  card8.classList.remove("cards-hidden");
  card9.classList.remove("cards-hidden");
  card10.classList.remove("cards-hidden");
  card11.classList.remove("cards-hidden");
  card12.classList.remove("cards-hidden");
  showAll.classList.add("cards-hidden");
  return;
});

function refreshPage() {
  location.reload();
}
