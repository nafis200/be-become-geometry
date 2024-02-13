
function allcalculated(inputFieldId){
     const inputField = document.getElementById(inputFieldId)
     
     const inputValue = inputField.value;
     const value = parseFloat(inputValue)
    //  console.log(value)
    return value
}


function Angle(){
    const triangleBase = document.getElementById('triangle-base')
    const gets = allcalculated('triangle-base')
    console.log(gets)
}


function calculateTriangle(){
    const base = allcalculated('triangle-base')
    const Height = allcalculated('triangle-height')
    const area = 0.5 * base * Height;
    console.log('area of triangle: ',area)
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area
    const calculated = document.getElementById('calculated')
    calculated.innerText = area;
    calculated.value =' ';
}