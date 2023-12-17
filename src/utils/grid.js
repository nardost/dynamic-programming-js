const gridTraveler = (m, n) => {
    if(m === 0 || n === 0) return 0;
    if(m === 1 && n === 1) return 1;
    return gridTraveler(m-1, n) + gridTraveler(m, n-1);
};

module.exports = { gridTraveler };