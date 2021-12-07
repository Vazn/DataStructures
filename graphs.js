function Graph(isWeighted = false, isDirected = false) {

   this.vertices = [];
   this.isWeighted = isWeighted;
   this.isDirected = isDirected;

   this.addVertex = function(data) {
      const newVertex = new Vertex(data);
      this.vertices.push(newVertex);
      return newVertex;
   };
   this.removeVertex = function(data) {
      this.vertices = this.vertices.filter(x => x !== data);
   };

   this.addEdge = function(v1, v2, weight) {
      let edgeWeight;
      this.isWeighted ? edgeWeight = weight : edgeWeight = null;

      if (v1 instanceof Vertex && v2 instanceof Vertex) {
         v1.addEdge(v2, edgeWeight);
         if(this.isDirected === false){
            v2.addEdge(v1, edgeWeight);
         }
      } 
      else {
         throw new Error("You must add edges between instances of Vertex !");
      }
   };

   this.removeEdge = function(v1, v2) {
      if (v1 instanceof Vertex && v2 instanceof Vertex) {
         v1.removeEdge(v2);
         if(this.isDirected === false){
            v2.removeEdge(v1);
         }
      } 
      else {
         throw new Error("You must remove edges between instances of Vertex !");
      }
   };

   this.print = function() {
      this.vertices.forEach(vertex => vertex.print());
   };  
}
function Vertex(data) {
   
   this.data = data;
   this.edges = [];
   
   this.addEdge = function(vertex, weight) {
      if (vertex instanceof Vertex) {
         this.edges.push(new Edge(this, vertex, weight));
      }
      else {
         throw new Error("You must link a vertex with another vertex !");
      }
   }
   this.removeEdge = function(vertex) {
      this.edges = this.edges.filter((edge) => edge.end !== vertex);
   }
   
   this.print = function() {
      const edgeList = this.edges.map(edge =>
         edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data) || [];
 
      const output = `${this.data} --> ${edgeList.join(', ')}`;
      console.log(output);
   }
}
function Edge(start, end, weight = null) {
   
   this.start = start;
   this.end = end;
   this.weight = weight;
}
module.exports = Graph;