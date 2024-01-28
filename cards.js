const cardData = [
  {
    id: 1,
    playlist: "Emicida - Singles",
    description: "This is Emicida.",
    imgSrc: "./src/assets/playlist/emicida.jpg",
    altImg: "Capa coletânea Singles Emicida",
  },
  {
    id: 2,
    playlist: "Mellow Morning Lofi",
    description: "Laid-back beats for an easygoing morning.",
    imgSrc: "./src/assets/playlist/lofi-morning.jpg",
    altImg:
      "Capa coletânea Mellow Morning Lofi. Imagem de utensílios para fazer café.",
  },
  {
    id: 3,
    playlist: "Reflection",
    description:
      "A safe space for reflecting and remembering. Soft, instrumental music to bring you comfort and strength.",
    imgSrc: "./src/assets/playlist/reflection.jpg",
    altImg: "Capa coletânea Reflection. Imagem de pessoa olhando o mar.",
  },
  {
    id: 4,
    playlist: "Rock Classics",
    description:
      "Rock legends & epic songs that continue to inspire generations.",
    imgSrc: "./src/assets/playlist/rock_classics.jpg",
    altImg:
      "Capa coletânea Rock Classics. Imagem em preto e branco de membro de uma banda.",
  },
  {
    id: 5,
    playlist: "Best of Alt Rock",
    description:
      "A tasty mix of alternative, modern rock and softer side of metal tracks",
    imgSrc: "./src/assets/playlist/alt-rock.jpg",
    altImg:
      "Capa coletânea Alternative Rock. Imagem de vocalista cantando no palco(perfil).",
  },
  {
    id: 6,
    playlist: "Indie Rock Club",
    description: "Welcome to Indie Rock Club. Cover: Arctic Monkeys.",
    imgSrc: "./src/assets/playlist/indie-rock.jpg",
    altImg:
      "Capa coletânea Indie Rock. Imagem de banda, integrantes usam casacos de inverno.",
  },
  {
    id: 7,
    playlist: "Multitude - Stromae",
    description:
      "Playlist Stromaé multitude / multitude Stromae / Lenfer / invaincu / la solassitude / fils de joie / pas vraiment / riez / cest que du bonheu.",
    imgSrc: "./src/assets/playlist/stromae-multitude.jpg",
    altImg:
      "Capa Multitude Stromae. Clones do artista em círculo olham para o centro.",
  },
  {
    id: 8,
    playlist: "This is Linkin Park",
    description:
      "This is Linkin Park. All the greatest hits in one single playlist.",
    imgSrc: "./src/assets/playlist/lP.jpg",
    altImg:
      "Capa coletânea Linkin Park. Imagem de banda, integrantes usam casacos de inverno.",
  },
  {
    id: 9,
    playlist: "Mega Hit Mix",
    description: "A mega mix of 75 favorites from the last few years!",
    imgSrc: "./src/assets/playlist/mega_hit_mix.jpg",
    altImg: "Capa coletânea Mega Hit Mix. Imagem de artista de perfil.",
  },
  {
    id: 10,
    playlist: "Tropical House",
    description:
      "Take down the tempo but keep the dance party going with the biggest tropical house jams..",
    imgSrc: "./src/assets/playlist/tropical-house.jpg",
    altImg: "Capa coletânea Tropical House. Imagem de palmeira",
  },
  {
    id: 11,
    playlist: "This is Billie Eilish",
    description: "All things Billie! Her best songs ever.",
    imgSrc: "./src/assets/playlist/billie-ellish.jpg",
    altImg: "Capa coletânea Billie Ellish. Retrato da cantora.",
  },
  {
    id: 12,
    playlist: "Fight the Silence",
    description: "Enjoy one of the best crhistian rock bands ever - For Today.",
    imgSrc: "./src/assets/playlist/for-today.jpg",
    altImg: "Capa álbum Fight the Silence - For Today",
  },
];

//----------- SORTEIO DE CARDS ----------
var sorteados = resultadoSorteio();

function resultadoSorteio() {
  var sorteados = [];

  function sortear() {
    return Math.floor(Math.random() * cardData.length);
  }

  while (sorteados.length < 11) {
    var numSorteado = sortear();
    if (sorteados.indexOf(numSorteado) === -1) {
      sorteados[sorteados.length] = numSorteado;
    }
    //console.log(sorteados.length, numSorteado);
  }
  return sorteados;
}

function test() {
  console.log(sorteados);
}

//console.log(card001);

/*--------------------- CARD 00x ---------------------
var card00x = cardData[sorteados[0]];
var playlist00x = card00x.playlist;
var description00x = card00x.description;
var imgSrc00x = card00x.imgSrc;
var altImg00x = card00x.altImg;

var artistImage = document.getElementById("artist-img1");
artistImage.src = imgSrc00x;
artistImage.alt = imgSrc00x;

var artistName = document.getElementById("artist-name1");
artistName.textContent = playlist00x;

var descricao = document.getElementById("description1");
descricao.textContent = description00x;*/

//--------------------- CARD 001 ---------------------
var card001 = cardData[sorteados[0]];
var playlist001 = card001.playlist;
var description001 = card001.description;
var imgSrc001 = card001.imgSrc;
var altImg001 = card001.altImg;

var artistImage = document.getElementById("artist-img001");
artistImage.src = imgSrc001;
artistImage.alt = imgSrc001;

var artistName = document.getElementById("artist-name001");
artistName.textContent = playlist001;

