<script>
  export let nodetails;
  export let posts = [];
  export let title = "";
</script>

<div>
  <h2>{title}</h2>
  <ul>
    {#each posts as post}
      <li>
        <a href={post.slug}>
          <span>{post.title}</span>
          {#if !nodetails}
            <span>{post.date.substring(0, 10)}</span>
          {/if}
        </a>
      </li>
    {:else}
      <li class="none">I haven't written anything yet!</li>
    {/each}
  </ul>
</div>

<style>
  div {
    margin: auto;
    max-width: 800px;
    padding: 1em;
  }
  h2 {
    border-bottom: 2px solid var(--primary--400);
    font-weight: 600;
  }
  li:not(:first-child) > a {
    border-top: 2px dashed var(--primary--400);
  }
  a,
  .none {
    align-items: center;
    display: flex;
    gap: 1em;
    padding: 0.5em 1em;
  }
  a:active,
  a:focus,
  a:hover {
    background-color: var(--primary--400);
  }
  .none {
    font-weight: 600;
  }
  a > span:first-child {
    flex: 1 0;
  }
  a > span:not(:first-child) {
    font-size: 0.75em;
  }
</style>
