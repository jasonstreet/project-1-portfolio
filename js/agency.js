(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 60)
        }, 1500, "easeInOutExpo");
        return false;
      }
    }
  });
     

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 90
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict


//Type animation
$('#example2').typeIt({
     strings: ["a front-end developer.", "a dabbler in back-end code.", "busy coding!", "a graphic design enthusiast.", "passionate about code.", "always learning.", "an all round computer geek!"],
     speed: 100,
     breakLines: false,
     autoStart: false,
     deleteSpeed: 115,
     deleteDelay: 4000,
     loop: true
});

window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();

var RandomGen = {
  
  randomize : function(a, b) {
    return Math.random() * (b - a) + a;
  },
  
   randomInt : function(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  },
  
  getDirVec : function(x,y){
    var angle = this.randomize(0,(2 * Math.PI));
    return new Vector(Math.sin(angle) * x, - Math.cos(angle) * y);
  },
} 
    
var Vector = function(x,y){
  
  this.x = x || 0;
  this.y = y || 0;
  
  this.add = function(v){
    this.x += v.x;
    this.y += v.y;
    return this;
  };
  
  this.mult = function(v){
    this.x *= v.x;
    this.y *= v.y;
  };  
}

var App = {
  
  init : function(){
    this.canvas = document.getElementById('app');
    this.context = this.canvas.getContext('2d');
    this.particles = [];
    this.WIDTH  = window.innerWidth;
    this.HEIGHT = window.innerHeight;
    
    this.canvas.width = this.WIDTH;
    this.canvas.height = this.HEIGHT;
    this.bindHandlers();
    this.draw();
  },
  
  bindHandlers : function(){
    this.canvas.addEventListener(
    'click', this.fireParticles,false);
     this.canvas.addEventListener(
    'mousemove', this.fireSmallParticles,false);
    this.createParticles(this.WIDTH / 2, this.HEIGHT / 2, false);
    window.onresize = App.resize;
  },
  
  fireParticles : function(e){
    var xPos = e.pageX;
    var yPos = e.pageY;
    App.createParticles(xPos,yPos,false);
  },
  
  fireSmallParticles : function(e){
    var xPos = e.pageX;
    var yPos = e.pageY;
    App.createParticles(xPos,yPos,true);
  },
  
  createParticles : function(x,y,isSmall){
    var amount = isSmall ? RandomGen.randomInt(10,25) :  RandomGen.randomInt(150,350);
     
    for (var i = 0; i < amount; i++){
      var particle =  new Particle(x,y,isSmall);
      this.particles.push(particle);
    }
  },
  
  draw : function(){
    for (var i = 0; i < App.particles.length; i++){
      App.particles[i].update(); 
      if(App.particles[i].lifetime < 0){
        App.particles.splice(i,1);
      }
    }
   App.context.fillStyle = "rgba(0,0,0,0.25)";
   App.context.fillStyle = "rgba(0,0,0,0.25)";
    App.context.fillRect(0, 0, App.canvas.width,    App.canvas.height); 
    window.requestAnimFrame(App.draw);
  },
  
  resize : function(){
     App.canvas.width =  window.innerWidth;
    App.canvas.height =  window.innerHeight;
  }

}

var Particle = function(x,y,isSmall){
  
  this.pos = new Vector(x,y);
  this.size = isSmall ? RandomGen.randomize(1,1) :
    RandomGen.randomize(1,8);
  var acc = RandomGen.randomize(0,this.size);
  this.dir = RandomGen.getDirVec(acc,acc);
  this.lifetime = RandomGen.randomize(20,60);
}
  
  Particle.prototype.draw = function(){
    
    App.context.fillStyle = "#fff";
    App.context.beginPath();
    App.context.rect(
      this.pos.x,this.pos.y,this.size,this.size);
    App.context.closePath();
    App.context.stroke();
    
    App.context.fill();
  };
  
  Particle.prototype.update = function(){ 
    this.lifetime--;
    this.dir.mult(new Vector(.97,.97));
    this.pos.add(this.dir);    
    this.draw();
  }
  
App.init();    
