function checkID(param, name){
    if(param === undefined || typeof param !== 'string'){
        throw `${name} cannot be undefined and must be a string`;
    }
    if(param.trim() === ""){
        throw `${name} cannot be an empty string`;
    }
    param = param.trim();
    if(isNaN(param)){
        throw `${name} must be a number`;
    }
    return param;
}

export {
    checkID
}