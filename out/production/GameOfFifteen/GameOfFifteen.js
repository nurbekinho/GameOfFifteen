if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'GameOfFifteen'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'GameOfFifteen'.");
}
var GameOfFifteen = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main() {
    println('Salam, Duino!');
  }
  _.main = main;
  main();
  Kotlin.defineModule('GameOfFifteen', _);
  return _;
}(typeof GameOfFifteen === 'undefined' ? {} : GameOfFifteen, kotlin);
