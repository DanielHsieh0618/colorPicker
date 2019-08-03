getNumber("red");
getNumber("green");
getNumber("blue");

function getNumber(colorString) {
    var sliderSelector = colorString + 'Slider';
    var codeSelector = colorString + 'Code';
    var numberSelector = colorString + 'Number';
    var codeSpan = document.getElementById(codeSelector);
    var numberInput = document.getElementById(numberSelector);
    console.log(colorString);
    var sliderNumber = document.getElementById(sliderSelector);
    setColor(sliderNumber);

    sliderNumber.addEventListener('input', function(e) {
        console.log(e.currentTarget.value);
        var sliderNumber = e.currentTarget;
        setColor(sliderNumber)
    });

    function setColor(sliderNumber) {
        codeSpan.innerText = sliderNumber.value;
        numberInput.value = sliderNumber.value;
        var colorContent = document.getElementsByClassName("colorContent")[0];
        var singleCodes = document.getElementsByClassName("code");
        var singleCodeArr = Array.prototype.slice.call(singleCodes);
        var rgbArray = [];
        singleCodeArr.forEach(function(code) {
            rgbArray.push(code.innerText);
        })
        colorContent.style.backgroundColor = 'rgb(' + rgbArray.toString() + ')';
    }
}