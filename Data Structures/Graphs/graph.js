/*
//egdes :line
//vertex:node
//undirected graph
*/
class Graph {
  constructor() {
    this.adjacencyList = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    //find key of vertex1 and push vertex2 to the array
    this.adjacencyList[vertex1].push(vertex2);
    //find key of vertex2 and push vertex1 to the array
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v != vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFS_iterative(start) {
    let stack = [start]; //Alice
    let result = []; //[]
    let visited = {}; //{}
    let currentVertex;
    visited[start] = true; //{ Alice: true }
    while (stack.length > 0) {
      //1>0 true
      console.log("stack --->", stack);
      currentVertex = stack.shift();
      console.log("current --->", currentVertex);
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  depthFirstRecursive(start) {
    let result = [];
    let visited = [];
    const adjacencyList = this.adjacencyList;
    //helper function
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
  breadthFirst(start) {
    //add start to the queue
    const queue = [start];
    //initialize a empty result array
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      //first element in the queue
      currentVertex = queue.shift();
      //push it to the result array
      result.push(currentVertex);
      //
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}
const g = new Graph();
g.addVertex("Alice");
g.addVertex("Bob");
g.addVertex("Candy");
g.addVertex("Derek");
g.addVertex("Elaine");
g.addVertex("Fred");
g.addVertex("Helen");
g.addVertex("Gina");
g.addVertex("Irena");
g.addEdge("Alice", "Bob");
g.addEdge("Alice", "Candy");
g.addEdge("Alice", "Derek");
g.addEdge("Alice", "Elaine");
g.addEdge("Bob", "Fred");
g.addEdge("Fred", "Helen");
g.addEdge("Derek", "Gina");
g.addEdge("Gina", "Irena");
//console.log(g.breadthFirst("Candy"));
console.log(g.DFS_iterative("Alice"));
console.log(g);
