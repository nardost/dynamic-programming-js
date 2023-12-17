const gridTraveler = (m, n) => {
    if(m === 0 || n === 0) return 0;
    if(m === 1 && n === 1) return 1;
    return gridTraveler(m-1, n) + gridTraveler(m, n-1);
};

const dynamicGridTraveler = (m, n, memo={}) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m === 0 || n === 0) return 0;
    if(m === 1 && n === 1) return 1;
    memo[key] = dynamicGridTraveler(m-1, n, memo) + dynamicGridTraveler(m, n-1, memo);
    return memo[key];
};

module.exports = { gridTraveler, dynamicGridTraveler };