function checkArr(arr){
    return Array.isArray(arr) || Object.prototype.toString.call(arr) === '[object Array]';
  }
  
  let arrProto = Array.prototype;
  
  arrProto.square = function(){
    if(checkArr(this)){
       return this.map((item) => {
          return Math.pow(item, 2);
       });
    }
  };
  
  arrProto.cube = function(){
    if(checkArr(this)){
       return this.map((item) => {
          return Math.pow(item, 3);
       });
    }
  };
  
  arrProto.sum = function(){
    if(checkArr(this)){
       return this.reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
       },0);
    }
  };
  
  arrProto.average = function(){
    if(checkArr(this)){
       return this.sum() / this.length;
    } 
  };
  
  arrProto.even = function(){
     if(checkArr(this)){
       return this.filter((item) => {
          return item % 2 === 0;
       });
    } 
  };
  
  arrProto.odd = function(){
     if(checkArr(this)){
       return this.filter((item) => {
          return item % 2 !== 0;
       });
    } 
  };
  