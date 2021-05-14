<script context="module">
  export async function load({ fetch }) {
    const posts = await fetch("./blog.json").then(res => res.json());

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import ArticleList from "$lib/components/ArticleList.svelte";

  export let posts = [];
</script>

<ArticleList title="Latest Posts" {posts} />
