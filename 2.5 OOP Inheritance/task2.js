Object.prototype.hash = function(string) {
    var obj = this;
    string.split(".").forEach(function(el) {
      try {
        obj = obj[el]; 
      } catch(e) {
        obj = undefined;
      } 
    });
    return obj;
  }