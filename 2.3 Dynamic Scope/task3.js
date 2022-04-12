function createFunctions(n) {
    var callbacks = [];
    var rf = function(x){
      return function(){
        return x;
      }
    }
    for (var i=0; i<n; i++) {
      callbacks.push(rf(i));
    }
    
    return callbacks;
  }