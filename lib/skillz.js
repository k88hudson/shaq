module.exports = function (colours) {
  var fs = require('fs');
  var path = require('path');
  var shaqsHead = colours.yellow('( ° ͜ ʖ °)  ');

  return {
    // Shaq says hi
    hello: function sayHi() {
      console.log(shaqsHead + 'Hi there. I am Shaq');
    },

    rap: function rap() {
      // Make shaq rap
    }
  };

};
