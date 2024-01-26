const showAll = document.getElementById("mostrar-tudo");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");
const card11 = document.getElementById("card11");
const card12 = document.getElementById("card12");

showAll.addEventListener("click", function removeHidden() {
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

const inscrevaSe = document.getElementById("inscreva-se");
inscrevaSe.addEventListener("click", function () {
  window.open(
    "https://www.spotify.com/br-pt/signup?flow_ctx=e07403d7-1b55-4be2-8e6a-25984a5e8007%3A1706313271",
    "_blank"
  );
});

const signin = document.getElementById("entrar");
signin.addEventListener("click", function () {
  window.open(
    "https://accounts.spotify.com/pt-BR/login?continue=https%3A%2F%2Fopen.spotify.com%2Fsearch",
    "_blank"
  );
});

const card1 = document.getElementById("card1");
card1.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/playlist/37i9dQZF1DXbYM3nMM0oPk",
    "_blank"
  );
});

const card2 = document.getElementById("card2");
card2.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/playlist/37i9dQZF1DX6QClArDhvcW",
    "_blank"
  );
});

const card3 = document.getElementById("card3");
card3.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/playlist/37i9dQZF1DWSZXCWJ6tnaz",
    "_blank"
  );
});

const card4 = document.getElementById("card4");
card4.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U",
    "_blank"
  );
});

const card5 = document.getElementById("card5");
card5.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/playlist/1Etp4xH5NPsrUBycpROv0l",
    "_blank"
  );
});

const card6 = document.getElementById("card6");
card6.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/playlist/37i9dQZF1DX35DWKgAk2B5",
    "_blank"
  );
});

card7.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/playlist/2Qrp8JW6NCllNtD56XxReB",
    "_blank"
  );
});

card8.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/playlist/37i9dQZF1DZ06evO47cwRq",
    "_blank"
  );
});

card9.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/intl-pt/album/5JY3b9cELQsoG7D5TJMOgw",
    "_blank"
  );
});

card10.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/playlist/37i9dQZF1DX0AMssoUKCz7",
    "_blank"
  );
});

card11.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/intl-pt/album/32ZTfHW7lUG1u7EQmqiVgX",
    "_blank"
  );
});

card12.addEventListener("click", function () {
  window.open(
    "https://open.spotify.com/intl-pt/track/1tdBiY9eVxJF1OFWieLjfm",
    "_blank"
  );
});

const footerSubscribe = document.getElementById("footer-subscribe");
footerSubscribe.addEventListener("click", function () {
  window.open(
    "https://www.spotify.com/br-pt/signup?flow_ctx=e07403d7-1b55-4be2-8e6a-25984a5e8007%3A1706313271",
    "_blank"
  );
});

const explorePodcasts = document.getElementById("explore-podcasts");
explorePodcasts.addEventListener("click", function () {
  window.open("https://open.spotify.com/genre/podcasts-web", "_blank");
});

const insta = document.getElementById("insta");
insta.addEventListener("click", function () {
  window.open("https://www.instagram.com/spotify/", "_blank");
});

const twitter = document.getElementById("twitter");
twitter.addEventListener("click", function () {
  window.open("https://twitter.com/spotify", "_blank");
});

const facebook = document.getElementById("facebook");
facebook.addEventListener("click", function () {
  window.open(
    "https://www.facebook.com/SpotifyBrasil/?brand_redir=6243987495",
    "_blank"
  );
});
