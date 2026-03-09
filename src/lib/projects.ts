export type ProjectDetail = {
  slug: string;
  title: string;
  description: string;
  year?: string;
  tags?: string[];
  cover: string;
  gallery?: string[];
  body?: string;
  deployment_link?: string;
  repo_link?: string;
};

export const projects: ProjectDetail[] = [
  {
    slug: "rag-notes-local-llm-study-assistant",
    title: "RAG Notes (Local LLM Study Assistant)",
    description:
      "Fully local RAG pipeline for semantic search over class notes via a conversational CLI.",
    tags: ["TypeScript", "Bun", "LangChain", "Ollama", "RAG", "CLI"],
    cover: "/raccoons/1.webp",
    gallery: [],
    body:
      "Developed a fully local RAG pipeline that ingests class notes and enables conversational semantic search. Built a Bun-based terminal app in TypeScript for fast indexing and querying, integrated LangChain with Ollama-hosted local LLMs for private offline QA, and focused on privacy, low-latency inference, and reproducible local deployment.",
    repo_link: "github.com/philipsoitu/rag-notes"
  },
  {
    slug: "kinect-scanner",
    title: "Kinect Scanner",
    description:
      "3D scanning app that captures RGB-D data from an Xbox Kinect and reconstructs 3D models.",
    tags: ["Zig", "libfreenect", "Raspberry Pi", "Nix", "3D Scanning"],
    cover: "/raccoons/2.webp",
    gallery: [],
    body:
      "Built a 3D scanning pipeline leveraging the open-source libfreenect driver to interface with Kinect hardware. Implemented a producer–consumer concurrency model in Zig to accelerate frame processing on a Raspberry Pi, and used Nix for reproducible cross-compilation across ARM and x86 Linux systems.",
    repo_link: "github.com/philipsoitu/kinect-scanner"
  },
  {
    slug: "ray-tracer",
    title: "Ray Tracer (School Project)",
    description:
      "Physically based ray tracer with reflections, refractions, motion blur, depth of field, and HDR environments.",
    tags: ["Ray Tracing", "Taichi", "GPU Compute", "Rendering"],
    cover: "/raccoons/3.webp",
    gallery: [],
    body:
      "Implemented a physically based ray tracer supporting dielectric materials, motion blur via time-dependent ray sampling, and depth of field. Integrated HDR environment maps using equirectangular projection and accelerated rendering with Taichi across backends like Vulkan, CUDA, and Metal. Private repository available upon request."
  },
  //   {
  //     slug: "javafx-planet-simulator",
  //     title: "JavaFX Planet Simulator",
  //     description:
  //       "3D N-body planetary simulation with Barnes–Hut optimization and real-time JavaFX visualization.",
  //     tags: ["Java", "JavaFX", "Barnes–Hut", "Simulation"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Built a 3D N-body simulator in Java with JavaFX visualization, using the Barnes–Hut algorithm to scale gravitational force calculations. Added interactive camera navigation, skybox rendering, and runtime parameter tuning, plus JSON-based scenario configuration and Scrum-based delivery with Jira."
  //   },
  //   {
  //     slug: "ai-semester-scheduler",
  //     title: "AI Semester Scheduler",
  //     description:
  //       "AI-powered deadline manager that parses syllabi and assignment docs into a unified task calendar.",
  //     year: "2026",
  //     tags: ["SvelteKit", "Bun", "MongoDB", "Gemini", "Auth0", "PDF.js"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Hackathon project at Concordia University (January 2026). Built a document AI pipeline to extract schedules from PDFs with dual parsing paths and robust error handling, then surfaced tasks in a real-time student calendar UI. Devpost: https://devpost.com/software/ask-ethan"
  //   },
  //   {
  //     slug: "crochet-visualizer",
  //     title: "Crochet Visualizer",
  //     description:
  //       "Automated 3D-to-crochet pattern generator with configurable, round-by-round instructions.",
  //     year: "2026",
  //     tags: ["FastAPI", "SvelteKit", "MongoDB", "Trimesh", "NumPy", "Auth0"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Hackathon project at McGill University (January 2026). Implemented geometric slicing and contour tracking to compute stitch counts and produce compact crochet notation, paired with an interactive frontend. Devpost: https://devpost.com/software/crochet-bltopw"
  //   },
  //   {
  //     slug: "roadtrippin-club",
  //     title: "RoadTrippin' Club",
  //     description:
  //       "Collaborative road trip planner with shared itineraries, voting, and interactive maps.",
  //     year: "2025",
  //     tags: ["Next.js", "Node.js", "MongoDB", "Auth0", "Mapbox"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Hackathon project at John Abbott College (April 2025). Built real-time multi-user trip planning with authentication, persistent storage, and map-based UI. Devpost: https://devpost.com/software/roadtrippin-club"
  //   },
  //   {
  //     slug: "ecodex",
  //     title: "Ecodex",
  //     description:
  //       "Environmental discovery app that identifies species from photos and delivers educational insights.",
  //     year: "2025",
  //     tags: ["Next.js", "Python", "Flask", "PyTorch", "Google Cloud"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Hackathon project at Polytechnique Montreal (February 2025). Integrated camera uploads, cloud-hosted backend, and interactive species feedback using custom ML models. Devpost: https://devpost.com/software/ecodex-eatyso"
  //   },
  //   {
  //     slug: "picitup",
  //     title: "PicItUp",
  //     description:
  //       "Realtime web app for treasure-hunt challenges with computer vision tracking.",
  //     year: "2025",
  //     tags: ["Next.js", "React", "Socket.io", "TypeScript", "Node.js"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Hackathon project at Concordia University (January 2025). Built a web app using websockets to power live treasure hunts and CV-based game state tracking. Devpost: https://devpost.com/software/pic-it-up"
  //   },
  //   {
  //     slug: "circuit-clash",
  //     title: "Circuit Clash",
  //     description:
  //       "Interactive platform that turns a simplified HDL into real-time circuit visualizations.",
  //     year: "2024",
  //     tags: ["Python", "SvelteKit", "Xata", "OAuth"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Hackathon project at Yale University (March 2024). Built a custom parser and backend that renders circuits from student-friendly HDL, with an intuitive SvelteKit frontend. Devpost: https://devpost.com/software/circuit-clash"
  //   },
  //   {
  //     slug: "pulseinterview",
  //     title: "PulseInterview (AI Interview Helper)",
  //     description:
  //       "GenAI-powered web app that generates interview questions and analyzes candidate answers.",
  //     year: "2024",
  //     tags: ["SvelteKit", "OpenAI API", "Google Cloud"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Hackathon project at Concordia University (January 2024). Built a GenAI workflow for question generation and answer analysis. Devpost: https://devpost.com/software/pulseinterview"
  //   },
  //   {
  //     slug: "buildmycv",
  //     title: "BuildMyCV",
  //     description:
  //       "Android AI-assisted resume generator with tailored CVs and cover letters.",
  //     year: "2024",
  //     tags: ["Kotlin", "Android", "Python", "MongoDB", "OpenAI API"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Hackathon project at College Jean-de-Brebeuf (January 2024). Integrated AI content generation with persistent storage to simplify resume creation and personalization. Devpost: https://devpost.com/software/buildmycv"
  //   },
  //   {
  //     slug: "eleetmath",
  //     title: "ELeetMath (Realtime 1v1 Math Game)",
  //     description:
  //       "Realtime 1v1 math game with Elo rating, powered by websockets.",
  //     year: "2023",
  //     tags: ["Next.js", "Socket.io", "WolframAlpha API"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Hackathon project at Polytechnique Montreal (February 2023). Built a competitive 1v1 math game with live matchmaking and ratings. Devpost: https://devpost.com/software/eleetmath"
  //   },
  //   {
  //     slug: "trashlink",
  //     title: "TrashLink",
  //     description:
  //       "IoT waste management system that monitors bin levels and visualizes status.",
  //     year: "2022",
  //     tags: ["Next.js", "Python", "Docker", "Kubernetes", "TensorFlow", "Raspberry Pi"],
  //     cover: "/raccoon.jpg",
  //     gallery: ["/raccoon.jpg"],
  //     body:
  //       "Hackathon project at Polytechnique Montreal (February 2022). Built an IoT pipeline for bin-level monitoring with visualization dashboards. Devpost: https://devpost.com/software/enron3"
  //   }
];
