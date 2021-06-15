import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  },

  preprocess: preprocess({
    scss: {
      prependData: `@import 'src/styles/main.scss';`
    }
  })
}

export default config
