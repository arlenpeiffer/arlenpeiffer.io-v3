<script>
  import jockjams from '$lib/images/jockjams.jpg'

  const links = [
    { href: 'https://github.com/arlenpeiffer', text: 'Github' },
    { href: 'https://twitter.com/arlenpeiffer', text: 'Twitter' },
    { href: 'https://bean.la', text: 'Bean.la' },
    { href: 'https://arlen.studio', text: 'arlen.studio' }
  ]
</script>

<main>
  <img
    src={jockjams}
    alt="Smiley kid holding an unopened copy of Jock Jams Volume 1 on compact disc"
  />
  <h1>Hi. I'm Arlen.</h1>
  <h2>I help out with the internet.</h2>
  <ul>
    {#each links as link}
      <li>
        <a href={link.href} target="_blank">
          {link.text}
        </a>
      </li>
    {/each}
  </ul>
</main>

<style lang="scss">
  main {
    padding: 2.5rem 3rem 2rem;
    @include breakpoint(mobile, max) {
      margin: 0 auto;
    }

    img {
      width: 100%;
      max-width: 18rem;
    }

    h1 {
      margin-top: 1.5rem;
    }

    ul {
      margin-top: 2rem;
    }

    li {
      line-height: 1.5;
      padding: 0.5rem 0px;
      a {
        border-bottom: 1px solid transparent;
        display: inline-block;
        outline: none;
        &:hover,
        &:focus {
          border-bottom-color: inherit;
        }
      }
    }
  }
</style>
