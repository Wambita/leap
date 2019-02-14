var year=parseInt(prompt("enter year youwish to check if its leap year"));
if(year % 4 ===0 || year%400 ===0 && !year%100 ===0){  
alert (year +" is a leap year ");
}else {
    alert(year + " is NOT a LEAP YEAR!")
    }