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
  <div>
    <h1>Hi. I'm Arlen.</h1>
    <h2>I help out with the internet.</h2>
  </div>
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
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    row-gap: 2rem;
    margin: auto;
    max-width: 40rem;
    padding: 2rem;
    text-align: center;

    img {
      grid-column: 2 / span 10;
      @include breakpoint(mobile) {
        grid-column: 3 / span 8;
      }
      @include breakpoint(tablet) {
        grid-column: 4 / span 6;
      }
    }

    div,
    ul {
      grid-column: 1 / -1;
      @include breakpoint(mobile) {
        grid-column: 3 / span 8;
      }
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
