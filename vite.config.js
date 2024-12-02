import { defineConfig } from 'vite';

export default defineConfig(() => ({
  build: {
    rollupOptions: {
      input: [
        'index.html',
        'portfolio-item-oldagram.html',
        'portfolio-item-tenzies.html',
        'portfolio-item-password-generator.html',
        'portfolio-item-meme-generator.html',
        'portfolio-item-quiz-app.html',
        'under-development.html',
        './js/index.js'
      ],
    },
  },
}));