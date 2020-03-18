
document.getElementById("set_time").style.display = "none";

var open = false;

var mobileViewport = window.matchMedia("screen and (max-width: 560px)");

if(mobileViewport.matches) {
    // viewport <= 560px
    

    function showtime(){
        if(open == false){
            document.getElementById("set_time").style.animation = "showpanel 2s";
            document.getElementById("set_time").style.left = "20vw"; 
            open = true;
        }else{
            document.getElementById("set_time").style.animation = "showpanelback 2s";
            document.getElementById("set_time").style.left = "100vw";
            open = false;
        }
                           
    }
} else {
    // viewport > 560px
    function showtime(){
        if(open == false){
            document.getElementById("set_time").style.animation = "showpanel 2s";
            document.getElementById("set_time").style.left = "81.5vw"; 
            open = true;
        }else{
            document.getElementById("set_time").style.animation = "showpanelback 2s";
            document.getElementById("set_time").style.left = "100vw";
            open = false;
        }
                           
    }
}



var nextdate = document.getElementById("nextdate");
var nexttime = document.getElementById("time");
var next;
var placeinput = document.getElementById("place");
var place;
//count next mitting date 
function alerttime(){    
    next = nextdate.value + "T" + nexttime.value + ":00Z";
    //document.getElementById("clock").style.display="flex"; //display clock when submited
    place = "w " + placeinput.value;
    document.getElementById("miejsce").innerHTML = place;
}


    /*
    set next miting date
    */
        var dataspotkania = new Date("2020-04-17T00:20:00Z");
      
        var x = setInterval(function() {           
            var now = new Date().getTime();           
            var distance = dataspotkania - now; //change next(string value) to miliseconds from '1970
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                       
            document.getElementById("days").innerHTML = days + "d"+ " ";
            document.getElementById("hours").innerHTML = hours + "h" + " ";
            document.getElementById("minutes").innerHTML = minutes + "m" + " ";
            document.getElementById("seconds").innerHTML = seconds + "s";
            
            
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);

       
