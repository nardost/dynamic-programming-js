const { constructGraph } = require('./graph-utils');

/**
 * Depth-First Traversal of an undirected graph.
 */
const depthFirst = (graph, startNode) => {
   const { nodes, edges } = constructGraph(graph);
   if(!nodes.includes(startNode)) throw new Error(startNode, ' is not a valid node.');

   const depthFirstPath = [];
   const stack = [];

   stack.push(startNode);
   while(stack.length > 0) {
      const current = stack.pop();
      depthFirstPath.push(current);
      const neighbors = edges[current];
      while(neighbors.length > 0) {
         stack.push(neighbors.pop());
      }
   }
   return depthFirstPath;
};

module.exports = { depthFirst };