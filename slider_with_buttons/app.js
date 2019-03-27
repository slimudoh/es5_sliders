function sliderMenu() {                
    this.arrayElements = [];
    this.index = 0;
    this.setTimer = 2000;
    this.htmlElements = document.querySelectorAll(".slider-container > div");
    this.sliderCounter;
    this.startSliderCounter;
    this.defaultCounter;
    this.outTimer;

    this.getHtmlElements = function() {
        for (var i = 0; i < this.htmlElements.length; i++) {
            this.arrayElements.push(this.htmlElements[i]);
        }                    
    }

    this.default = function() {
        var time = this.setTimer;
        this.arrayElements[this.index].style.left = 0;
        this.defaultCounter = setTimeout(() => {
            this.index = this.index + 1; 
            this.arrayElements[0].style.animation = "come-out .5s";
            this.arrayElements[0].style.webkitAnimation = "come-out .5s";
            this.arrayElements[0].style.left = "100%"; 
        }, time);
    }

    this.slide = function() {
        var time = this.setTimer;
        this.arrayElements[this.index].style.animation = "come-in .5s";
        this.arrayElements[this.index].style.webkitAnimation = "come-in .5s";
        this.arrayElements[this.index].style.left = 0;
        var divNumber, divSlider;                                          
        this.sliderCounter = setTimeout(() => {
            this.arrayElements[this.index].style.animation = "come-out .5s";
            this.arrayElements[this.index].style.webkitAnimation = "come-out .5s";
            this.arrayElements[this.index].style.left = "100%";    
            this.index = this.index + 1;   
            if (this.index < this.arrayElements.length) {
                this.slide();
            } else {
                this.index = 0;
                this.slide();
            }                         
            }, time);                        
    }

    this.divHeight = function() {
        var imageHeight = document.querySelector(".slider-container > div > img");
        var parentDiv = document.querySelector(".slider-container");
        parentDiv.style.height = imageHeight.height + "px";
    } 

    this.nextSlide = function() {
        var time = this.setTimer;

        clearTimeout(this.sliderCounter);       
        clearTimeout(this.startSliderCounter);
        clearTimeout(this.defaultCounter); 

        this.arrayElements[this.index].style.animation = "come-out .5s";
        this.arrayElements[this.index].style.webkitAnimation = "come-out .5s";
        this.arrayElements[this.index].style.left = "100%";
       if (this.index < this.arrayElements.length - 1) {                                    
            this.index = this.index + 1;
            this.arrayElements[this.index].style.animation = "come-in .5s";
            this.arrayElements[this.index].style.webkitAnimation = "come-in .5s";
            this.arrayElements[this.index].style.left = 0;                  
        } else  if (this.index === this.arrayElements.length - 1) {                 
                this.arrayElements[0].style.animation = "come-in .5s";
                this.arrayElements[0].style.webkitAnimation = "come-in .5s";
                this.arrayElements[0].style.left = 0;   
                this.index = 0;                        
            } 
            this.startSliderCounter = setTimeout(() => {
                      this.slide();    
            }, time);                                              
    } 

    this.previousSlide = function() {
        var time = this.setTimer;

       clearTimeout(this.sliderCounter);
       clearTimeout(this.startSliderCounter); 
       clearTimeout(this.defaultCounter);    
       
       this.arrayElements[this.index].style.animation = "back-in .5s";
       this.arrayElements[this.index].style.webkitAnimation = "back-in .5s";
       this.arrayElements[this.index].style.left = "100%"; 
                     
        if (this.index > 0) {                                 
            this.index = this.index - 1;
            this.arrayElements[this.index].style.animation = "back-out .5s";
            this.arrayElements[this.index].style.webkitAnimation = "back-out .5s";
            this.arrayElements[this.index].style.left = 0;                                          
         } else  if (this.index === 0) {              
                this.index = this.arrayElements.length - 1
                this.arrayElements[this.index].style.animation = "back-out .5s";
                this.arrayElements[this.index].style.webkitAnimation = "back-out .5s";
                this.arrayElements[this.index].style.left = 0;   
            } 
             this.startSliderCounter = setTimeout(() => {
                      this.slide();    
            }, time);
    }                  
}   

//render views
var x =  new sliderMenu();   
onload = function() {  
            x.getHtmlElements();
            x.default();
            x.outTimer = setTimeout(() => {
                x.slide();
            }, x.setTimer);   
            x.divHeight();                                          
};  

onresize = function() {
    var x =  new sliderMenu();  
    x.divHeight(); 
}           
          

 document.querySelector(".slider-next").addEventListener("click", function() {
     clearTimeout(x.outTimer);
    x.nextSlide();
}, false);  

document.querySelector(".slider-previous").addEventListener("click", function() {
    clearTimeout(x.outTimer);
    x.previousSlide();
}, false);  
