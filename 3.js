function getValueByPath(jsonObject, path) {
    const keys = path.split(".");
    try {
      let currentObject = jsonObject;
      for (let key of keys) {
        if (currentObject !== null && typeof currentObject === "object" && currentObject.hasOwnProperty(key)) {
          currentObject = currentObject[key];
        } else {
          throw new Error("Path does not exist.");
        }
      }
      return currentObject;
    } catch (error) {
      return error.message;
    }
  }
  const jsonObject = {
      "India": {
          "TamilNadu": {
              "Chennai": {
                  "Population": 11933697
              },
              "Trichy": {
                  "Population": 1221960
              }
          }
      }
  };
  const path1 = "India.TamilNadu.Chennai.Population";
  console.log(getValueByPath(jsonObject, path1));
  const path2 = "India.TamilNadu.Mumbai.Population";
  console.log(getValueByPath(jsonObject, path2));