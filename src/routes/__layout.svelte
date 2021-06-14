<script>
  import 'ress/ress.css'
  import image from '$lib/images/jockjams.jpg'

  const description =
    'A personal site for the person Arlen Peiffer who does web development things.'
  const title = 'Hi. I’m Arlen.'
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:image:secure_url" content={image} />
  <meta property="og:site_name" content="arlenpeiffer.io" />
  <meta property="og:title" content={title} />
  <meta property="og:url" content="https://arlenpeiffer.io" />
</svelte:head>

<slot />
