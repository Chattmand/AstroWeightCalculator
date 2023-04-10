var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];
    let selectBox = document.getElementById("planets")

    planets.forEach(planet =>{
        let option = document.createElement('option');
        option.innerHTML = planet[0];
        option.setAttribute('value', planet[0]);
        selectBox.appendChild(option);
    }) 
function calculateWeight(weight, planetName){
for (let i = 0; i < planets.length; i++){
    if (planets[i][0]===planetName){
        let planetWeight=planets[i][1];
        return weight*planetWeight
    }
}    
}
function handleClickEvent(e) { 
    var userWeight=Math.round(document.getElementById("user-weight").value)
    console.log("userWeight", typeof userWeight)
    var planetName=document.getElementById("planets").value    
    var result=calculateWeight(userWeight, planetName)
    console.log("line 33",result)
   document.getElementById("output").innerHTML =`If you were on ${planetName}, you would weigh ${Math.round(result)}lbs!`  
}