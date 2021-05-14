<script>
  import { page } from "$app/stores";
</script>

<header>
  <h1>My Blog</h1>
  <div><img src="/images/avatar.jpg" alt="" /></div>
  <nav>
    <a href="/" aria-current={$page.path === "/"}>Home</a>
    <a href="/blog" aria-current={$page.path.startsWith("/blog")}>Blog</a>
    <a href="/about" aria-current={$page.path === "/about"}>About</a>
  </nav>
</header>

<style>
  header {
    align-items: center;
    background-color: var(--primary--100);
    box-shadow: 0 8px 8px var(--primary--300);
    color: white;
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 100px 1fr;
    margin-bottom: 2em;
    padding: 1em;
  }
  div {
    position: relative;
  }
  img {
    border: 10px solid var(--primary--100);
    border-radius: 50%;
    box-shadow: 0 8px 8px var(--primary--300);
    height: 6em;
    position: absolute;
    transform: translateY(-2em);
    width: 6em;
  }
  h1 {
    font-size: 1.5em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  nav {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    gap: 1em;
  }
  a {
    border-bottom: 2px solid transparent;
    padding: 0 1ch;
  }
  a[aria-current~="true"] {
    border-bottom-color: var(--primary--500);
    color: var(--primary--500);
  }
  a:active,
  a:focus,
  a:hover {
    border-bottom-color: var(--primary--500);
  }
</style>
