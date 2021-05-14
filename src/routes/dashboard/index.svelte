<script context="module">
  export async function load({ fetch, session }) {
    if (!session.isAuthorized) {
      return {
        status: 302,
        redirect: "/dashboard/login",
      };
    }

    const posts = await fetch("/blog.json").then(res => res.json());

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import { goto } from "$app/navigation";
  import { session } from "$app/stores";

  import Button from "$lib/components/Button.svelte";

  export let posts = [];

  async function logout() {
    await fetch("/dashboard/auth.json", { method: "DELETE" })
      .then(_ => session.update(s => ({ ...s, isAuthorized: false })))
      .then(_ => goto("/"));
  }
</script>

<Button on:click={logout}>Logout</Button>

<div class="wrapper">
  <div>
    <h2>Static Pages</h2>

    <ul>
      <li><a href="/dashboard/write/about">Edit the about page</a></li>
      <li><a href="/dashboard/write/frontpage">Edit the frontpage</a></li>
    </ul>
  </div>

  <div>
    <h2>Your blog posts</h2>
    <ul>
      <li class="new"><a href="/dashboard/write">Write a new blog post</a></li>
      {#each posts as post}
        <li><a href="/dashboard/write{post.slug}">{post.title}</a></li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    gap: 1em;
    grid-template-columns: 1fr 3fr;
    padding: 1em;
  }
  h2 {
    border-bottom: 2px solid var(--primary--200);
    color: var(--primary--200);
    font-weight: 600;
  }
  li:not(:last-child) > a {
    border-bottom: 2px dashed var(--primary--400);
  }
  a {
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
  .new {
    background-color: var(--primary--500);
  }
</style>
