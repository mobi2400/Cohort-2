function populateDiv(){
    const element = document.getElementById("finalSum");
    const a = document.getElementById("num1").value;
    const b = document.getElementById("num2").value;
    fetch("https://sum-server.100xdevs.com/sum?a="+a+"&b=" + b)
     .then(data => element.innerHTML = data.text());    
}


  // this function stop hittibg sever again and again
  // this is important as we don't want to hit server again and again
  function debouncePopulateDiv(){
     // this will clear the timeout{it will start again if user start typing}
    clearTimeout(timeout);
    // it will take 1sec to hit server if user stop typing
    const timeout = setTimeout(()=>populateDiv2(), 100);
   
  }

// this one is cleaner  
async function populateDiv2(){
  const a = document.getElementById('num1').value;
  const b = document.getElementById('num2').value;
  const response = await fetch("https://sum-server.100xdevs.com/sum?a="+a+"&b=" + b);
  const data = await response.text();
  const element = document.getElementById("finalSum");
  element.innerHTML = data;

}