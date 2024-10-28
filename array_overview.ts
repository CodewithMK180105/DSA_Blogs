interface Feature {
  title: string;
  description: string;
  svgPath: string;
}

const features: Feature[] = [
  {
    title: "Comprehensive Tutorials",
    description: "Dive deep into DSA concepts with detailed tutorials and code examples in C++.",
    svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  },
  {
    title: "Interactive Code Examples",
    description: "Experiment with interactive code snippets to solidify your understanding of DSA concepts.",
    svgPath: "M13 16h-1v-4h-1m1-4h.01M12 20h.01M12 4h.01M4 12h.01M20 12h.01M4.93 4.93h.01M19.07 19.07h.01M4.93 19.07h.01M19.07 4.93h.01"
  },
  {
    title: "Algorithm Visualizations",
    description: "Visualize complex algorithms to better understand their inner workings and performance.",
    svgPath: "M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V5m0 11v-3m0 0H9m3 0h3"
  }
];

export default features;