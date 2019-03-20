function union(arg1, arg2) {
    if (Array.isArray(arg1) && Array.isArray(arg2)) 
        return [...new Set([...arg1 ,...arg2])];
    if (typeof arg1 === 'object' && typeof arg2 === 'object')
      return {...arg1, ...arg2};
  }
  
  function same(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) 
        return false;
    
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) 
            return false;
    }
    return true;
  }