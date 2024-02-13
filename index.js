
function allcalculated(inputFieldId){
     const inputField = document.getElementById(inputFieldId)
     
     const inputValue = inputField.value;
     const value = parseFloat(inputValue)
    //  console.log(value)
    return value
}


function setElement(elementId,area){
   const id2 = document.getElementById(elementId)
   id2.innerText = area;
   return;
}


function calculateTriangle(){
    const base = allcalculated('triangle-base')
    const Height = allcalculated('triangle-height')
    const area = 0.5 * base * Height;
    console.log('area of triangle: ',area)
    const triangleArea = setElement('triangle-area',area)
    const calculated = document.getElementById('calculated')
    calculated.innerText = area;
    calculated.value =' ';
}