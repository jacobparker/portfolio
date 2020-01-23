/*$(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

            $("header").addClass("background-header");
          } else {
            $("header").removeClass("background-header");
          }
        });
*/

/*Typewriter Effect*/
/*var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

var textArray = [
  "an engineer",
  "an inventor",
  "a developer", 
  "a designer"
];

var speedForward = 100,
    speedWait = 2000, 
    speedBackspace = 100; 

//Invoke function
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h2");
  
  if (!isBackspacing) {
    
    if (i < aString.length) {

        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } 
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);

    } else if (i == aString.length) {
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
    }
    
    //If isBackspacing = true
  } else {
    
    if (eHeader.text().length > 0) {
      
      if (eHeader.text().length > 0) {
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
    } else { 
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, loops back to 0
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      
    }
  }
}
*/
