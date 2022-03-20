function compute()
{
    // get initial value of money, turn it into a number
    var principal = document.getElementById("principal").value;
    
    //check if input is valid
    if(parseInt(principal)<1)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    if(principal=="")
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    //get variables rate and years
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //calculate interest
    var interest = parseInt(principal) * rate * years /100;

    //determine year
    var year = new Date().getFullYear()+parseInt(years);

    //find the sum total
    var amount = parseInt(principal) + interest;

    //submit answer
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

function updateRate()
{
    //create variable from HTML
    var rateval = document.getElementById("rate").value;

    //submit change to UI
    document.getElementById("rate_val").innerText = rateval;
}