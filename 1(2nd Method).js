function mergeObjects(obj1, obj2) {
    function isObject(obj) {
        return obj && typeof obj === 'object' && !Array.isArray(obj);
    }

    for (const key in obj2) {
        if (isObject(obj2[key])) {
            if (isObject(obj1[key])) {
                mergeObjects(obj1[key], obj2[key]);
            } else {
                obj1[key] = obj2[key];
            }
        } else {
            obj1[key] = obj2[key];
        }
    }

    return obj1;
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

mergeObjects(obj1, obj2);
console.log(JSON.stringify(obj1, null, 2));
