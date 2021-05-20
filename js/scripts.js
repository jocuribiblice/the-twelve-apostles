$(document).ready(function() {
  window.possible_words = [
    ["Simon Petru", true],
    ["Andrei", true],
    ["Iacob fiul lui Zebedei", true],
    ["Ioan", true],
    ["Filip", true],
    ["Bartolomeu (Natanael)", true],
    ["Toma", true],
    ["Matei", true],
    ["Iacob fiul lui Alfeu", true],
    ["Iuda fiul lui Iacov", true],
    ["Simon Zelotul", true],
    ["Iuda Iscarioteanul", true],
    ["Adam", false],
    ["Cain", false],
    ["Eutih", false],
    ["Noe", false],
    ["David", false],
    ["Elisei", false],
    ["Solomon", false],
    ["Samson", false],
    ["Goliat", false],
    ["Pavel", false],
    ["Caiafa", false],
    ["Irod", false],
    ["Timotei", false],
  ];
  window.game_is_finished = false;
  window.is_apostle = true;
  window.word = "";


  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  function get_random_definition() {
    var random_number = Math.floor(Math.random() * possible_words.length);
    var selected_word = possible_words[random_number];
    return selected_word;
  }


  function choose_word() {
    var selected_word = get_random_definition();
    window.word = selected_word[0];
    window.is_apostle = selected_word[1];
  }

  function win() {
    $("p#status").css({"background": "#2ecc71"});
    game_is_finished = true;
    $("a#next-exercise").show();
  }


  function start_game() {
    choose_word();
    $("a#next-exercise").hide();
    $("p#status").text(window.word + " este apostol?");

    $("a.btn.btn-answer").on("click", function(evt) {
      evt.preventDefault();
      var selected_is_apostle = $(this).hasClass("btn-yes");
      if (selected_is_apostle === window.is_apostle) {
        $(this).removeClass("btn-warning").addClass("btn-success");
        win();
      } else {
        $(this).removeClass("btn-warning").addClass("btn-danger");
      }
    });
  }

  $("a#app-info-details").on("click", function(evt) {
    evt.preventDefault();
    $("div.app-info-details").toggle();
  });

  start_game();
});
