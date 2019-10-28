$( document ).ready(function() {

  var cards = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
  var suits= ["diamonds", "spades", "clubs", "hearts"];

  var diamonds = [];
  var spades = [];
  var clubs = [];
  var hearts = [];


  // cards.forEach(function(card){
  //
  //   diamonds.push(card + " of Diamonds");
  //   spades.push(card + " of Spades");
  //   clubs.push(card + " of Clubs");
  //   hearts.push(card + " of Hearts");

    // $("#output"+(i + 1)).text(answer.toUpperCase());
    cards.forEach(function(card){

      suits.forEach(function(suit){

        console.log(suit + card)

      });

    });



  });
  // console.log(diamonds);
  // console.log(spades);
  // console.log(clubs);
  // console.log(hearts);
