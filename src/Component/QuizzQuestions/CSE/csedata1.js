const csedata1 = [
  {
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(log n)",
  },
  {
    question: "Which data structure is best suited for implementing recursion?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: "Stack",
  },
  {
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: "O(n)",
  },
  {
    question:
      "Which traversal of a binary search tree gives elements in sorted order?",
    options: ["Preorder", "Postorder", "Inorder", "Level order"],
    correctAnswer: "Inorder",
  },
  {
    question: "In a min-heap, which node contains the smallest value?",
    options: ["Leaf Node", "Root Node", "Leftmost Node", "Rightmost Node"],
    correctAnswer: "Root Node",
  },
  {
    question: "Which sorting algorithm is stable?",
    options: ["Selection Sort", "Quick Sort", "Merge Sort", "Heap Sort"],
    correctAnswer: "Merge Sort",
  },
  {
    question: "What is the worst-case time complexity of QuickSort?",
    options: ["O(n log n)", "O(n²)", "O(log n)", "O(n)"],
    correctAnswer: "O(n²)",
  },
  {
    question:
      "Which data structure is used in breadth-first search of a graph?",
    options: ["Stack", "Queue", "Tree", "Heap"],
    correctAnswer: "Queue",
  },
  {
    question:
      "What is the time complexity of inserting an element in a Binary Search Tree (average case)?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    question: "Which traversal method uses recursion by default?",
    options: ["Inorder", "Preorder", "Postorder", "All of these"],
    correctAnswer: "All of these",
  },
  {
    question: "In a circular queue, how do you detect overflow?",
    options: [
      "Front == Rear",
      "(Rear + 1) % Size == Front",
      "Rear == Size",
      "Front == -1",
    ],
    correctAnswer: "(Rear + 1) % Size == Front",
  },
  {
    question: "Which of these has the lowest time complexity for searching?",
    options: ["Hash Table", "Binary Search Tree", "Array", "Linked List"],
    correctAnswer: "Hash Table",
  },
  {
    question: "Which algorithm uses divide and conquer?",
    options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Counting Sort"],
    correctAnswer: "Merge Sort",
  },
  {
    question:
      "Which data structure allows insertion and deletion at both ends?",
    options: ["Queue", "Stack", "Deque", "Circular Queue"],
    correctAnswer: "Deque",
  },
  {
    question: "Which algorithm is used to detect cycles in a directed graph?",
    options: [
      "Dijkstra’s Algorithm",
      "Floyd-Warshall",
      "Topological Sort",
      "Kruskal’s Algorithm",
    ],
    correctAnswer: "Topological Sort",
  },
  {
    question: "Which of the following is not a stable sorting algorithm?",
    options: ["Bubble Sort", "Merge Sort", "Heap Sort", "Insertion Sort"],
    correctAnswer: "Heap Sort",
  },
  {
    question: "In a max-heap, the value of the parent node is always:",
    options: [
      "Greater than or equal to its children",
      "Less than its children",
      "Equal to its left child",
      "Equal to its right child",
    ],
    correctAnswer: "Greater than or equal to its children",
  },
  {
    question: "Which algorithm finds the shortest path in a weighted graph?",
    options: ["DFS", "Dijkstra’s", "Prim’s", "Kruskal’s"],
    correctAnswer: "Dijkstra’s",
  },
  {
    question: "What is the auxiliary space complexity of QuickSort?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    question: "Which data structure uses FIFO principle?",
    options: ["Stack", "Queue", "Heap", "Tree"],
    correctAnswer: "Queue",
  },
  {
    question: "Which of the following cannot be implemented using a stack?",
    options: [
      "Recursion",
      "Expression Evaluation",
      "Level-order Traversal",
      "Depth-first Search",
    ],
    correctAnswer: "Level-order Traversal",
  },
  {
    question: "In a hash table, collisions can be handled using:",
    options: [
      "Chaining",
      "Linear Probing",
      "Quadratic Probing",
      "All of these",
    ],
    correctAnswer: "All of these",
  },
  {
    question: "Which traversal is used to copy a binary tree?",
    options: ["Inorder", "Preorder", "Postorder", "Level order"],
    correctAnswer: "Preorder",
  },
  {
    question: "In a graph, how is a cycle detected using DFS?",
    options: [
      "Using a visited array",
      "Using parent tracking",
      "Both A and B",
      "Only with BFS",
    ],
    correctAnswer: "Both A and B",
  },
  {
    question:
      "Which sorting algorithm has the best average case for large data sets?",
    options: ["Insertion Sort", "Selection Sort", "Merge Sort", "Bubble Sort"],
    correctAnswer: "Merge Sort",
  },
  {
    question:
      "Which of the following problems can be solved by dynamic programming?",
    options: [
      "Knapsack",
      "Shortest Path",
      "Matrix Chain Multiplication",
      "All of these",
    ],
    correctAnswer: "All of these",
  },
  {
    question: "Which data structure is ideal for implementing undo operations?",
    options: ["Queue", "Stack", "Deque", "Graph"],
    correctAnswer: "Stack",
  },
  {
    question:
      "Which algorithm is used to detect negative weight cycles in a graph?",
    options: ["Prim’s", "Kruskal’s", "Bellman-Ford", "Dijkstra’s"],
    correctAnswer: "Bellman-Ford",
  },
  {
    question:
      "Which traversal visits all nodes of a binary tree level by level?",
    options: ["Preorder", "Postorder", "Inorder", "Level order"],
    correctAnswer: "Level order",
  },
  {
    question: "What is the time complexity of building a heap from an array?",
    options: ["O(n log n)", "O(n)", "O(log n)", "O(1)"],
    correctAnswer: "O(n)",
  },
  {
    question: "Which operation is most expensive in a Linked List?",
    options: ["Traversal", "Insertion", "Deletion", "Searching"],
    correctAnswer: "Searching",
  },
  {
    question: "Which algorithm is used for finding Minimum Spanning Tree?",
    options: [
      "Prim’s and Kruskal’s",
      "Dijkstra’s",
      "Bellman-Ford",
      "Floyd-Warshall",
    ],
    correctAnswer: "Prim’s and Kruskal’s",
  },
  {
    question: "In DFS, which data structure is used internally?",
    options: ["Queue", "Stack", "Linked List", "Heap"],
    correctAnswer: "Stack",
  },
  {
    question: "In recursion, what is the base case?",
    options: [
      "The first call",
      "The smallest input that stops recursion",
      "The return statement",
      "None of the above",
    ],
    correctAnswer: "The smallest input that stops recursion",
  },
  {
    question:
      "What is the time complexity of traversing a linked list of size n?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: "O(n)",
  },
  {
    question: "Which data structure is used in function call management?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    correctAnswer: "Stack",
  },
  {
    question: "Which of these algorithms uses backtracking?",
    options: ["Quick Sort", "N-Queens", "Merge Sort", "Counting Sort"],
    correctAnswer: "N-Queens",
  },
  {
    question: "Which traversal gives prefix expression in an expression tree?",
    options: ["Inorder", "Preorder", "Postorder", "Level order"],
    correctAnswer: "Preorder",
  },
  {
    question: "Which data structure can handle hierarchical data?",
    options: ["Array", "Linked List", "Tree", "Graph"],
    correctAnswer: "Tree",
  },
  {
    question:
      "What is the space complexity of recursive Fibonacci without memoization?",
    options: ["O(1)", "O(n)", "O(2^n)", "O(log n)"],
    correctAnswer: "O(n)",
  },
  {
    question: "Which sorting algorithm is in-place and unstable?",
    options: ["Merge Sort", "Heap Sort", "Insertion Sort", "Bubble Sort"],
    correctAnswer: "Heap Sort",
  },
  {
    question: "Which graph traversal can be implemented without recursion?",
    options: ["DFS", "BFS", "Both", "None"],
    correctAnswer: "BFS",
  },
  {
    question: "Which of these is a divide and conquer algorithm?",
    options: ["Quick Sort", "Bubble Sort", "Insertion Sort", "Counting Sort"],
    correctAnswer: "Quick Sort",
  },
  {
    question: "In a binary tree, maximum number of nodes at level l is:",
    options: ["l", "2^l", "2^(l-1)", "2^(l+1)"],
    correctAnswer: "2^l",
  },
  {
    question: "What is the height of a balanced binary tree with n nodes?",
    options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    correctAnswer: "O(log n)",
  },
  {
    question:
      "Which data structure is used in implementing Dijkstra’s algorithm?",
    options: ["Stack", "Priority Queue", "Queue", "Linked List"],
    correctAnswer: "Priority Queue",
  },
  {
    question:
      "Which algorithm is used in finding strongly connected components?",
    options: ["Kruskal’s", "Tarjan’s", "Prim’s", "Bellman-Ford"],
    correctAnswer: "Tarjan’s",
  },
  {
    question: "In dynamic programming, overlapping subproblems means:",
    options: [
      "Independent subproblems",
      "Repeated subproblems",
      "Recursive call reduction",
      "Greedy choice property",
    ],
    correctAnswer: "Repeated subproblems",
  },
  {
    question: "Which is more efficient for searching large datasets?",
    options: ["Hashing", "Linear Search", "Binary Search", "Traversal"],
    correctAnswer: "Hashing",
  },
  {
    question: "Which operation in AVL trees may cause rebalancing?",
    options: ["Insertion", "Deletion", "Both", "Search"],
    correctAnswer: "Both",
  },
  {
    question: "What is the auxiliary space complexity of Merge Sort?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: "O(n)",
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

export { csedata1, getCodeForScore, showUserCode };
