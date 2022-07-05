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
// We are going to solve this by breaking the problem into three parts. 
    // Programmers like automating things, we'll populate the HTML drop down options using code, 
    // instead of having to type out all the values. 
    // Create a function that does the some math and gives us the new weight. 
    // Then create a function that responds when the user clicks on the button. 

    // 1. Populate the dropdown element with the data found in the planets array. 
    // The value of each option should be the planet's name. 
    // Use the following built-in methods: 
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild`
    let selectBox = document.getElementById("planets")

    planets.forEach(planet =>{
        //create option element
        let option = document.createElement('option');
        //add text(label)
        option.innerHTML = planet[0];
        //assign value of choosen option
        option.setAttribute('value', planet[0]);
        //append created option to the select
        selectBox.appendChild(option);
    }) 
//take person actual weight and multiply by planet weight 
//for loop thru planet array if planet index 0 is = to planet name make planet weight = to index
function calculateWeight(weight, planetName){
for (let i = 0; i < planets.length; i++){
    if (planets[i][0]===planetName){
        let planetWeight=planets[i][1];
        return weight*planetWeight
    }
}    
}
function handleClickEvent(e) {
    // 3. Create a variable called userWeight and assign the value of the user's weight. 
    var userWeight=Math.round(document.getElementById("user-weight").value)
    console.log("userWeight", typeof userWeight)
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down. 
    var planetName=document.getElementById("planets").value    
   // 5. Create a variable called result and assign the value of the new calculated weight. 
    var result=calculateWeight(userWeight, planetName)
    console.log("line 33",result)
   // 6. Write code to display the message shown in the screenshot. 
   document.getElementById("output").innerHTML =`If you were on ${planetName}, you would weigh ${Math.round(result)}lbs!`  
}