$(document).ready(function(){
    var count=0;
    
    function getQuote(){
      var quotes = [
        'Living in Ladera Heights', 'The black Beverly Hills', 
        'Domesticated paradise', 'Palm trees and pools', 
        'The water is blue, swallow the pill', 
        'Keeping it surreal, whatever you like', 
        'Whatever feels good, whatever takes you mountain high', 
        'Keeping it surreal, not sugar-free, my TV ain\’t HD, that\'s too real', 
        'Grapevine, mango, peaches, and limes, the sweet life', 'The sweet life, sweet life',
       'Sweet life, sweet life', 'The sweet, sweet, sweet, life', 'Sweet life, the sweet life'
      ];
       
      if(count == quotes.length){
        $(".quote").text("The best song wasn't the single, but you weren't either");
        count = 0;
      }
      else{ 
        $(".quote").text(quotes[count]);
        count++;
      }
            
    
    }
    
    $("#newQuote").on("click", function(){
       getQuote();
     });
     
});
     
   
   
   
   
   
   
     
     
     
     
     
     
     
     
     
     
     