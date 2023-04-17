const iphone=document.querySelector(".model model-viewer")
const modelViewerColor =document.querySelectorAll("model-viewer#iPhone")
console.log(modelViewerColor)

modelViewerColor.addEventListener("load",()=>{
    const [material]=modelViewerColor.model.materials;
// material.pbrMetallicRoughness.setBaseColorFactor("#000000");
material.pbrMetallicRoughness.setMetallicFactor("#000000")
})
// document.querySelector('#color-controls').addEventListener('click', (event) => {
  
// });
