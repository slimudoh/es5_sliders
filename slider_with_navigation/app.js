

function sliderMenu() {                
    this.arrayElements = [];
    this.index = 0;
    this.setTimer = 2000;
    this.htmlElements = document.querySelectorAll(".slider-container > div");
    this.navBtns = document.querySelector(".nav-btns");
    this.sliderCounter;
    this.startSliderCounter;
    this.defaultCounter;

    this.getHtmlElements = function() {
        for (var i = 0; i < this.htmlElements.length; i++) {
            this.arrayElements.push(this.htmlElements[i]);
        }                    
    }

    this.default = function() {
        var time = this.setTimer;
        this.arrayElements[this.index].style.left = 0;
        this.navBtns.children[this.index].style.backgroundColor = "#000";                   
        this.defaultCounter = setTimeout(() => {
            this.index = this.index + 1;  
            this.arrayElements[0].style.animation = "come-out .5s";
            this.arrayElements[0].style.webkitAnimation = "come-out .5s";
            this.arrayElements[0].style.left = "100%"; 
        }, time);
    }

    this.slide = function() {
        this.nav();
        var time = this.setTimer;
        this.arrayElements[this.index].style.animation = "come-in .5s";
        this.arrayElements[this.index].style.webkitAnimation = "come-in .5s";
        this.arrayElements[this.index].style.left = 0;
        this.navBtns.children[this.index].style.backgroundColor = "#000";
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


    this.createNav = function() {
        for (var i = 0; i <  this.htmlElements.length; i++) {
            this.navBtns.innerHTML += " <div onclick='" + "x.navClick(event)" + "'></div> ";           
        }
    }        
    
    
    this.nav = function() {
        for (var i = 0; i < this.navBtns.children.length; i++) {
            this.navBtns.children[i].style.backgroundColor = "#fff";
        }
    }

    this.navClick = function(e) {
        for (var i = 0; i < this.navBtns.children.length; i++) {
            this.navBtns.children[i].style.backgroundColor = "#fff";
           if (e.target === this.navBtns.children[i]) {
               this.navBtns.children[i].style.backgroundColor = "#000";
               this.arrayElements[this.index].style.animation = "come-out .5s";
            this.arrayElements[this.index].style.webkitAnimation = "come-out .5s";
            this.arrayElements[this.index].style.left = "100%";  
               this.index = i;
               this.nextSlide();
           }
        }
    }

    this.nextSlide = function() {
        var time = this.setTimer;

        clearTimeout(this.sliderCounter);       
        clearTimeout(this.startSliderCounter);
        clearTimeout(this.defaultCounter);   
            this.arrayElements[this.index].style.animation = "come-in .5s";
            this.arrayElements[this.index].style.webkitAnimation = "come-in .5s";
            this.arrayElements[this.index].style.left = 0;                  
            this.startSliderCounter = setTimeout(() => {
                      this.slide();    
            }, time);                                              
    } 

}   

//render views
var x =  new sliderMenu();   
onload = function() {                        
            x.getHtmlElements();
            x.createNav();
            x.default();
            setTimeout(() => {
                x.slide();
            }, x.setTimer);   
            x.divHeight(); 
};   

onresize = function() {
    var x =  new sliderMenu();  
    x.divHeight(); 
}         

