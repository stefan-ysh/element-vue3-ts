import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   base: './'
// })
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [vue()],
    }
  } else if (command === 'build') {
    // command === 'build'
    return {
      // build specific config
      plugins: [vue()],
      base: './'
    }
  } else {
    return {
      // other config
      plugins: [vue()]
    }
  }
})