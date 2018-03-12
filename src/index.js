// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
    Object.prototype[property];
    return property;
};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {enumerable: false, value: 'value'})
    return property;
};
const createProtoMagicObject = () => {return Function;}

const incrementor = () => {
    if(incrementor.count)
    {
        incrementor.count = incrementor.count;
    }
    else incrementor.count = 1;
    function counter(){
        incrementor.count++;
        return counter;
    }
    counter.valueOf = function() {
        return incrementor.count++;
    }
    return counter;
};
const asyncIncrementor = () => {
    if(asyncIncrementor.count == undefined)
    {
        asyncIncrementor.count =1
    }
    else asyncIncrementor.count++;
    return asyncIncrementor.count;
};

const createIncrementer = () => {
    function* generator()
    {
        yield 1;
        yield 2;
        return 3;
    }
    return generator();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(param);
        }, 1250);
    });
    return promise;
};
const getDeepPropertiesCount = (obj) => {
    var count = 0;
    function counter(obj)
    {
        for( var key in obj)
        {
            if(typeof(obj[key])=='object')
            {
                counter(obj[key]);
            }
            count++;
        }
        return count;
    }
    return counter(obj);
};
const createSerializedObject = () => {return new String;};
const toBuffer = () => {};
const sortByProto = (array) => {
    function compare(a,b){
        if(a.__proto__>b.__proto__)return 1;
        if(a.__proto__<b.__proto__)return -1;
        return 0;
    }
    array.sort(compare);
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
