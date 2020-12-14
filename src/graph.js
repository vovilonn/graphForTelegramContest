import graph from "./graph";

export default function Graph() {
    this.getGraph = () => {
        return graph;
    };
    this.update = (newGraph) => {
        fs.writeFileSync("graph.json", JSON.stringify(newGraph));
    };
}
