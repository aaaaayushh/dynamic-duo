function getdates() {
    var depart = document.getElementById("date1").elements.namedItem("depart").value;
    var arrive = document.getElementById("date2").elements.namedItem("arrive").value;
    var d=new Date(depart)
    var a=new Date(arrive)
    p=document.getElementById("demo");
    //var num_days=(a.getTime()-d.getTime())/(1000*3600*24);
    if(Number(d.getTime())>Number(a.getTime())){
        p.innerHTML="Please select a valid duration for your rental!"
    }
    else if(depart==""||arrive=="")
    {
        p.innerHTML="Please pick a valid duration for your rental!";
    }
    else{
    p.innerHTML='You\'ll pick up the rover on '+depart+
    ' and will be returning it on '+arrive+'. Now please select one of the rovers below.'
    }
   
}

var rover1={price:300,mileage:400,model:"rover1",seats:4};
var rover2={price:500,mileage:300,model:"rover2",seats:2};
var rover3={price:800,mileage:300,model:"rover3",seats:4};
var rover4={price:1000,mileage:250,model:"rover4",seats:8};
var rover5={price:1500,mileage:200,model:"rover5",seats:2};
function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 5; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
function price_calc(rover){
    var depart = document.getElementById("date1").elements.namedItem("depart").value;
    var arrive = document.getElementById("date2").elements.namedItem("arrive").value;
    if(depart==""||arrive=="")
    {
        p=document.getElementById('demo1');
    //p2=document.getElementById('demo2');
        p.innerHTML='Please enter the date you\'d like to rent our rover!<br>\n'+
        '<br>\n<a href="book.html">Go to Book Now</a>';
    }
    else{
    var d=new Date(depart);
    var a=new Date(arrive);
    var deposit=1000;
    
    //calculate number of days the rover will be rented
    var num_days=(a.getTime()-d.getTime())/(1000*3600*24); 
    console.log(num_days);
    console.log(rover.price);
    var cost=(rover.price*(num_days+1)) + deposit;
    p=document.getElementById('demo1');
    var id=makeid();
    p.innerHTML='Receipt <br>\n---------<br>\n<br>\nBooking ID:'
    +id +'<br>\n<br>\nYour total expense will be:'
    +cost+' units <br>\n<br>\n<br>\nPrice/day:'
    +rover.price+'<br>\n <br>\n Duration of rental:'
    +depart+' to '+arrive+'<br>\n<br>\n Security Deposit:1000'+
    '<br>\nThank You for thinking of us!<br>\nStay Curious!'+
    '<br>\n<a href="index.html">Go Home</a>';
    }
                  
    
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
function khuljaasimsim(id){
    var modal=document.getElementById('myModal');
    modal.style.display="block";
    switch(id)
    {
        case 'one':price_calc(rover1);
                    break;
        case 'two':price_calc(rover2);
                    break;
        case 'three':price_calc(rover3);
                    break;
        case 'four':price_calc(rover4);
                    break;
        case 'five':price_calc(rover5);
                    break;
    }
    
}

