const csedata3 = [
  {
    question:
      "Which of the following algorithms is used for finding strongly connected components?",
    options: ["Dijkstra's", "Tarjan's", "Prim's", "Kruskal's"],
    correctAnswer: "Tarjan's",
  },
  {
    question: "What is the time complexity of searching in a balanced BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    question:
      "Which of these data structures gives O(1) average time for insertion, deletion, and lookup?",
    options: ["Hash Table", "Binary Search Tree", "Heap", "Stack"],
    correctAnswer: "Hash Table",
  },
  {
    question:
      "Which of the following sorting algorithms can be easily parallelized?",
    options: ["Quick Sort", "Merge Sort", "Insertion Sort", "Bubble Sort"],
    correctAnswer: "Merge Sort",
  },
  {
    question:
      "Which algorithm detects cycle in an undirected graph using Union-Find?",
    options: ["Prim’s", "Kruskal’s", "Dijkstra’s", "Bellman-Ford"],
    correctAnswer: "Kruskal’s",
  },
  {
    question:
      "Which data structure is used to perform level order traversal in a tree?",
    options: ["Stack", "Queue", "Deque", "Priority Queue"],
    correctAnswer: "Queue",
  },
  {
    question: "Which algorithm is used to find articulation points in a graph?",
    options: ["Tarjan’s", "Kruskal’s", "Prim’s", "Dijkstra’s"],
    correctAnswer: "Tarjan’s",
  },
  {
    question:
      "Which tree traversal can be used to get postfix expression from expression tree?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correctAnswer: "Postorder",
  },
  {
    question: "What is the time complexity of inserting a node in an AVL tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    question: "Which data structure efficiently supports both FIFO and LIFO?",
    options: ["Deque", "Stack", "Queue", "Linked List"],
    correctAnswer: "Deque",
  },
  {
    question:
      "Which of the following is not a self-balancing binary search tree?",
    options: ["AVL Tree", "Red-Black Tree", "Splay Tree", "Binary Heap"],
    correctAnswer: "Binary Heap",
  },
  {
    question:
      "Which of the following is a non-comparison-based sorting algorithm?",
    options: ["Quick Sort", "Heap Sort", "Counting Sort", "Merge Sort"],
    correctAnswer: "Counting Sort",
  },
  {
    question:
      "In Dijkstra’s algorithm, which data structure is used to get the minimum distance vertex efficiently?",
    options: ["Queue", "Priority Queue (Min Heap)", "Stack", "Deque"],
    correctAnswer: "Priority Queue (Min Heap)",
  },
  {
    question: "Which traversal algorithm uses recursion by default?",
    options: ["BFS", "DFS", "Level Order", "All of these"],
    correctAnswer: "DFS",
  },
  {
    question:
      "Which of the following algorithms works on the concept of 'greedy choice' and 'optimal substructure'?",
    options: [
      "Dynamic Programming",
      "Greedy Algorithm",
      "Divide and Conquer",
      "Backtracking",
    ],
    correctAnswer: "Greedy Algorithm",
  },
  {
    question:
      "What is the worst-case time complexity of searching in a hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
  },
  {
    question:
      "Which data structure can be used to convert recursive algorithms to iterative ones?",
    options: ["Queue", "Stack", "Deque", "Heap"],
    correctAnswer: "Stack",
  },
  {
    question: "Which of these statements is true about B-Trees?",
    options: [
      "They are binary trees",
      "They are used in databases",
      "They store duplicate keys",
      "They are slower than AVL trees",
    ],
    correctAnswer: "They are used in databases",
  },
  {
    question: "Which algorithm uses memoization technique?",
    options: [
      "Greedy Algorithm",
      "Dynamic Programming",
      "Divide and Conquer",
      "Backtracking",
    ],
    correctAnswer: "Dynamic Programming",
  },
  {
    question:
      "Which algorithm is used to find shortest paths between all pairs of vertices?",
    options: ["Dijkstra’s", "Bellman-Ford", "Floyd–Warshall", "Prim’s"],
    correctAnswer: "Floyd–Warshall",
  },
  {
    question: "What is the maximum number of children in a binary heap node?",
    options: ["1", "2", "3", "Depends on data"],
    correctAnswer: "2",
  },
  {
    question:
      "Which sorting algorithm is most efficient when the array size is small?",
    options: ["Merge Sort", "Insertion Sort", "Quick Sort", "Heap Sort"],
    correctAnswer: "Insertion Sort",
  },
  {
    question:
      "Which data structure is used for implementing undo operation in text editors?",
    options: ["Queue", "Stack", "Heap", "Array"],
    correctAnswer: "Stack",
  },
  {
    question: "Which algorithm is not suitable for negative weight edges?",
    options: ["Bellman-Ford", "Dijkstra’s", "Floyd–Warshall", "Johnson’s"],
    correctAnswer: "Dijkstra’s",
  },
  {
    question:
      "What is the time complexity of building a heap from an unsorted array?",
    options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
    correctAnswer: "O(n)",
  },
  {
    question: "Which traversal of a binary search tree gives sorted order?",
    options: ["Preorder", "Inorder", "Postorder", "Level Order"],
    correctAnswer: "Inorder",
  },
  {
    question:
      "What is the main advantage of adjacency list over adjacency matrix?",
    options: [
      "Faster edge lookup",
      "Less memory for sparse graphs",
      "Easier to implement",
      "None",
    ],
    correctAnswer: "Less memory for sparse graphs",
  },
  {
    question: "Which algorithm uses the concept of pivot element?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Counting Sort"],
    correctAnswer: "Quick Sort",
  },
  {
    question: "Which algorithm is used for optimal parenthesization problem?",
    options: [
      "Prim’s",
      "Matrix Chain Multiplication",
      "Bellman-Ford",
      "Kruskal’s",
    ],
    correctAnswer: "Matrix Chain Multiplication",
  },
  {
    question: "Which of the following can be used to find bridges in a graph?",
    options: ["Tarjan’s Algorithm", "Kruskal’s", "Prim’s", "DFS"],
    correctAnswer: "Tarjan’s Algorithm",
  },
  {
    question: "Which algorithm is used to find transitive closure of a graph?",
    options: ["Floyd–Warshall", "Prim’s", "Kruskal’s", "Dijkstra’s"],
    correctAnswer: "Floyd–Warshall",
  },
  {
    question: "Which data structure provides amortized O(1) for push and pop?",
    options: ["Queue", "Stack", "Dynamic Array", "Linked List"],
    correctAnswer: "Dynamic Array",
  },
  {
    question:
      "What is the time complexity of searching in a hash table with chaining?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(1)",
  },
  {
    question: "Which data structure is used for implementing a priority queue?",
    options: ["Stack", "Heap", "Queue", "Deque"],
    correctAnswer: "Heap",
  },
  {
    question: "Which algorithm is based on the concept of relaxation?",
    options: ["Bellman-Ford", "Kruskal", "Prim", "A*"],
    correctAnswer: "Bellman-Ford",
  },
  {
    question: "Which sorting algorithm is stable and in-place?",
    options: ["Merge Sort", "Insertion Sort", "Heap Sort", "Quick Sort"],
    correctAnswer: "Insertion Sort",
  },
  {
    question:
      "Which data structure allows insertion and deletion at both ends?",
    options: ["Stack", "Queue", "Deque", "Heap"],
    correctAnswer: "Deque",
  },
  {
    question: "Which algorithm is used in Huffman coding?",
    options: [
      "Greedy Algorithm",
      "Dynamic Programming",
      "Backtracking",
      "Divide and Conquer",
    ],
    correctAnswer: "Greedy Algorithm",
  },
  {
    question: "Which traversal technique uses recursion most naturally?",
    options: ["BFS", "DFS", "Level Order", "All of these"],
    correctAnswer: "DFS",
  },
  {
    question: "Which algorithm finds maximum flow in a network?",
    options: ["Floyd–Warshall", "Ford–Fulkerson", "Kruskal’s", "Prim’s"],
    correctAnswer: "Ford–Fulkerson",
  },
  {
    question: "Which data structure uses both front and rear pointers?",
    options: ["Queue", "Stack", "Deque", "Heap"],
    correctAnswer: "Queue",
  },
  {
    question: "Which algorithm helps in finding optimal binary search tree?",
    options: [
      "Greedy",
      "Dynamic Programming",
      "Divide and Conquer",
      "Backtracking",
    ],
    correctAnswer: "Dynamic Programming",
  },
  {
    question:
      "Which of the following traversals cannot be done iteratively using stack?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correctAnswer: "Level Order",
  },
  {
    question: "Which sorting algorithm is best for linked lists?",
    options: ["Quick Sort", "Merge Sort", "Heap Sort", "Bubble Sort"],
    correctAnswer: "Merge Sort",
  },
  {
    question: "Which algorithm helps to detect cycles in an undirected graph?",
    options: ["Union-Find", "Dijkstra", "Prim", "Bellman-Ford"],
    correctAnswer: "Union-Find",
  },
  {
    question:
      "Which traversal method can print all leaf nodes of a binary tree?",
    options: ["Preorder", "Inorder", "Postorder", "Any of the above"],
    correctAnswer: "Any of the above",
  },
  {
    question: "Which algorithm is used for topological sorting?",
    options: ["DFS", "BFS", "Prim’s", "Kruskal’s"],
    correctAnswer: "DFS",
  },
  {
    question: "Which of these operations is fastest in a hash map?",
    options: ["Search", "Insertion", "Deletion", "All are O(1) average"],
    correctAnswer: "All are O(1) average",
  },
  {
    question:
      "Which of the following algorithms is an example of divide and conquer?",
    options: ["Merge Sort", "Prim’s", "Kruskal’s", "Bellman-Ford"],
    correctAnswer: "Merge Sort",
  },
  {
    question: "Which data structure is used in A* algorithm?",
    options: ["Queue", "Priority Queue", "Stack", "Deque"],
    correctAnswer: "Priority Queue",
  },
  {
    question: "Which algorithm is used to solve the subset sum problem?",
    options: [
      "Dynamic Programming",
      "Greedy",
      "Divide and Conquer",
      "Backtracking",
    ],
    correctAnswer: "Dynamic Programming",
  },
  {
    question:
      "Which traversal method is used for deletion in binary search trees?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correctAnswer: "Postorder",
  },
];

// ✅ Score to Code Mapping
const scoreCodeMap = {
  0: "1024",
  1: "2048",
  2: "3072",
  3: "4096",
  4: "5120",
  5: "6144",
  6: "7168",
  7: "8192",
  8: "9216",
  9: "9999",
  10: "1234",
};

// ✅ Function to get code based on score
function getCodeForScore(score) {
  const normalizedScore = Math.min(Math.floor(score), 10); // Cap at 10
  return scoreCodeMap[normalizedScore] || "0000"; // Default if not found
}

// ✅ Example: show code when user finishes quiz
function showUserCode(score) {
  const code = getCodeForScore(score);
  alert(`🎯 Your Score Code: ${code}`);
}

export { csedata3, getCodeForScore, showUserCode };
