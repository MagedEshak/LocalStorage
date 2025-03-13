let fontFamilySelect = document.getElementById("id_fontFamilySelect");
let fontSizeSelect = document.getElementById("id_fontSizeSelect");
let colorSelect = document.getElementById("id_colorSelect");
let fontWeightSelect = document.getElementById("id_fontweightSelect");
let textP = document.querySelector("#display > p");

function changeFont() {
    let fontFamilySelectValue = fontFamilySelect.value;
    let fontSizeSelectValue = fontSizeSelect.value;
    let colorSelectValue = colorSelect.value;
    let fontWeightSelectValue = fontWeightSelect.value;


    textP.style.fontFamily = fontFamilySelectValue;
    textP.style.color = colorSelectValue;
    textP.style.fontSize = fontSizeSelectValue;
    textP.style.fontWeight = fontWeightSelectValue;

    window.localStorage.setItem("fontFamilySelectValue", fontFamilySelectValue);
    window.localStorage.setItem("fontSizeSelectValue", fontSizeSelectValue);
    window.localStorage.setItem("colorSelectValue", colorSelectValue);
    window.localStorage.setItem("fontWeightSelectValue", fontWeightSelectValue);

}

window.onload = function () {
    let savedFmily =  window.localStorage.getItem("fontFamilySelectValue");
    let savedColer =  window.localStorage.getItem("colorSelectValue");
    let savedSize = window.localStorage.getItem("fontSizeSelectValue");
    let savedWeight = window.localStorage.getItem("fontWeightSelectValue");

    if (savedFmily) {
        textP.style.fontFamily = savedFmily;
        fontFamilySelect.value = savedFmily;
    }

      if (savedColer) {
        textP.style.color = savedColer;
        colorSelect.value = savedColer;
    }

      if (savedSize) {
        textP.style.fontSize = savedSize;
        fontSizeSelect.value = savedSize;
    }

      if (savedWeight) {
        textP.style.fontWeight = savedWeight;
        fontWeightSelect.value = savedWeight;
    }
}


fontFamilySelect.addEventListener("change", changeFont);
fontSizeSelect.addEventListener("change", changeFont);
colorSelect.addEventListener("change", changeFont);
fontWeightSelect.addEventListener("change", changeFont);




