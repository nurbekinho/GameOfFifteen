if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'GameOfFifteen'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'GameOfFifteen'.");
}
var GameOfFifteen = function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Game(context) {
    Game$Companion_getInstance();
    this.context_0 = context;
    this.state = '';
    window.addEventListener('keydown', Game_init$lambda(this));
    window.addEventListener('keyup', Game_init$lambda_0(this));
    this.intro_0();
  }
  function Game$Companion() {
    Game$Companion_instance = this;
    this.INTRO = 'intro';
    this.PLAYING = 'playing';
    this.PAUSED = 'paused';
    this.FINISHED = 'finished';
  }
  Game$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Game$Companion_instance = null;
  function Game$Companion_getInstance() {
    if (Game$Companion_instance === null) {
      new Game$Companion();
    }
    return Game$Companion_instance;
  }
  Game.prototype.intro_0 = function () {
    this.state = Game$Companion_getInstance().INTRO;
    this.context_0.font = '30px Arial';
    this.context_0.fillStyle = 'black';
    this.context_0.textAlign = 'center';
    this.context_0.fillText('Press [Space Bar] To Start The Game!', GAME_WIDTH / 2, GAME_HEIGHT / 2);
  };
  Game.prototype.update_0 = function () {
  };
  Game.prototype.draw_0 = function () {
  };
  Game.prototype.onKeyDown_0 = function (event) {
    var tmp$;
    var keyboardEvent = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : throwCCE();
  };
  Game.prototype.onKeyUp_0 = function (event) {
    var tmp$;
    var keyboardEvent = Kotlin.isType(tmp$ = event, KeyboardEvent) ? tmp$ : throwCCE();
    keyboardEvent.keyCode;
  };
  function Game_init$lambda(this$Game) {
    return function (it) {
      this$Game.onKeyDown_0(it);
      return Unit;
    };
  }
  function Game_init$lambda_0(this$Game) {
    return function (it) {
      this$Game.onKeyUp_0(it);
      return Unit;
    };
  }
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  var GAME_WIDTH;
  var GAME_HEIGHT;
  function main() {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var context = Kotlin.isType(tmp$_0 = canvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
    new Game(context);
  }
  Object.defineProperty(Game, 'Companion', {
    get: Game$Companion_getInstance
  });
  _.Game = Game;
  Object.defineProperty(_, 'GAME_WIDTH', {
    get: function () {
      return GAME_WIDTH;
    }
  });
  Object.defineProperty(_, 'GAME_HEIGHT', {
    get: function () {
      return GAME_HEIGHT;
    }
  });
  _.main = main;
  GAME_WIDTH = 800.0;
  GAME_HEIGHT = 600.0;
  main();
  Kotlin.defineModule('GameOfFifteen', _);
  return _;
}(typeof GameOfFifteen === 'undefined' ? {} : GameOfFifteen, kotlin);
