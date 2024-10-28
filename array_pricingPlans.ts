interface Plan {
    name: string;
    price: string;
    features: string[];
  }
  
  const plans: Plan[] = [
    {
      name: "Basic",
      price: "$10/month",
      features: [
        "Introduction to Data Structures",
        "Basic Algorithms",
        "Sorting and Searching",
        "Stacks and Queues",
        "Linked Lists",
      ],
    },
    {
      name: "Standard",
      price: "$20/month",
      features: [
        "Advanced Data Structures",
        "Graph Algorithms",
        "Dynamic Programming",
        "Hash Tables",
        "Binary Trees",
      ],
    },
    {
      name: "Premium",
      price: "$30/month",
      features: [
        "Machine Learning Algorithms",
        "Backtracking Algorithms",
        "Advanced Graph Algorithms",
        "Algorithm Optimization",
        "Complexity Analysis",
      ],
    },
  ];
  
  export default plans;
  