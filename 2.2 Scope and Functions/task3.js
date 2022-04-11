function partitionOn(pred, items) {
  
    let _true = items.filter(d=>pred(d));
    let _false = items.filter(d=>!pred(d));
    
  //   const arr = [];
    items.length = 0;
    items.push.apply(items,_false.concat(_true));
    return items.indexOf(_true[0]);
    
  }