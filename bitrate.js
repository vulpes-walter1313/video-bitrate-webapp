function calculateBitrate() {
  let pwidth = document.querySelector("#pixel-width").valueAsNumber;
  let pheight = document.querySelector("#pixel-height").valueAsNumber;
  let framerate = parseFloat(document.querySelector("#framerate").value);
  let bpp = parseFloat(document.querySelector("#bits-per-pixel").value);
  let values = [pwidth, pheight, framerate, bpp];
  let allNums = values.every( val => {
    if (typeof(val) == 'number') {
      return true;
    } else {
      return false;
    }
  });

  if (allNums) {
    let recValue = ((((pwidth * pheight) * framerate) * bpp) / 1048576).toFixed(2);
    console.log(recValue);
    return recValue;
  } else {
    return 'NaN';
  }
}

let getBitrateBtn = document.querySelector("#get-bitrate-btn");
getBitrateBtn.addEventListener('click', () => {
  console.log('Calculate function called!');
  let recValue = calculateBitrate();
  if (recValue == 'NaN') {
    let resultDisplay = document.querySelector("#bitrate-answers p");
    resultDisplay.textContent = `You didn't enter real numbers into the form`;
  } else {
    let resultDisplay = document.querySelector("#bitrate-answers p");
    resultDisplay.textContent = `Your target Bitrate should be: ${recValue}Mbps`;
  }
});
