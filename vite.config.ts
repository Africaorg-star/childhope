export default defineConfig({
  optimizeDeps: {
    include: [
      'lucide-react',
      'lucide-react/dist/esm/icons/index.js'
    ]
  },
  build: {
    commonjsOptions: {
      include: [/lucide-react/, /node_modules/]
    }
  }
})
