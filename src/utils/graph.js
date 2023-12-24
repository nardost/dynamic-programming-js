const print = (graph) => {
    const { nodes, edges } = graph;
    for(n of nodes) {
        const e = edges[n] ?? [];
        for(k of e) {
            for(j in k) {
                console.log(`${n} --(${k[j]})--> ${j}`);
            }
        }
    }
}

module.exports = { print };