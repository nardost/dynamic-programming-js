
const { depthFirst } = require('../src/graph-algorithms/traversal');
const { stripWeights, constructGraph } = require('../src/graph-algorithms/graph-utils');
const graph = require('./test-data/graphs/unweighted/ug-1.json');
const weighted = require('./test-data/graphs/weighted/wg-1.json');

test('', () => {
    const path = depthFirst(stripWeights(constructGraph(weighted)), "s");
    console.log(stripWeights(weighted));
    console.log('depth first ', path);
})
