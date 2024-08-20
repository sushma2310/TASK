function generateSampleJSON(structure, n) {
    function generateValue(type) {
        switch (type) {
            case 'string':
                return Math.random().toString(36).substring(7);
            case 'number':
                return Math.floor(Math.random() * 100);
            case 'boolean':
                return Math.random() < 0.5;
            default:
                return null;
        }
    }
    const samples = [];
    for (let i = 0; i < n; i++) {
        let sample = {};
        structure.forEach(field => {
            sample[field.key] = generateValue(field.type);
        });
        samples.push(sample);
    }
    return samples;
}
const inputStructure = [
{
    "key": "name",
    "type": "string"
},
{
    "key": "age",
    "type": "number"
},
{
    "key": "canVote",
    "type": "boolean"
}];
const numberOfSamples = 2;
const output = generateSampleJSON(inputStructure, numberOfSamples);
console.log(output);