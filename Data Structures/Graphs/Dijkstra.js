/**Dijkstas's Algorithm
 *we make the starting vertex our current vertex
 *we check all the vertices adjacent to the current vertex
 *calculate and record rhe weights from the starting to all known locations
 *to determine the next current vertex ,we find the cheapest unvisited known vertex that can be that reached from the starting vertex
 *Repeat the first three steps until we have visited every vertex in the graph
 */

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => {
      return a.priority - b.priority;
    });
  }
}

class WeightedGraph {
  constructor() {
    this.adjencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      this.adjencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjencyList[vertex1].push({
      node: vertex2,
      weight
    });
    this.adjencyList[vertex2].push({
      node: vertex1,
      weight
    });
  }
  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distance = {};
    const previous = {};
    const path = [];
    let smallest;
    //build up initial state
    for (const vertex in this.adjencyList) {
      if (vertex === start) {
        distance[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //as long as there is somethin to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      if (smallest === finish) {
        //we are done
        //build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distance[smallest] !== Infinity) {
        for (const neighbor in this.adjencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distance[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distance[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distance[nextNeighbor] = candidate;
            //updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const dij = new WeightedGraph();
dij.addVertex("Paris");
dij.addVertex("Dakar");
dij.addVertex("New York");
dij.addVertex("Hong Kong");
dij.addVertex("Rome");
dij.addVertex("Munich");
dij.addEdge("Paris", "Dakar", 4);
dij.addEdge("Paris", "New York", 2);
dij.addEdge("Dakar", "Rome", 3);
dij.addEdge("New York", "Hong Kong", 2);
dij.addEdge("New York", "Munich", 4);
dij.addEdge("Hong Kong", "Rome", 3);
dij.addEdge("Hong Kong", "Munich");
dij.addEdge("Rome", "Munich", 1);
console.log(dij.dijkstra("Paris", "Munich"));
console.log(dij);
