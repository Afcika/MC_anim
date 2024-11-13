document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.conteiner');
    const mainText = document.querySelector('.main-text');
    const redSticks = document.querySelectorAll('.redstcik');
    const title = document.querySelector('.title');
    const price = document.querySelector('.price');
    const chickenname = document.querySelector('.chickenname');
    const cheeseburgername = document.querySelector('.cheeseburgername');
    const fishburger = document.querySelector('.fishburger');
    const footer = document.querySelector('.footer');
    const cheese = document.querySelector('.center .cheese');
    const burger = document.querySelector('.center .burger');
    const fish = document.querySelector('.center .fish');
    const bang = document.querySelector('.last .bang');
    const button = document.querySelector('.last .button');
    function animateSequence() {
           //chickenburger
        footer.classList.add('show');

        setTimeout(() => {
            mainText.classList.add('show');
        }, 600); 

      
        setTimeout(() => {
            redSticks.forEach((stick, index) => {
                setTimeout(() => {
                    stick.classList.add('show');
                }, index * 100);  
            });
        }, 800); 

    
        setTimeout(() => {
            mainText.classList.remove('show');
        }, 1900); 
      
      
        setTimeout(() => {
            title.classList.add('show');
            price.classList.add('show');
        }, 2200); 

       
        setTimeout(() => {         
            chickenname.classList.add('show');
        }, 2600); 



        //cheesburger
        setTimeout(() => { 
            setTimeout(() => {         
                cheese.classList.add("pop");
            }, 100); 
            setTimeout(() => {         
                burger.classList.add("pop");
                redSticks.forEach(stick => stick.classList.add('slide'));
                title.classList.add("pop");
                // chickenname.classList.remove('show');
                 chickenname.classList.add("dispnon");

            }),500;
            
            setTimeout(() => {         
                container.classList.add("burg");
            }, 300); 
            setTimeout(() => {        
                cheese.classList.add("removee");
                title.classList.add("popp");
            }, 300); 
              setTimeout(() => {        
                cheese.classList.add("remove");
            }, 400); 

            setTimeout(() => {
                redSticks.forEach(stick => {
                    stick.classList.remove('slide');  
                    stick.classList.remove('show');  
                    stick.classList.add('default');  
                });
            }, 700);  

            setTimeout(() => {
                redSticks.forEach((stick, index) => {
                    setTimeout(() => {
                        stick.classList.remove('default');  
                        stick.classList.add('show');       
                    }, index * 100); 
                });
            }, 800); 

            setTimeout(() => {
                cheeseburgername.classList.add('show');
                title.classList.remove("popp");
                title.classList.remove("pop");
            }, 1400); 

            
        },3500); 

        //fish
        setTimeout(() => { 
            setTimeout(() => {         
                burger.classList.add("popp");
            }, 100); 
            setTimeout(() => {         
                fish.classList.add("pop");
                redSticks.forEach(stick => stick.classList.add('slide'));
                title.classList.add("pop");
                // cheeseburgername.classList.remove('show');
                cheeseburgername.classList.add("dispnon");
            }),500;
            
            setTimeout(() => {         
                container.classList.add("fsh");
            }, 300); 
            setTimeout(() => {        
                burger.classList.add("removee");
                title.classList.add("popp");
            }, 300); 
              setTimeout(() => {        
                burger.classList.add("remove");
            }, 400); 

            setTimeout(() => {
                redSticks.forEach(stick => {
                    stick.classList.remove('slide');  
                    stick.classList.remove('show');  
                    stick.classList.add('default');  
                });
            }, 700);  

            setTimeout(() => {
                redSticks.forEach((stick, index) => {
                    setTimeout(() => {
                        stick.classList.remove('default');  
                        stick.classList.add('show');       
                    }, index * 100); 
                });
            }, 800); 

            setTimeout(() => {
                fishburger.classList.add('show');
                title.classList.remove("popp");
                title.classList.remove("pop");
            }, 1400); 

            
        },6100); 



        //textpart
        setTimeout(() => {  
            
            setTimeout(() => {         
                container.classList.add("plain");
            }); 

            setTimeout(() => {         
                fish.classList.add("popp");
            }, 100); 
            setTimeout(() => {         
                fish.classList.add("pop");
                redSticks.forEach(stick => stick.classList.add('slide'));
                title.classList.add("pop");
                // fishburger.classList.remove('show');
                fishburger.classList.add("dispnon");
            }),500;
            
           
            setTimeout(() => {        
                title.classList.add("remove");
                price.classList.add("remove");
                fish.classList.add("remove");
            }, 200); 
            setTimeout(() => {        
                fish.classList.add("removee");
            }, 200); 

            setTimeout(() => {
                redSticks.forEach(stick => {
                    stick.classList.remove('slide');  
                    stick.classList.remove('show');  
                    stick.classList.add('default');  
                });
            }, 500);  


            setTimeout(() => {
                bang.classList.add("show");
                button.classList.add("show");
            }, 700);  


            //button animation
            let scaleUp = false; 
            let count = 0; 
            setTimeout(() => {
                const interval = setInterval(() => {
                    if (scaleUp) {
                        button.style.transform = "scale(1)";
                        button.style.transition = "transform 0.1s ease all ";
                    } else {
                        button.style.transform = "scale(0.9)";
                        button.style.transition = "transform 0.1s ease all ";
                    }
                    scaleUp = !scaleUp;
                    count++;
            
                    
                    if (count >= 4) {
                        clearInterval(interval);
                    }
                }, 250); 
            }, 900);
            
            
         
      

            
        },8300); 



  

        setTimeout(() => {
            bang.classList.add('opp');
            button.style.opacity = '0';
            button.style.transition = "transform 0.1s ease all ";
            footer.classList.add('hide');
     
         
        }, 10500); 

        //reset
        setTimeout(() => {
            footer.classList.remove('hide');
        
            // Reset redSticks
            redSticks.forEach(stick => {
                stick.classList.remove('show', 'slide', 'default');
                stick.style.transform = '';
                stick.style.opacity = '';
            });
        
            // Reset title, price, and other text elements
            title.classList.remove('show', 'pop', 'popp', 'poppp', 'remove');
            price.classList.remove('show', 'remove');
            chickenname.classList.remove('show');
            cheeseburgername.classList.remove('show');
            fishburger.classList.remove('show');
        
            // Reset cheese, burger, and fish elements
            cheese.classList.remove('pop', 'remove', 'removee');
            burger.classList.remove('pop', 'remove', 'removee', 'popp');
            fish.classList.remove('pop', 'remove', 'removee', 'popp');
        
            // Reset bang and button elements
            bang.classList.remove('show' ,'opp');
            button.classList.remove('show', 'shrink' , 'opp');
            button.style.transform = '';
            button.style.opacity = '';
            button.style.transition = " ";
        
            // Reset container backgrounds
            container.classList.remove('burg', 'fsh', 'plain');
            chickenname.classList.remove( "show","dispnon");
            cheeseburgername.classList.remove("show","dispnon");
            fishburger.classList.remove("show","dispnon");
        }, 11000); 
    }

    animateSequence();
    setInterval(animateSequence, 11000); 
});
