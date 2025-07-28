import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // Add this line to fix Lucide imports
      'lucide-react': 'lucide-react/dist/esm/icons/index.js'
    },
  },
  optimizeDeps: {
    include: [
      'lucide-react',
      'lucide-react/dist/esm/icons/index.js',
      // Add other dependencies that need optimization
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu'
    ],
    esbuildOptions: {
      // Additional esbuild options
      loader: {
        '.js': 'jsx'
      }
    }
  },
  build: {
    commonjsOptions: {
      include: [/lucide-react/, /node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      external: [
        // Add any problematic modules here
      ],
      plugins: [
        // Add any rollup plugins if needed
      ]
    }
  }
}));
