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
    console.log(recValue);
    return recValue;
  } else {
    return 'NaN';
  }
}

function handleChange() {
  console.log('Calculate function called!');
  const recValue = calculateBitrate();
  if (recValue == 'NaN') {
    const resultDisplay = document.querySelector("#bitrate-answers p");
    resultDisplay.textContent = `You didn't enter real numbers into the form`;
  } else {
    const resultDisplay = document.querySelector("#bitrate-answers p");
    resultDisplay.textContent = `Your target Bitrate should be: ${recValue}Mbps`;
  }
}

const getBitrateBtn = document.querySelector("#get-bitrate-btn");
getBitrateBtn.addEventListener('click', handleChange);
