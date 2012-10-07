var transVal = function(from, to, steps){
    var steplength = (to-from)/steps;
    var ret = [];
    var current = from;
    for(var i=0;i<steps;i++){
        current+=steplength;
        ret=ret.concat(current);
    }
    return ret;
};
var transArray = function(from, to, steps){
    var ret=[];
    var steplengths = {};
    var last = from;
    for(var index in from){
        steplengths[index] = (to[index]-from[index])/steps;
    }
    for(var i=0;i<steps;i++){
        var current=Array.isArray(last)?[]:{};
        for(var index in steplengths){
            current[index]=last[index]+steplengths[index];
        }
        last = current;
        ret = ret.concat(current);
    }
    return ret;
};
module.exports.Arrays = transArray;
module.exports.Values = transVal;