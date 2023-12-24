/**
 * Make sure every node has an adjaceny list that is not undefined.
 * If a node has no neighbors, the adjacency list should be an empty list, not undefined.
 * 
 * @param {graph} g 
 * @returns A well-formed graph in which all nodes have defined adjacency list.
 */
const constructGraph = (g) => {
    const { nodes, edges } = g;
    for(let n of nodes) {
        if(edges[n] === undefined) edges[n] = [];
    }
    return g;
};

/**
 * Convert a weighted graph into an unweighted graph.
 * 
 * @param {weighted graph} g 
 * @returns Unweighted counterpart of the weighted in put graph.
 */
const stripWeights = (g) => {
     const { nodes, edges } = g;
     const unweightedEdges = {};
     for(let node of nodes) {
        const e = [];
        for(let edgeObject of edges[node]) {
            for(let key in edgeObject) {
                e.push(key);
            }
        }
        unweightedEdges[node] = e;
     }
     return { nodes, edges: unweightedEdges };
};

module.exports = { constructGraph, stripWeights };