function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    
    var year = new Date().getFullYear()+parseInt(years);

    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML ="If you deposit "+<mark>principal</mark>+",\<br\>at an interest rate of "+<mark>rate+</mark>"%\<br\>You will receive an amount of "+<mark>amount</mark>+",\<br\>in the year "+<mark>year</mark>+"\<br\>";
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function principal_validation() {
  let x = document.getElementById("principal").value;
  if (isNaN(x) || x <= 0 ) {
    alert ("Enter a positive number");
  } else {
  }
}