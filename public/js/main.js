(() => {


    const seeMoreButtons = document.querySelectorAll('.see-more');
    popOver = document.querySelector('.popover');
    var waterRuleThreeDays = document.querySelector('.water-rules');




         function buildPopover(plantdata, el) {
            //  popOver.querySelector(".ipa-rating").textContent = `IPA Rating: ${plantdata.IpaRating}`;
            //  popOver.querySelector(".ratings").textContent = `Average Rating: ${plantdata.ratings}`;
             popOver.querySelector(".plant-description").textContent = plantdata.text;

             //show the popover
             popOver.classList.add('show-popover');
             el.appendChild(popOver);
         }

      //run the fetch API and get the DB data

      function fetchData() {
          let targetEl = this,
              url = `/svgdata/${this.dataset.target}`;

              fetch(url)
              .then(res => res.json())
              .then(data => {
                  console.log(data);

                  //populate the popover

                  buildPopover(data, targetEl); 
              })
              .catch((err) => console.log(err));
      };

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));


    

    //aditional js
 
    
    var waterRuleOneWeek = document.querySelector('.water-rules-two');
    var waterRuleOneThreeWeek = document.querySelector('.water-rules-three');
    var donotofthenWater = document.querySelectorAll('.water-1');
    var donotofthenWaterTwo = document.querySelectorAll('.water-2');
    var donotofthenWaterThree = document.querySelectorAll('.water-3');
    var displayWater = document.querySelectorAll('.areca-palm-water');
    var sunlightRulesSunny = document.querySelector('.sunlight-rules');
    var sunlightRulesHalfSunny = document.querySelector('.sunlight-rules-two');
    var sunlightRulesShade = document.querySelector('.sunlight-rules-three');
    var donotofthenSun = document.querySelectorAll('.sun-1');
    var donotofthenSunTwo = document.querySelectorAll('.sun-2');
    var donotofthenSunThree = document.querySelectorAll('.sun-3');
    var displaySun = document.querySelectorAll('.sunlight');
    //temp
    var TemptRules = document.querySelector('.temp-rules');
    var Tempt1 = document.querySelectorAll('.tempt1');
    var Tempt2 = document.querySelectorAll('.tempt2');
    var Tempt3 = document.querySelectorAll('.tempt3');
    var TemptMain = document.querySelectorAll('.tempMain');

    
    var TemptRulesTwo = document.querySelector('.temp-rules-two');
    var TemptRulesThree = document.querySelector('.temp-rules-three');
    
    TemptRules.addEventListener('click', function() {
        Tempt3.forEach(tempt3 => tempt3.style.display = "block");
        Tempt2.forEach(tempt2 => tempt2.style.display = "block");
        Tempt1.forEach(temp1 => temp1.style.display = "none");
        TemptMain.forEach(temp => temp.style.display = "block");


    });

    TemptRulesTwo.addEventListener('click', function() {
        Tempt3.forEach(tempt3 => tempt3.style.display = "block");
        Tempt1.forEach(temp1 => temp1.style.display = "block");
        Tempt2.forEach(tempt2 => tempt2.style.display = "none");
        TemptMain.forEach(temp => temp.style.display = "block");

    });


    TemptRulesThree.addEventListener('click', function() {
        Tempt1.forEach(temp1 => temp1.style.display = "block");
        Tempt2.forEach(tempt2 => tempt2.style.display = "block");
        Tempt3.forEach(tempt3 => tempt3.style.display = "none");
        TemptMain.forEach(temp => temp.style.display = "block");

    });


    waterRuleThreeDays.addEventListener('click', function() {
        donotofthenWaterThree.forEach(water3 => water3.style.display = 'block');
        donotofthenWaterTwo.forEach(water2 => water2.style.display = 'block');
        donotofthenWater.forEach(water => water.style.display = 'none');
        displayWater.forEach(waterdisplay => waterdisplay.style.display = 'block');
        
    });

    waterRuleOneWeek.addEventListener('click', function() {
        donotofthenWaterThree.forEach(water3 => water3.style.display = 'block');
        donotofthenWater.forEach(water => water.style.display = 'block');
        donotofthenWaterTwo.forEach(water2 => water2.style.display = 'none');
        displayWater.forEach(waterdisplay => waterdisplay.style.display = 'block');
        
        

    });

    waterRuleOneThreeWeek.addEventListener('click', function() {
        donotofthenWaterTwo.forEach(water2 => water2.style.display = 'block');
        donotofthenWater.forEach(water => water.style.display = 'block');
        donotofthenWaterThree.forEach(water3 => water3.style.display = 'none'); 
        displayWater.forEach(waterdisplay => waterdisplay.style.display = 'block');


    });

    sunlightRulesSunny.addEventListener('click', function() {
        donotofthenSunThree.forEach(sun3 => sun3.style.display = 'block');
        donotofthenSunTwo.forEach(sun2 => sun2.style.display = "block");
        donotofthenSun.forEach(sun => sun.style.display = 'none');
        displaySun.forEach(sundisplay => sundisplay.style.display = 'block');

    });

    sunlightRulesHalfSunny.addEventListener('click', function() {
        donotofthenSunThree.forEach(sun3 => sun3.style.display = 'block');
        donotofthenSun.forEach(sun => sun.style.display = 'block');
        donotofthenSunTwo.forEach(sun2 => sun2.style.display = "none");
        displaySun.forEach(sundisplay => sundisplay.style.display = 'block');

    });

    sunlightRulesShade.addEventListener('click', function() {
        donotofthenSun.forEach(sun => sun.style.display = 'block');
        donotofthenSunTwo.forEach(sun2 => sun2.style.display = "block");
        donotofthenSunThree.forEach(sun3 => sun3.style.display = 'none');
        displaySun.forEach(sundisplay => sundisplay.style.display = 'block');
        
    })


    

})();