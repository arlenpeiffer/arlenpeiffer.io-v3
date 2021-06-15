import netlify from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: netlify(),
    target: '#svelte'
  },

  preprocess: preprocess({
    scss: {
      prependData: `@import 'src/styles/main.scss';`
    }
  })
}

export default config
