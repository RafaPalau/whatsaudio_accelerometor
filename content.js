const intervalo = setInterval(() => {
  const cabecalho = document.querySelector("._1QUKR");
  if (cabecalho) {
    clearInterval(intervalo);

    const button2x = document.createElement("button");
    button2x.innerHTML = "2x";
    button2x.classList.add("button2times");

    const button1x = document.createElement("button");
    button1x.innerHTML = "1x";
    button1x.classList.add("button1times");

    button2x.addEventListener("click", () => {
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio) => {
        audio.playbackRate = 2;
      });
    });

    button1x.addEventListener("click", () => {
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio) => {
        audio.playbackRate = 1;
      });
    });

    cabecalho.appendChild(button1x);
    cabecalho.appendChild(button2x);
  }
}, 1000);
