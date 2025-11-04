const csedata2 = [
  {
    question: "What is the time complexity of heap sort in the worst case?",
    options: ["O(n log n)", "O(n²)", "O(log n)", "O(n)"],
    correctAnswer: "O(n log n)",
  },
  {
    question: "Which traversal technique uses a queue data structure?",
    options: [
      "Inorder Traversal",
      "Depth First Search",
      "Breadth First Search",
      "Postorder Traversal",
    ],
    correctAnswer: "Breadth First Search",
  },
  {
    question: "Which of the following is a divide and conquer algorithm?",
    options: ["Quick Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
    correctAnswer: "Quick Sort",
  },
  {
    question: "In a binary search tree, which traversal gives sorted data?",
    options: ["Preorder", "Postorder", "Inorder", "Level Order"],
    correctAnswer: "Inorder",
  },
  {
    question: "Which data structure is used in recursion?",
    options: ["Queue", "Array", "Stack", "Heap"],
    correctAnswer: "Stack",
  },
  {
    question: "What is the auxiliary space of merge sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: "O(n)",
  },
  {
    question:
      "Which algorithm is used to find the shortest path in a weighted graph?",
    options: ["Kruskal’s", "Prim’s", "Dijkstra’s", "DFS"],
    correctAnswer: "Dijkstra’s",
  },
  {
    question: "What is the best case complexity of quick sort?",
    options: ["O(n²)", "O(log n)", "O(n log n)", "O(n)"],
    correctAnswer: "O(n log n)",
  },
  {
    question: "Which traversal is used to copy a binary tree?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correctAnswer: "Preorder",
  },
  {
    question: "What is the height of a balanced binary tree with n nodes?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    question: "Which of the following algorithms is not stable?",
    options: ["Merge Sort", "Insertion Sort", "Quick Sort", "Bubble Sort"],
    correctAnswer: "Quick Sort",
  },
  {
    question: "Which of the following uses dynamic programming?",
    options: ["Dijkstra", "Floyd–Warshall", "Prim", "Kruskal"],
    correctAnswer: "Floyd–Warshall",
  },
  {
    question:
      "What is the number of edges in a complete graph with n vertices?",
    options: ["n", "n²", "n(n-1)/2", "2n"],
    correctAnswer: "n(n-1)/2",
  },
  {
    question: "Which data structure is used for implementing LRU cache?",
    options: ["Stack", "Queue", "HashMap + Doubly Linked List", "Heap"],
    correctAnswer: "HashMap + Doubly Linked List",
  },
  {
    question: "Which traversal is used for expression tree evaluation?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correctAnswer: "Postorder",
  },
  {
    question: "Which of these cannot be implemented using recursion?",
    options: ["Factorial", "Fibonacci", "Binary Search", "Queue using array"],
    correctAnswer: "Queue using array",
  },
  {
    question: "In AVL trees, what does AVL stand for?",
    options: [
      "Adelson-Velskii and Landis",
      "Advanced Vector Logic",
      "Algorithmic Value Logic",
      "Array Variable List",
    ],
    correctAnswer: "Adelson-Velskii and Landis",
  },
  {
    question:
      "Which sorting algorithm is preferred when data is almost sorted?",
    options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort"],
    correctAnswer: "Insertion Sort",
  },
  {
    question: "Which of the following algorithms is not a greedy algorithm?",
    options: ["Prim’s", "Kruskal’s", "Dijkstra’s", "Floyd–Warshall"],
    correctAnswer: "Floyd–Warshall",
  },
  {
    question: "What is the space complexity of depth-first search (DFS)?",
    options: ["O(V)", "O(E)", "O(V+E)", "O(1)"],
    correctAnswer: "O(V)",
  },
  {
    question: "Which of these is not a linear data structure?",
    options: ["Queue", "Stack", "Graph", "Array"],
    correctAnswer: "Graph",
  },
  {
    question:
      "What is the worst-case time complexity of inserting into a binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
  },
  {
    question: "Which data structure is used for topological sorting?",
    options: ["Queue", "Stack", "Array", "Heap"],
    correctAnswer: "Stack",
  },
  {
    question:
      "Which of the following statements is true about graph adjacency matrix?",
    options: [
      "Uses O(V+E) space",
      "Uses O(V²) space",
      "Faster for sparse graphs",
      "Cannot represent directed graphs",
    ],
    correctAnswer: "Uses O(V²) space",
  },
  {
    question: "Which algorithm is used for minimum spanning tree?",
    options: ["Dijkstra’s", "Kruskal’s", "Floyd–Warshall", "Bellman-Ford"],
    correctAnswer: "Kruskal’s",
  },
  {
    question: "Which traversal gives prefix notation in expression tree?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correctAnswer: "Preorder",
  },
  {
    question: "What is the auxiliary space complexity of quick sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: "O(log n)",
  },
  {
    question: "Which algorithm uses backtracking?",
    options: ["Kruskal’s", "N-Queens Problem", "Dijkstra’s", "Prim’s"],
    correctAnswer: "N-Queens Problem",
  },
  {
    question: "Which is true for binary search?",
    options: [
      "Works on unsorted arrays",
      "O(n) time complexity",
      "Works only on sorted arrays",
      "Needs linked list",
    ],
    correctAnswer: "Works only on sorted arrays",
  },
  {
    question: "Which data structure is used to detect a cycle in a graph?",
    options: ["Stack", "Queue", "Disjoint Set", "Heap"],
    correctAnswer: "Disjoint Set",
  },
  {
    question: "Which algorithm is used for detecting negative weight cycles?",
    options: ["Bellman-Ford", "Dijkstra", "Prim", "Kruskal"],
    correctAnswer: "Bellman-Ford",
  },
  {
    question: "Which data structure is used in a BFS algorithm?",
    options: ["Stack", "Queue", "Heap", "Graph"],
    correctAnswer: "Queue",
  },
  {
    question: "What is the recurrence relation for merge sort?",
    options: [
      "T(n)=T(n-1)+O(1)",
      "T(n)=2T(n/2)+O(n)",
      "T(n)=T(n/2)+O(n²)",
      "T(n)=T(n-1)+O(n)",
    ],
    correctAnswer: "T(n)=2T(n/2)+O(n)",
  },
  {
    question: "Which of the following is not a stable sorting algorithm?",
    options: ["Merge Sort", "Bubble Sort", "Quick Sort", "Counting Sort"],
    correctAnswer: "Quick Sort",
  },
  {
    question: "Which traversal visits root before subtrees?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correctAnswer: "Preorder",
  },
  {
    question: "Which data structure helps in implementing recursion?",
    options: ["Stack", "Queue", "Heap", "Array"],
    correctAnswer: "Stack",
  },
  {
    question:
      "Which algorithm finds connected components in an undirected graph?",
    options: ["BFS/DFS", "Dijkstra", "Kruskal", "Prim"],
    correctAnswer: "BFS/DFS",
  },
  {
    question: "Which data structure is best for implementing priority queues?",
    options: ["Stack", "Array", "Linked List", "Heap"],
    correctAnswer: "Heap",
  },
  {
    question:
      "Which sorting algorithm has O(n²) time complexity but is stable?",
    options: ["Selection Sort", "Insertion Sort", "Heap Sort", "Quick Sort"],
    correctAnswer: "Insertion Sort",
  },
  {
    question:
      "Which of the following data structures can be used to implement DFS?",
    options: ["Queue", "Stack", "Array", "Heap"],
    correctAnswer: "Stack",
  },
  {
    question: "Which algorithm is used to detect a cycle in a directed graph?",
    options: ["Kruskal", "Floyd’s Cycle Detection", "DFS", "Prim’s"],
    correctAnswer: "DFS",
  },
  {
    question: "Which algorithm is used for pathfinding in games?",
    options: ["Kruskal", "A*", "Prim’s", "Bellman-Ford"],
    correctAnswer: "A*",
  },
  {
    question: "Which data structure is used to evaluate postfix expression?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: "Stack",
  },
  {
    question: "Which of these is not an in-place sorting algorithm?",
    options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Selection Sort"],
    correctAnswer: "Merge Sort",
  },
  {
    question: "Which algorithm can be used to find articulation points?",
    options: ["Tarjan’s", "Kruskal’s", "Prim’s", "Bellman-Ford"],
    correctAnswer: "Tarjan’s",
  },
  {
    question: "Which algorithm uses relaxation repeatedly?",
    options: ["Kruskal’s", "Bellman-Ford", "Prim’s", "DFS"],
    correctAnswer: "Bellman-Ford",
  },
  {
    question: "Which traversal gives postfix notation in expression tree?",
    options: ["Preorder", "Postorder", "Inorder", "Level Order"],
    correctAnswer: "Postorder",
  },
  {
    question:
      "Which of the following is not a characteristic of dynamic programming?",
    options: [
      "Optimal Substructure",
      "Overlapping Subproblems",
      "Recursion",
      "Randomness",
    ],
    correctAnswer: "Randomness",
  },
  {
    question:
      "Which algorithm is used to detect deadlock in operating systems?",
    options: ["Banker’s Algorithm", "Prim’s", "Kruskal’s", "A*"],
    correctAnswer: "Banker’s Algorithm",
  },
  {
    question: "Which of these is a non-linear data structure?",
    options: ["Stack", "Queue", "Linked List", "Tree"],
    correctAnswer: "Tree",
  },
  {
    question: "Which of the following problems uses backtracking?",
    options: ["Shortest Path", "N-Queens", "Sorting", "Scheduling"],
    correctAnswer: "N-Queens",
  },
  {
    question: "Which traversal visits nodes level by level?",
    options: ["Preorder", "Inorder", "Level Order", "Postorder"],
    correctAnswer: "Level Order",
  },
];
// ✅ Score code mapping (4-digit codes for each score 0–10)
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

export { csedata2, getCodeForScore, showUserCode };