var descricao = document.getElementById("description001");
descricao.textContent = description001;

//--------------------- CARD 002 ---------------------
var card002 = cardData[sorteados[1]];
var playlist002 = card002.playlist;
var description002 = card002.description;
var imgSrc002 = card002.imgSrc;
var altImg002 = card002.altImg;

var artistImage = document.getElementById("artist-img002");
artistImage.src = imgSrc002;
artistImage.alt = imgSrc002;

var artistName = document.getElementById("artist-name002");
artistName.textContent = playlist002;

var descricao = document.getElementById("description002");
descricao.textContent = description002;

//--------------------- CARD 003 ---------------------
var card003 = cardData[sorteados[2]];
var playlist003 = card003.playlist;
var description003 = card003.description;
var imgSrc003 = card003.imgSrc;
var altImg003 = card003.altImg;

var artistImage = document.getElementById("artist-img003");
artistImage.src = imgSrc003;
artistImage.alt = imgSrc003;

var artistName = document.getElementById("artist-name003");
artistName.textContent = playlist003;

var descricao = document.getElementById("description003");
descricao.textContent = description003;

//--------------------- CARD 004 ---------------------
var card004 = cardData[sorteados[3]];
var playlist004 = card004.playlist;
var description004 = card004.description;
var imgSrc004 = card004.imgSrc;
var altImg004 = card004.altImg;

var artistImage = document.getElementById("artist-img004");
artistImage.src = imgSrc004;
artistImage.alt = imgSrc004;

var artistName = document.getElementById("artist-name004");
artistName.textContent = playlist004;

var descricao = document.getElementById("description004");
descricao.textContent = description004;

//--------------------- CARD 005 ---------------------
var card005 = cardData[sorteados[4]];
var playlist005 = card005.playlist;
var description005 = card005.description;
var imgSrc005 = card005.imgSrc;
var altImg005 = card005.altImg;

var artistImage = document.getElementById("artist-img005");
artistImage.src = imgSrc005;
artistImage.alt = imgSrc005;

var artistName = document.getElementById("artist-name005");
artistName.textContent = playlist005;

var descricao = document.getElementById("description005");
descricao.textContent = description005;

//--------------------- CARD 006 ---------------------
var card006 = cardData[sorteados[5]];
var playlist006 = card006.playlist;
var description006 = card006.description;
var imgSrc006 = card006.imgSrc;
var altImg006 = card006.altImg;

var artistImage = document.getElementById("artist-img006");
artistImage.src = imgSrc006;
artistImage.alt = imgSrc006;

var artistName = document.getElementById("artist-name006");
artistName.textContent = playlist006;

var descricao = document.getElementById("description006");
descricao.textContent = description006;

//--------------------- CARD 007 ---------------------
var card007 = cardData[sorteados[6]];
var playlist007 = card007.playlist;
var description007 = card007.description;
var imgSrc007 = card007.imgSrc;
var altImg007 = card007.altImg;

var artistImage = document.getElementById("artist-img007");
artistImage.src = imgSrc007;
artistImage.alt = imgSrc007;

var artistName = document.getElementById("artist-name007");
artistName.textContent = playlist007;

var descricao = document.getElementById("description007");
descricao.textContent = description007;

//--------------------- CARD 008 ---------------------
var card008 = cardData[sorteados[7]];
var playlist008 = card008.playlist;
var description008 = card008.description;
var imgSrc008 = card008.imgSrc;
var altImg008 = card008.altImg;

var artistImage = document.getElementById("artist-img008");
artistImage.src = imgSrc008;
artistImage.alt = imgSrc008;

var artistName = document.getElementById("artist-name008");
artistName.textContent = playlist008;

var descricao = document.getElementById("description008");
descricao.textContent = description008;

//--------------------- CARD 009 ---------------------
var card009 = cardData[sorteados[8]];
var playlist009 = card009.playlist;
var description009 = card009.description;
var imgSrc009 = card009.imgSrc;
var altImg009 = card009.altImg;

var artistImage = document.getElementById("artist-img009");
artistImage.src = imgSrc009;
artistImage.alt = imgSrc009;

var artistName = document.getElementById("artist-name009");
artistName.textContent = playlist009;

var descricao = document.getElementById("description009");
descricao.textContent = description009;

//--------------------- CARD 0010 ---------------------
var card0010 = cardData[sorteados[9]];
var playlist0010 = card0010.playlist;
var description0010 = card0010.description;
var imgSrc0010 = card0010.imgSrc;
var altImg0010 = card0010.altImg;

var artistImage = document.getElementById("artist-img0010");
artistImage.src = imgSrc0010;
artistImage.alt = imgSrc0010;

var artistName = document.getElementById("artist-name0010");
artistName.textContent = playlist0010;

var descricao = document.getElementById("description0010");
descricao.textContent = description0010;

//--------------------- CARD 0011 ---------------------
var card0011 = cardData[sorteados[10]];
var playlist0011 = card0011.playlist;
var description0011 = card0011.description;
var imgSrc0011 = card0011.imgSrc;
var altImg0011 = card0011.altImg;

var artistImage = document.getElementById("artist-img0011");
artistImage.src = imgSrc0011;
artistImage.alt = imgSrc0011;

var artistName = document.getElementById("artist-name0011");
artistName.textContent = playlist0011;

var descricao = document.getElementById("description0011");
descricao.textContent = description0011;
