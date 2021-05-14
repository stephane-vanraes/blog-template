<script context="module">
  export async function load({ fetch, page }) {
    const { slug } = page.params;
    const { post, related } = await fetch(`/blog/${slug}.json`).then(res =>
      res.json()
    );
    return {
      props: {
        post,
        related,
      },
    };
  }
</script>

<script>
  import Article from "$lib/components/Article.svelte";
  import ArticleList from "$lib/components/ArticleList.svelte";

  export let post = {};
  export let related = [];
</script>

{#if related.length}
  <aside>
    <ArticleList title="Related Posts" posts={related} nodetails />
  </aside>
{/if}
<Article {...post} />

<style>
  aside {
    float: right;
    margin-left: 2em;
    max-width: 20%;
  }
</style>
