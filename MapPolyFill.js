//Filter PolyFill

Array.prototype.ownMap = function() {
    var thatArray = this;
    var callback = arguments[0];
    var arr = [];
    for (let i = 0; i < thatArray.length; i++) {
        arr.push(callback(thatArray[i]));
    }
    return arr;
};
