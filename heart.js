var bgHeart = document.getElementById("bg_heart"); //THE BACKGROUND ELEMENT
var love = setInterval(generateHeart, 500); //WHAT'S REPEATED EVERY 0.5 SECONDS

function generateHeart() {
    //generate random numbers
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 10) + 5;
 
  //generate styles based on random numbers
  var styles = `width: ${r_size}px;
                height: ${r_size}px;
                left: ${r_size}%;
                background: rgb(255, ${r_bg - 25}, ${r_bg});
                animation: love ${r_time}s ease;
`;
 
  //create the new heart element
  var heart = document.createElement("div");
  //add the class "heart" to the heart element
  heart.classList.add("heart");
  //set the styles we generated onto the new heart element
  heart.setAttribute("style", styles);
  bgHeart.appendChild(heart);  

  //periodically remove heart elements that go offscreen
  var hearts = document.querySelectorAll(".heart");
  hearts.forEach(heart => {
    //see the top position for each heart
    var top = heart.style.top.replace(/[^-\d\.]/g, '');
    if (top <= -100) {
      heart.remove();
    }
  })
}
