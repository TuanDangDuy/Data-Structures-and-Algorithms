//Using STACK
function DFS(node, graph) {
    const visited = [] //visited ban đầu là empty
    const stack = [node]
    visited[node] = true //node đã visited thì true

    while (stack.length > 0) {
        const currentNode = stack.pop() // > 0 thì pop ra
        console.log(currentNode)

        //lặp qua các node
        for(let i = 0; i < graph[currentNode].length; i++) { //currentNode là node tiếp theo (theo chiều sâu)
            const neighbor = graph[currentNode][i]

            if(!visited[neighbor]) {
                visited[neighbor] = true
                stack.push(neighbor)
            }
        }
    }
}

const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

DFS('A', graph)