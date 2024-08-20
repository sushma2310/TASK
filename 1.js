function mergeObjects(obj1, obj2) {
    const merged = {};
    function isObject(obj) {
        return obj && typeof obj === 'object' && !Array.isArray(obj);
    }


    for (const key in obj1) {
        if (isObject(obj1[key]) && isObject(obj2[key])) { merged[key] = mergeObjects(obj1[key], obj2[key]);
        } else {
            merged[key] = obj1[key];
        }
    }


    for (const key in obj2) {
        if (merged[key] === undefined) { merged[key] = obj2[key];
        } else if(!isObject (obj1[key]) && obj2[key]!== undefined){
            merged[key] = obj2[key];
        }
    }
    return merged;
}


const obj1 = {
  "key-1": "value-1.1",
  "key-2": "value-1.2",
  "key-3": {
    "key-3.1": "value-1.3"
  }
};
const obj2 = {
  "key-2": "value-2.2",
  "key-3": {
    "key-3.2": "value-2.4"
  }
};
const result = mergeObjects(obj1, obj2);
console.log(result);