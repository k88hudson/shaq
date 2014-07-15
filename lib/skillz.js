module.exports = function (colours) {
  var fs = require('fs');
  var path = require('path');
  var shaqsHead = colours.yellow('( ° ͜ ʖ °)  ');

  return {
    // Shaq says hi
    sayHi: function sayHi() {
      console.log(shaqsHead + 'Hi there. I am Shaq');
    },

    // This is a function that prints out the help file. Yay!
    help: function help() {
      console.log(shaqsHead);
      console.log(fs.readFileSync(path.join(__dirname, 'help.txt'), 'utf8'));
    }
  };

};
