function calculateBitrate() {
  const pwidth = document.querySelector("#pixel-width").valueAsNumber;
  const pheight = document.querySelector("#pixel-height").valueAsNumber;
  const framerate = parseFloat(document.querySelector("#framerate").value);
  const bpp = parseFloat(document.querySelector("#bits-per-pixel").value);
  const values = [pwidth, pheight, framerate, bpp];
  const allNums = values.every( val => {
    if (typeof(val) == 'number') {
      return true;
    } else {
      return false;
    }
  });

  if (allNums) {
    const recValue = ((((pwidth * pheight) * framerate) * bpp) / 1048576).toFixed(2);
    // console.log(recValue);
    return recValue;
  } else {
    return 'NaN';
  }
}

function handleChange() {
  // console.log('Calculate function called!');
  const recValue = calculateBitrate();
  if (recValue == 'NaN') {
    const resultDisplay = document.querySelector("#bitrate-answers p");
    resultDisplay.textContent = `You didn't enter real numbers into the form`;
  } else {
    const resultDisplay = document.querySelector("#bitrate-answers p");
    resultDisplay.textContent = `Your target Bitrate should be: ${recValue}Mbps`;
  }
}

function handleResBtn(e) {
  resolutions = { "SD": {width: 640, height: 480 },
                  "HD": {width: 1280, height: 720 },
                  "FullHD": {width: 1920, height: 1080 },
                  "DCI2K": {width: 2048, height: 1080 },
                  "WQHD": {width: 2560, height: 1440 },
                  "4KUHD": {width: 3840, height: 2160 },
                  "DCI4K": {width: 4096, height: 2160}
                };
  const pwidth = document.querySelector("#pixel-width");
  const pheight = document.querySelector("#pixel-height")
  pwidth.value = resolutions[e.target.dataset["res"]]["width"];
  pheight.value = resolutions[e.target.dataset["res"]]["height"];
  // console.log(e.target.dataset["res"]);
}

function handleFrameRateBtn(e) {
  framerates = { "NTSCFilm": 23.976,
                "FilmSTD": 24,
                "PAL": 25,
                "NTSCVideo": 29.97
                };
  const frameRate = document.querySelector("#framerate");
  frameRate.value = framerates[e.target.dataset["fps"]];
  // console.log(e.target.dataset["fps"]);
}
const getBitrateBtn = document.querySelector("#get-bitrate-btn");
getBitrateBtn.addEventListener('click', handleChange);

const resBtns = document.querySelectorAll(".res-btn");
// console.log(resBtns);
resBtns.forEach( btn => btn.addEventListener('click', handleResBtn));

const fpsBtns = document.querySelectorAll(".fps-btn");
fpsBtns.forEach( btn => btn.addEventListener('click', handleFrameRateBtn));
