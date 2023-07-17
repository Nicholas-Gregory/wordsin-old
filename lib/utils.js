const expPerLevelVal = 0.07;

const sigmoid = (x, mid, sup, steep) => sup / (Math.pow(1 + Math.E, (steep * -1) * (x - mid))); 

const expToLevel = level => Math.pow(((level) / expPerLevelVal), 2);

module.exports = {
    expPerLevelVal, sigmoid, expToLevel
}   