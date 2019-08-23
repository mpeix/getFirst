exports.getfirst = function(param){
    let _first = undefined;
    if(param){
        if(Array.isArray(param) && param.length > 0)
            _first = param[0]
        else{
            if(typeof(param) === 'object' && Object.keys(param).length > 0)
                _first = {[Object.keys(param)[0]] : param[Object.keys(param)[0]]};        
        }   
    }
  
    return _first;
}
