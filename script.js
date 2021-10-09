const sounds = [
  { id: "adana", isim: "Adana'ya Gel Gidek" },
  { id: "aglama", isim: "Ağlama Gözlerim" },
  { id: "haydi", isim: "Haydi Söyle" },
  { id: "urfali", isim: "Urfalı Sevmiş" },
  { id: "vazgectim", isim: "Vazgeçtim" },
];

var calan_id_e = "sarki_yok";
var calan_id_y = "";
var deger = 0;

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound.isim;

  btn.addEventListener("click", () => {
    stopSongs();
    calan_id_y = sound.id;

    console.log(btn.innerText);

    if (calan_id_e !== calan_id_y) {
      document.getElementById(sound.id).play();
      calan_id_e = calan_id_y;
    }

    if (calan_id_e === calan_id_y) {
      deger++;
    }

    if (deger === 2) {
      calan_id_e = "sarki_yok";
      deger = 0;
    }
  });

  document.body.appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound.id);

    if (song != null) {
      song.pause();
      song.currentTime = 0;
    }
  });
}
