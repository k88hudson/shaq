module.exports = function (colours) {
  var fs = require('fs');
  var path = require('path');
  var shaqsHead = colours.yellow('( ° ͜ ʖ °)  ');

  return {
    hello: function hello() {
      console.log(shaqsHead + 'Hi there. I am Shaq');
    },
    rap: function rap() {
      // Make shaq rap
    }
  };

};
