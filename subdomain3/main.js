// --THE FOLLOWING CODE IS ONLY FOR APOD - ASTRONOMY PICTURE OF THE DAY -- //


// My Global Variables

var currentAPOD; // Astronomy Picture of the day - current day
var myDataAPOD; // All data requested by API - APOD only.


// My Event listeners

var getAPOD = document.getElementById("showAPOD").addEventListener("click", loadMyDataAPOD, false);


// End of event listeners


function loadMyDataAPOD() {

    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://api.nasa.gov/planetary/apod?api_key=h27SgJssM7Qh0G0xPFPBky4D8HFyfsL0yy9KSsBq", true);
    
    myRequest.onload = function () {
        
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            
            var myDataAPOD = JSON.parse(myRequest.responseText);
            // console.log(myDataAPOD); // - Test if the API is properly linked on click.  
            
            document.getElementById("explanationAPOD").innerHTML = myDataAPOD.explanation;
            document.getElementById("titleAPOD").innerHTML = myDataAPOD.title;
            document.getElementById("copyrightAPOD").innerHTML = "©" + myDataAPOD.copyright;
            document.getElementById("currentAPOD").innerHTML = '<img src="' + myDataAPOD.url + '"width="auto" height="auto" alt="Image of the day">';
            //document.getElementById("myImages").src= myData.url;  //Alternative method of dynamic images. Requires proper IMG tagging in paired HTML Doc.
        }
    
    };
    myRequest.send();
    
}






// --END OF APOD-- //







// ----------------------------------------------------------------------- //







// --THE FOLLOWING CODE IS ONLY FOR ISS - International Space Station -- //


// My Global Variables

var myISS; // International Space Station location.
var myDataISS; // All data requested by API - ISS only.


// My Event listeners

var getISS = document.getElementById("showISS").addEventListener("click", loadMyDataISS, false);


// End of event listeners


function loadMyDataISS() {

    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://api.wheretheiss.at/v1/satellites/25544", true);
    
    myRequest.onload = function () {
        
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            
            var myDataISS = JSON.parse(myRequest.responseText);
            console.log(myDataISS); // - Test if the API is properly linked on click.
            
            document.getElementById("altitudeISS").innerHTML = myDataISS.altitude;
            document.getElementById("longitudeISS").innerHTML = myDataISS.longitude;
            document.getElementById("latitudeISS").innerHTML = myDataISS.latitude;
            document.getElementById("currentVelocityISS").innerHTML = myDataISS.velocity;
            
        }
    
    };
    myRequest.send();
    
}







// --END OF ISS-- //






// ----------------------------------------------------------------------- //

var stars = document.querySelectorAll('.animated-card .animated .stars div'),
    planets = document.querySelectorAll('.animated-card .animated .planet'),
    header = document.querySelector('.animated-card .header'),
    background = document.querySelector('.animated-card .header .background'),
    rocket = document.querySelector('.animated-card .rocket-move'),
    startX,
    startY,
    offsetX,
    offsetY,
    isMoving = false,
    addBounceAnimation = function(element, time) {
      element.style.transition = "transform linear " + time + "ms";
      element.style.transform = "scaleY(1)";
      setTimeout(function() {
        element.style.transition = "transform linear " + time/2 + "ms";
        customTimeout(element, time, 0.1, 5);
      }, time/2);
    },
    customTimeout = function(element, time, value, repeat) {
      value = value/2;
      setTimeout(function() {
        if(repeat > 0) {
          element.style.transform = "scaleY(" + ( 1 + value) + ")";
          customTimeout(element, time, value, repeat - 1);
        } else {
          element.style.transition = "none";
        }
      }, time/2)
    },
    
    // Round values for star animations
    changeStar = function(element, index, array) {
      var posX = Math.floor((Math.random() * 100) + 1),
          posY = Math.floor((Math.random() * 100) + 1),
          scale = Math.random(),
          animationTime = Math.floor((Math.random() * (5000 - 10000)) + 10000)
      ;
      element.style.left = posX + "%";
      element.style.top = posY + "%";
      element.style.transform = "scale("+ scale + ")";
      element.style.animationDuration = animationTime + "ms";
    },
    
    // Round values for planet animations
    changePlanet = function(element, index, array) {
          animationTime = Math.floor((Math.random() * (20000 - 30000)) + 30000)
      ;
      element.style.animationDuration = animationTime + "ms";
    },
    
    touchStart = function(e) {
      var touch = e.changedTouches[0];
      
      startX = touch.pageX;
      startY = touch.pageY;
      
      // Add Rocket vibe
      rocket.classList.add('vibe');
      
    },
    touchMove = function(e) {
      e.preventDefault();
      
      var touch = e.changedTouches[0];
      
      offsetX = touch.pageX - startX;
      offsetY = touch.pageY - startY;
      
      // Direction = Vertical?
      if(offsetX < offsetY) {
        background.style.transformOrigin = "top";
        
        // Transform if inside limits
        if((1 + offsetY/1000) <= 1.2 && (1 + offsetY/1000) >= 1) {
          background.style.transform = "scaleY(" + (1 + offsetY/1000) + ") translateY(0)";
          isMoving = true;
        }
        
        if(offsetY/1000 <= 0) {
          isMoving = false;
        }
      }
      
    },
    touchEnd = function(e) {
      
      addBounceAnimation(background,200);
      background.classList.add('bounce');
      
      // Add fly animation
      if(isMoving === true) {
        rocket.classList.add('fly');
        setTimeout(function() {
          isMoving = false;
          if(isMoving === false) {
            rocket.classList.remove('vibe');
            rocket.classList.remove('fly');
          }
        }, 7000);
        
        // Remove Rocket vibe
        if(isMoving === false) {
          rocket.classList.remove('vibe');
          rocket.classList.remove('fly');
        }
      }
    }
;

stars.forEach(changeStar);
planets.forEach(changePlanet);


// Add event listeners
header.addEventListener("touchstart", touchStart);
header.addEventListener("touchmove", touchMove);
header.addEventListener("touchend", touchEnd);

document.getElementsByClassName("date").innerHTML = Date();
