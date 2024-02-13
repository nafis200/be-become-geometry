function calculateTriangle(){
    const triangleBase = document.getElementById('triangle-base')
    const triangleBaseValue = triangleBase.value;
    const base = parseFloat(triangleBaseValue)
    
    const triangleHeight = document.getElementById('triangle-height')
    const triangleHeightValue = triangleHeight.value
    const Height = parseFloat(triangleHeightValue)
   
    const area = 0.5 * base * Height;
    console.log('area of triangle: ',area)
   
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area

    const calculated = document.getElementById('calculated')
    calculated.innerText = area;
    calculated.value ='';

}