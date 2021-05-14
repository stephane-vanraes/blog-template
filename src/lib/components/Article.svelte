<script>
  export let html;
</script>

<article>
  {@html html}
</article>

<style>
  article {
    color: var(--primary--100);
    display: flex;
    flex-direction: column;
  }
  article > :global(* + *) {
    margin-top: 1em;
  }

  article :global(h1) {
    align-items: center;
    display: flex;
    font-size: 1.5em;
    gap: 1em;
    text-decoration: underline;
    text-decoration-color: var(--primary--400);
    text-decoration-thickness: 0.25em;
    text-decoration-style: solid;
  }
  article :global(h1:after, h1:before) {
    background: var(--primary--400);
    content: "";
    flex: 1 0;
    height: 0.25em;
  }
  article :global(img) {
    border-radius: 0.25em;
    box-shadow: 8px 8px var(--primary--300);
    margin: auto;
    max-width: 100%;
  }
</style>
