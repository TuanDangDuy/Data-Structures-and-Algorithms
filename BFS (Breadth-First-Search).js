//Using QUEUE
function BFS(start, graph) {
    const queue = [start]   // Tạo queue và đưa start vào queue / Khởi tạo hàng đợi bắt đầu từ đỉnh start
    const visited = {}  // Khởi tạo mảng visited để đánh dấu các đỉnh đã được thăm
    visited[start] = true   // Đánh dấu đỉnh start đã được thăm

    while(queue.length) {   // Lặp đến khi queue rỗng
        const node = queue.shift()  //Xoá phần tử đầu tiên ra khỏi queue
        console.log(node)   // In ra đỉnh đang được thăm

        for(let neighbor of graph[node]) {  // Duyệt qua các đỉnh kề với đỉnh node
            if(!visited[neighbor]) {    // Nếu đỉnh neighbor chưa được thăm
                visited[neighbor] = true    // Đánh dấu đỉnh neighbor đã được thăm
                queue.push[neighbor]    // Thêm neighbor vào cuối hàng đợi
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

BFS('A', graph)