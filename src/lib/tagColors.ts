const FALLBACK_COLOR = "#f2f2f2";

export const tagColorMap: Record<string, string> = {
  "TypeScript": "#3178C6",
  "Bun": "#F9C784",
  "LangChain": "#3B82F6",
  "Ollama": "#22C55E",
  "RAG": "#14B8A6",
  "CLI": "#6B7280",
  "Zig": "#F7A41D",
  "libfreenect": "#00AEEF",
  "Raspberry Pi": "#C7053D",
  "Nix": "#7EB5E6",
  "Ray Tracing": "#F59E0B",
  "Taichi": "#111827",
  "GPU Compute": "#84CC16",
  "Java": "#5382A1",
  "JavaFX": "#F89820",
  "Simulation": "#06B6D4",
  "SvelteKit": "#FF3E00",
  "MongoDB": "#47A248",
  "Gemini": "#4285F4",
  "Auth0": "#EB5424",
  "PDF.js": "#FF6A00",
  "FastAPI": "#009688",
  "Trimesh": "#8B5CF6",
  "NumPy": "#013243",
  "Next.js": "#E5E7EB",
  "Node.js": "#339933",
  "Mapbox": "#2D3748",
  "Python": "#3776AB",
  "Flask": "#E5E7EB",
  "PyTorch": "#EE4C2C",
  "Google Cloud": "#4285F4",
  "React": "#61DAFB",
  "Socket.io": "#E5E7EB",
  "Xata": "#22D3EE",
  "OAuth": "#3B82F6",
  "OpenAI API": "#10A37F",
  "Kotlin": "#7F52FF",
  "Android": "#3DDC84",
  "WolframAlpha API": "#DD1100",
  "Docker": "#2496ED",
  "Kubernetes": "#326CE5",
  "TensorFlow": "#FF6F00"
};

const normalizeHex = (value: string) => {
  const hex = value.trim();
  if (/^#?[0-9a-fA-F]{6}$/.test(hex)) {
    return hex.startsWith("#") ? hex : `#${hex}`;
  }
  return null;
};

export const getTagColor = (tag: string) =>
  tagColorMap[tag] ?? FALLBACK_COLOR;

export const toRgba = (value: string, alpha: number) => {
  const hex = normalizeHex(value) ?? FALLBACK_COLOR;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const clampedAlpha = Math.max(0, Math.min(1, alpha));
  return `rgba(${r}, ${g}, ${b}, ${clampedAlpha})`;
};
