const assertEqual = require(`./assertEqual`);

const tail = function(array) {
  let newArr = [];
  newArr = array.slice(1);
  return newArr;
};


module.exports = tail;