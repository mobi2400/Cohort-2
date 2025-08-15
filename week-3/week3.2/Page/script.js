 async function getAnimalData(){
   const response = await  fetch('https://fakerapi.it/api/v1/persons')
   const data = await response.json();
   console.log(data);
   document.getElementById("output").innerHTML = JSON.stringify(data);
  
  

}